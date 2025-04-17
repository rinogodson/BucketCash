import React from "react";
import Toolbar from "./Toolbar/Toolbar";
import "./BottomBar.css";
import Logs from "./Logs";
import Pond from "./Pond/Pond";
function BottomBar() {
  return (
    <div className="bottombar">
      <Toolbar />
      <Logs />
    </div>
  );
}

export default BottomBar;
