package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Username string   `gorm:"unique; not null"`
	Email    string   `gorm:"unique; not null"`
	Password string   `gorm:"not null"`
	Buckets  []Bucket `gorm:"foreignKey: UserID"`
}

type Bucket struct {
	gorm.Model
	UserID  uint   `gorm:"not null"`
	Name    string `gorm:"not null"`
	Balance int64  `gorm:"default:0"`
	Max     int64  `gorm:"default:10000"`
	User    User   `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}

type Transaction struct {
	gorm.Model
	FromBucketID *uint     `gorm:"index"`
	ToBucketID   *uint     `gorm:"index"`
	Amount       int64     `gorm:"not null"`
	Timestamp    time.Time `gorm:"not null"`
	UserID       uint      `gorm:"not null"`
}
