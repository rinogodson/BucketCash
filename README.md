# BucketCash

## Project Structure:
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
