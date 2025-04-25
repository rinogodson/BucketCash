import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import AuthContext from "../context/AuthContext";
import { motion } from "framer-motion";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { setErr: setAuthError } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError(null);
    setError(null);
    setIsLoading(true);
    navigate("/login");

    try {
      await registerUser({ username, email, password });
      alert("Registered successfully, pls login");
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      key="box"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      style={{ background: "#548164" }}
      className="homeBox"
    >
      <div style={{ color: "#A6FFC4", fontSize: "5em", fontWeight: "bold" }}>
        <span style={{ color: "#fff" }}>Bucket</span>
        Cash
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          className="InputBox"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="InputBox"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="InputBox"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="SubmitBt" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
        {error && <p>{error}</p>}
      </form>
    </motion.div>
  );
}

export default SignupPage;
