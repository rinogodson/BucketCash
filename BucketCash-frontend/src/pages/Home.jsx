import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  const navigate = useNavigate();
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
      <div style={{ display: "flex", gap: "80px" }}>
        <Button
          text="Login"
          color={"#40614b"}
          click={() => {
            navigate("/login");
          }}
        />
        <Button
          text="Register"
          color={"#40614b"}
          click={() => {
            navigate("/register");
          }}
        />
      </div>
    </motion.div>
  );
};
