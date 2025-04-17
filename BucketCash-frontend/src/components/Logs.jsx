import React from "react";
import "./Logs.css";

const Logs = () => {
  return (
    <>
      <div className="logs-container">
        <h1 className="logs-heading">Logs.</h1>
        <div className="logs">
          <LogComponent />
        </div>
      </div>
    </>
  );
};

export default Logs;

const LogComponent = () => {
  return <></>;
};
