import "./App.css";

import { AuthProvider } from "./context/AuthContext";
import { Home } from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import DashProvider from "./context/DashContext";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key="gg">
        <Route
          path="/"
          element={
            localStorage.getItem("bucketcash_token") ? (
              <Navigate to="/dashboard" state={{ from: location }} replace />
            ) : (
              <Home />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashProvider>
                <Dashboard />
              </DashProvider>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
