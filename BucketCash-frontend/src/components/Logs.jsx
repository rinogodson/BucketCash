import React from "react";
import "./Logs.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DashContext } from "../context/DashContext";
const Logs = () => {
  const [open, isOpen] = React.useState(false);
  const dC = useContext(DashContext);
  const openHandler = () => {
    isOpen(!open);
  };

  return (
    <>
      <motion.div
        layout
        className="logs-container"
        style={{
          background: dC.isDark ? "#191919" : "#f4f4f4",
          borderColor: dC.isDark ? "#252525" : "#E3E3E3",
        }}
      >
        <h1
          className="logs-heading"
          style={{
            color: dC.isDark ? "white" : "black",
          }}
          onClick={openHandler}
        >
          Logs.
        </h1>
        <div className="logs">{open && <LogComponent />}</div>
      </motion.div>
    </>
  );
};

export default Logs;

const LogComponent = () => {
  return (
    <div className="log">
      1. Transferred 1000 tokens to user123.
      <br />
      2. Received 500 tokens from user456.
      <br />
      3. Sent 200 tokens to user789.
      <br />
      4. Transferred 300 tokens to user101.
      <br />
      5. Received 100 tokens from user234.
      <br />
      6. Sent 150 tokens to user567.
      <br />
      7. Transferred 250 tokens to user890.
      <br />
      8. Received 75 tokens from user901.
      <br />
      9. Sent 100 tokens to user345.
      <br />
      10. Transferred 125 tokens to user678.
    </div>
  );
};
