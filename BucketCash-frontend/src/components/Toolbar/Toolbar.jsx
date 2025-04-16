import React from "react";
import "./Toolbar.css";
import Button from "../Button";

function Toolbar() {
  return (
    <>
      <div className="toolbar">
        <Button color="blue" text="New Bucket" />
      </div>
    </>
  );
}

export default Toolbar;
