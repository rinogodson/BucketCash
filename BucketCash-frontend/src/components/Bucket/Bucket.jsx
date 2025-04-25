import { DashContext } from "../../context/DashContext";
import "./Bucket.css";
import { motion, useAnimation } from "framer-motion";
import React, { useContext, useState } from "react";
export const Bucket = ({ id, click, perc, money, color, name, max }) => {
  const dC = useContext(DashContext);

  const selectingHandler = () => {
    if (dC.isSelecting) {
      return { scale: 1.1 };
    }
  };

  return (
    <motion.div
      className="bCont"
      onClick={click}
      animate={() => {
        if (dC.fromID === id && dC.isSelecting) {
          return { rotate: [0, 5, 0] };
        }
        return { rotate: [0, 0, 0] };
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <motion.div
        whileHover={selectingHandler()}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bucket"
        style={{
          background: `linear-gradient(0deg, ${color} 0 ${perc}%, rgba(255, 255, 255, 0) ${perc}% 100%)`,
          border: "solid 22px",
          borderColor: dC.isDark ? "#333" : "#191918",
          borderTop: "none",
        }}
      >
        <div className="amount">
          <p>$ {money / 100}</p>
        </div>
      </motion.div>
      <p
        className="BucketName"
        style={{ color: dC.isDark ? "white" : "black" }}
      >
        {name}
      </p>
      <p style={{ color: dC.isDark ? "white" : "black" }} className="BucketMax">
        {"Max: " + max / 100}
      </p>
    </motion.div>
  );
};
