import "./App.css";
import BottomBar from "./components/BottomBar";
import BucketContainer from "./components/BucketContainer/BucketContainer";
import Logo from "./components/Logo";
import Pond from "./components/Pond/Pond";
import { AuthProvider } from "./context/AuthContext";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";


function App() {
  return (
   <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />

        </Routes>
      </Router>
    </AuthProvider> 
  );
}

export default App;
