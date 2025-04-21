import React from "react";
function Button({ color, text, click}) {
  return (
    <button className="button" onClick={click} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

export default Button;
