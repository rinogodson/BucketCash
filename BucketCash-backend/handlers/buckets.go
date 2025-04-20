package handlers

import (
	"bucketcash/backend/db"
	"bucketcash/backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

type CreateBucketInput struct {
	Name string `json:"name" binding:"required"`

	InitialBalance int64 `json:"initialBalance"`
}

func CreateBucket(c *gin.Context) {
	var input CreateBucketInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input: " + err.Error()})
		return
	}

	userID, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "User ID not found in context"})
		return
	}

	userIDUint, ok := userID.(uint)
	if !ok {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "User ID has invalid type"})
		return
	}

	bucket := models.Bucket{
		UserID:  userIDUint,
		Name:    input.Name,
		Balance: input.InitialBalance,
	}

	result := db.DB.Create(&bucket)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create bucket"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Bucket created successfully", "bucket": bucket})
}

func GetBuckets(c *gin.Context) {
	userID, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "User ID not found in context"})
		return
	}
	userIDUint, ok := userID.(uint)
	if !ok {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "User ID has invalid type"})
		return
	}

	var buckets []models.Bucket

	result := db.DB.Where("user_id = ?", userIDUint).Order("created_at asc").Find(&buckets)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve buckets"})
		return
	}

	if buckets == nil {
		buckets = []models.Bucket{}
	}

	c.JSON(http.StatusOK, gin.H{"buckets": buckets})
}
