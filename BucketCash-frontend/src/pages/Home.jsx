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
      <p
        style={{
          color: "#A6FFC4",
          fontSize: "1.5em",
          fontWeight: "bold",
        }}
      >No need to share your personal email, use a fake one</p>
      <a
        style={{
          color: "#A6FFC4",
          fontSize: "1.5em",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
        href="https://hc-cdn.hel1.your-objectstorage.com/s/v3/1a4315d33ee91f0a8a6b49c2677923917c62e789_screen_recording_2025-04-25_at_10.20.36___am.mp4">Here's a Video Tutorial</a>
    </motion.div>
  );
};
