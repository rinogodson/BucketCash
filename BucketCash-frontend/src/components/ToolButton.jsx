import React from "react";

const ToolButton = ({ icon, onClick }) => {
  return (
    <button className="tool" onClick={onClick}>
      {icon}
    </button>
  );
};

export default ToolButton;
