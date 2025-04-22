import "./App.css";

import { AuthProvider } from "./context/AuthContext";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import DashProvider from "./context/DashContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashProvider>
                <Dashboard />
              </DashProvider>
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
