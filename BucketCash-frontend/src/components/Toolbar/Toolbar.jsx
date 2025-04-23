import React, { useContext } from "react";
import "./Toolbar.css";
import Button from "../Button";
import ToolButton from "../ToolButton";
import { DashContext } from "../../context/DashContext";

function Toolbar() {
  const dC = useContext(DashContext);

  const newBucketHandler = () => {
    dC.fns.setValue((prev) => ({ ...prev, crModal: true }));
  };

  const mugHandler = () => {
    console.log("Mug handler called");
    dC.fns.setValue((prev) => ({ ...prev, isSelecting: true }));
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
          icon={<span style={{ color: "white" }}>🔄</span>}
        />
      </div>
    </>
  );
}

export default Toolbar;
