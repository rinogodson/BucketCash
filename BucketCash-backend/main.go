package main

import (
	"bucketcash/backend/db"
	"bucketcash/backend/handlers"
	"bucketcash/backend/middleware"
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	log.Println("Starting BucketCash Backend...")

	db.ConnectDatabase()
	log.Println("Database Initialized.")

	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}
	router.Use(cors.New(config))
	log.Println("CORS Middleware Initialized (Allowing All Origins - Configure for Production!).")

	api := router.Group("/api")
	{

		auth := api.Group("/auth")
		{
			auth.POST("/register", handlers.Register)
			auth.POST("/login", handlers.Login)
		}

		protected := api.Group("/")
		protected.Use(middleware.AuthMiddleware())
		{

			protected.POST("/buckets", handlers.CreateBucket)
			protected.GET("/buckets", handlers.GetBuckets)

			protected.POST("/transfer", handlers.TransferMoney)

			protected.GET("/logs", handlers.GetTransactionLogs)
		}
	}

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	port := os.Getenv("PORT")
	log.Printf("Server starting on port %s\n", port)
	if err := router.Run(":" + port); err != nil {
		log.Fatal("Failed to run server:", err)
	}
}
