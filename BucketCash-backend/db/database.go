package db

import (
	"bucketcash/backend/models"
	"log"
	"os"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	var err error
	dbName := "bucketcash.db"

	DB, err = gorm.Open(sqlite.Open(dbName), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to DB")
		os.Exit(1)
	}

	log.Println("Database Connected Successfully!!")
	err = DB.AutoMigrate(&models.User{}, &models.Bucket{}, &models.Transaction{})
	if err != nil {
		log.Fatal("Failed to migrate database:", err)
	}

	log.Println("Database Migrated")
}
