import React, { useContext, useEffect, useState } from "react";
import "./Toolbar.css";
import Button from "../Button";
import ToolButton from "../ToolButton";
import { DashContext } from "../../context/DashContext";

function Toolbar() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  const dC = useContext(DashContext);

  const newBucketHandler = () => {
    dC.fns.setValue((prev) => ({ ...prev, crModal: true }));
  };

  const mugHandler = () => {
    console.log("Mug handler called");
    if (!dC.isSelecting) {
      dC.fns.setValue((prev) => ({ ...prev, isSelecting: true }));
      dC.fns.setValue((prev) => ({ ...prev, fromID: 0, toID: 0 }));
    }
    if (dC.isSelecting) {
      dC.fns.setValue((prev) => ({ ...prev, isSelecting: false }));
    }
  };

  return (
    <>
      <div
        className="toolbar"
        style={{
          background: dC.isDark ? "#191919" : "#f4f4f4",
          borderColor: dC.isDark ? "#252525" : "#E3E3E3",
        }}
      >
        <Button color="#548164" text="New Bucket" click={newBucketHandler} />
        <ToolButton
          click={mugHandler}
          icon={
            <span
              style={
                dC.isSelecting
                  ? {
                      position: "fixed",
                      background: "black",
                      padding: "10px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "5px 50% 50% 50%",
                      border: "2px solid #191919",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                      left: position.x,
                      top: position.y,
                      pointerEvents: "none",
                      zIndex: 1000,
                    }
                  : {}
              }
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.083 5h10.834A1.08 1.08 0 0 1 16 6.077v8.615C16 17.072 14.06 19 11.667 19H7.333C4.94 19 3 17.071 3 14.692V6.077A1.08 1.08 0 0 1 4.083 5M16 8h2.5c1.38 0 2.5 1.045 2.5 2.333v2.334C21 13.955 19.88 15 18.5 15H16"
                />
              </svg>
            </span>
          }
        />
      </div>
    </>
  );
}

export default Toolbar;
