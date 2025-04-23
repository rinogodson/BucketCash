import React, { useContext } from "react";
import "./Logo.css";
import { DashContext } from "../context/DashContext";
function Logo() {
  const dC = useContext(DashContext);
  return (
    <div className="logo" style={{ color: dC.isDark ? "#4F9768" : "#191918" }}>
      <span style={{ color: dC.isDark ? "#D4D4D4" : "#548164" }}>Bucket</span>
      Cash
    </div>
  );
}

export default Logo;
