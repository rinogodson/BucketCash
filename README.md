# 🪣 BucketCash
*Keep your money inside buckets and manage it productively. Just a simple financing app for those dumb Brainrots. \s*
## 🚀 Features
- **Pond**: *You got income or made an expense, blame all of it to the pond. Nothing complicated, take ~water~ money from pond, put money to the pond. It's richer than Musk.*
- **Logs**: *Need to show your mom where your money went? use logs!!*
- **Mug**: *Pickup the Mug tool and take ~water~ money from one bucket to another.*
- **Dark Mode**: The name says it all!

## 🛠️ Demo  
[Click me!!! click me!! :)](https://bucketcash.netlify.app/)


## 📚 Usage  
First, register.
Then log in, add your buckets, and use the Mug to transfer money!
Use the Pond for income and expenses, and the Logs to keep track of everything (obviously).

**NOTE:**
In the transfer window, the first number input is for the initial money, and the second is for the maximum money the bucket can hold.
(Technically, a bucket can hold infinite money — but that would just be annoying. *Source: trust me bro!*)


## 📦 Project Structure:
```
📦
├── BucketCash-backend
│   ├── db
│   │   └── database.go
│   ├── go.mod
│   ├── go.sum
│   ├── handlers
│   │   ├── auth.go
│   │   ├── buckets.go
│   │   └── transfers.go
│   ├── main.go
│   ├── middleware
│   │   └── auth.go
│   ├── models
│   │   └── models.go
│   └── utils
│       └── jwt.go
├── BucketCash-frontend
│   ├── eslint.config.js
│   ├── index.html
│   ├── notes.txt
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── _redirects
│   ├── README.md
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── components
│   │   │   ├── BottomBar.css
│   │   │   ├── BottomBar.jsx
│   │   │   ├── Bucket
│   │   │   │   ├── Bucket.css
│   │   │   │   └── Bucket.jsx
│   │   │   ├── BucketContainer
│   │   │   │   ├── BucketContainer.css
│   │   │   │   └── BucketContainer.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── crModal
│   │   │   │   ├── crModal.css
│   │   │   │   └── CrModal.jsx
│   │   │   ├── Logo.css
│   │   │   ├── Logo.jsx
│   │   │   ├── Logs.css
│   │   │   ├── Logs.jsx
│   │   │   ├── Pond
│   │   │   │   ├── Pond.css
│   │   │   │   └── Pond.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── Toolbar
│   │   │   │   ├── Toolbar.css
│   │   │   │   └── Toolbar.jsx
│   │   │   ├── ToolButton.jsx
│   │   │   └── trModal
│   │   │       ├── trModal.css
│   │   │       └── TrModal.jsx
│   │   ├── context
│   │   │   ├── AuthContext.jsx
│   │   │   └── DashContext.jsx
│   │   ├── Dashboard.jsx
│   │   ├── hooks
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignupPage.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── services
│   │       ├── api.js
│   │       └── authService.js
│   └── vite.config.js
├── package-lock.json
├── package.json
└── README.md
```



## 🤝 Contributing  
Contributions are welcome! Please fork the repository and submit a pull request.  

1. Fork the project.  
2. Create a new branch:  
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add some feature"
   ```
4. Push the branch:  
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

## 📄 License  
This project is licensed under the [MIT License](LICENSE).
