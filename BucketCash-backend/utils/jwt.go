package utils

import (
	"fmt"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var jwtSecretKey = []byte(os.Getenv("JWT_SECRET_KEY"))

func GenerateToken(userID uint) (string, error) {
	if len(jwtSecretKey) == 0 {
		fmt.Println("JWT NOT SET")
		os.Exit(2)
	}

	claims := jwt.MapClaims{
		"user_id": userID,
		"exp":     time.Now().Add(time.Hour * 72).Unix(),
		"iat":     time.Now().Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString(jwtSecretKey)

	if err != nil {
		return "", fmt.Errorf("could not sign token: %w", err)
	}

	return tokenString, nil
}

func ValidateToken(tokenString string) (uint, error) {
	if len(jwtSecretKey) == 0 {
		fmt.Println("JWT NOT SET")
		os.Exit(2)
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return jwtSecretKey, nil
	})

	if err != nil {
		return 0, fmt.Errorf("token parsing error: %w", err)
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		if exp, ok := claims["exp"].(float64); ok {
			if time.Unix(int64(exp), 0).Before(time.Now()) {
				return 0, fmt.Errorf("token expired")
			}
		} else {
			return 0, fmt.Errorf("invalid expiration claim")
		}

		if userIDFloat, ok := claims["user_id"].(float64); ok {
			return uint(userIDFloat), nil
		}
		return 0, fmt.Errorf("invalid user_id claim")
	}

	return 0, fmt.Errorf("invalid token")
}
