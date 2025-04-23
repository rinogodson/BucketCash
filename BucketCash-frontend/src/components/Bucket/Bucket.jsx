import { DashContext } from "../../context/DashContext";
import "./Bucket.css";
import React, { useContext } from "react";
export const Bucket = ({ click, perc, money, color, name, max }) => {
  const dC = useContext(DashContext);
  return (
    <div className="bCont" onClick={click}>
      <div
        className="bucket"
        style={{
          background: `linear-gradient(0deg, ${color} 0 ${perc}%, rgba(255, 255, 255, 0) ${perc}% 100%)`,
          border: "solid 22px",
          borderColor: dC.isDark ? "#E3E3E3" : "#191918",
          borderTop: "none",
        }}
      >
        <div className="amount">
          <p>$ {money / 100}</p>
        </div>
      </div>
      <p
        className="BucketName"
        style={{ color: dC.isDark ? "white" : "black" }}
      >
        {name}
      </p>
      <p style={{ color: dC.isDark ? "white" : "black" }} className="BucketMax">
        {"Max: " + max / 100}
      </p>
    </div>
  );
};
