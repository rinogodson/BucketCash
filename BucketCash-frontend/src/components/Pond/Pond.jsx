import React from "react";
import "./Pond.css";
import { useContext } from "react";
import { DashContext } from "../../context/DashContext";
const Pond = () => {
  const dC = useContext(DashContext);

  const pondHandler = () => {
    console.log("Bucket clicked");
    if (dC.isSelecting) {
      if (!dC.lev) {
        console.log("toID pond set");
        dC.fns.setValue((prev) => ({ ...prev, fromID: 0 }));
        dC.fns.setValue((prev) => ({
          ...prev,
          lev: true,
        }));
      } else {
        console.log("fromID pond set");
        dC.fns.setValue((prev) => ({ ...prev, toID: 0 }));
        dC.fns.setValue((prev) => ({
          ...prev,
          lev: false,
        }));
        dC.fns.setValue((prev) => ({ ...prev, trModal: true }));
        dC.fns.setValue((prev) => ({ ...prev, isSelecting: false }));
      }
    }
  };

  return (
    <div className="pondCont">
      <div onClick={pondHandler} className="pond"></div>
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
