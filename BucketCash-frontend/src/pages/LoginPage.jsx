import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Logo from "../components/Logo";
import { motion } from "framer-motion";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loginAction, isLoading, err, setErr } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);

    const success = await loginAction({ email, password });

    if (success) {
      navigate("/dashboard");
    } else {
      console.log("Login failed");
      window.alert("Login failed, maybe check your credentials?");
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
        <button className="SubmitBt" type="submit">
          Login
        </button>
        {err && <p>{err}</p>}
      </form>
    </motion.div>
  );
};
