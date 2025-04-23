import React from "react";

const ToolButton = ({ click, icon }) => {
  return (
    <button className="tool" onClick={click}>
      {icon || "⚙️"}
    </button>
  );
};

export default ToolButton;
