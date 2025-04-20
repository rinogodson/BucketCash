package handlers

import (
	"bucketcash/backend/db"
	"bucketcash/backend/models"
	"errors"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

const PondIndicatorID = 0

type TransferInput struct {
	FromBucketID uint  `json:"fromBucketId"`
	ToBucketID   uint  `json:"toBucketId"`
	Amount       int64 `json:"amount" binding:"required,gt=0"`
}

func TransferMoney(c *gin.Context) {
	var input TransferInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input: " + err.Error()})
		return
	}

	userIDAny, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusForbidden, gin.H{"error": "Authentication required"})
		return
	}
	userID := userIDAny.(uint)
	if input.Amount <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Transfer amount must be positive"})
		return
	}
	if input.FromBucketID == input.ToBucketID {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Cannot transfer to the same bucket"})
		return
	}

	isFromPond := input.FromBucketID == PondIndicatorID
	isToPond := input.ToBucketID == PondIndicatorID

	if isFromPond && isToPond {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Cannot transfer directly between Pond and Pond"})
		return
	}

	err := db.DB.Transaction(func(tx *gorm.DB) error {
		var fromBucket, toBucket models.Bucket
		var fromBucketIDNullable *uint
		var toBucketIDNullable *uint

		if !isFromPond {
			if err := tx.Set("gorm:query_option", "FOR UPDATE").Where("id = ? AND user_id = ?", input.FromBucketID, userID).First(&fromBucket).Error; err != nil {
				if errors.Is(err, gorm.ErrRecordNotFound) {
					return errors.New("source bucket not found or doesn't belong to user")
				}
				return err
			}
			if fromBucket.Balance < input.Amount {
				return errors.New("insufficient funds in source bucket")
			}
			fromBucket.Balance -= input.Amount
			if err := tx.Save(&fromBucket).Error; err != nil {
				return err
			}
			fromBucketIDNullable = &fromBucket.ID
		} else {
			fromBucketIDNullable = nil
		}

		if !isToPond {
			if err := tx.Set("gorm:query_option", "FOR UPDATE").Where("id = ? AND user_id = ?", input.ToBucketID, userID).First(&toBucket).Error; err != nil {
				if errors.Is(err, gorm.ErrRecordNotFound) {
					return errors.New("destination bucket not found or doesn't belong to user")
				}
				return err
			}
			toBucket.Balance += input.Amount
			if err := tx.Save(&toBucket).Error; err != nil {
				return err
			}
			toBucketIDNullable = &toBucket.ID
		} else {
			toBucketIDNullable = nil
		}

		transactionLog := models.Transaction{
			FromBucketID: fromBucketIDNullable,
			ToBucketID:   toBucketIDNullable,
			Amount:       input.Amount,
			Timestamp:    time.Now(),
			UserID:       userID,
		}
		if err := tx.Create(&transactionLog).Error; err != nil {
			return err
		}

		return nil
	})

	if err != nil {

		c.JSON(http.StatusBadRequest, gin.H{"error": "Transfer failed: " + err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Transfer successful"})
}

func GetTransactionLogs(c *gin.Context) {
	userIDAny, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusForbidden, gin.H{"error": "Authentication required"})
		return
	}
	userID := userIDAny.(uint)

	var logs []models.Transaction

	result := db.DB.Where("user_id = ?", userID).Order("timestamp desc").Find(&logs)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve transaction logs"})
		return
	}

	if logs == nil {
		logs = []models.Transaction{}
	}

	c.JSON(http.StatusOK, gin.H{"logs": logs})
}
