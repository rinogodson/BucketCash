import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Logo from "../components/Logo";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {isLoading && <p>Loading...</p>}
        {err && <p>{err}</p>}
      </form>
    </div>
  );
};
