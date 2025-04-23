import React from "react";
import "./Pond.css";
import { useContext } from "react";
import { DashContext } from "../../context/DashContext";
const Pond = () => {
  const dC = useContext(DashContext);

  return (
    <div className="pondCont">
      <div className="pond"></div>
      <p
        className="pondText"
        style={{
          color: dC.isDark ? "white" : "black",
        }}
      >
        pond
      </p>
    </div>
  );
};

export default Pond;
