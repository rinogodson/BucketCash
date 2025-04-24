import React from "react";
import "./Logs.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DashContext } from "../context/DashContext";

const Logs = () => {
  const [open, isOpen] = React.useState(false);
  const dC = useContext(DashContext);
  const openHandler = () => {
    isOpen(!open);
  };

  return (
    <>
      <motion.div
        layout
        className="logs-container"
        style={{
          background: dC.isDark ? "#191919" : "#f4f4f4",
          borderColor: dC.isDark ? "#252525" : "#E3E3E3",
        }}
      >
        <h1
          className="logs-heading"
          style={{
            color: dC.isDark ? "white" : "black",
          }}
          onClick={openHandler}
        >
          Logs.
        </h1>
        <div className="logs">{open && <LogComponent />}</div>
      </motion.div>
    </>
  );
};

export default Logs;

const LogComponent = () => {
  const dC = useContext(DashContext);

  const getBucketName = (bucketId) => {
    const bucket = dC.buckets.find((b) => b.ID === bucketId);
    return bucket ? bucket.Name : "Unknown";
  };
  return (
    <div
      className="log"
      style={
        dC.isDark
          ? { background: "#191919", borderColor: "#252525" }
          : { background: "#fff", borderColor: "#E3E3E3" }
      }
    >
      {console.log(dC)}
      {dC.logs.map((log) => (
        <LogBlock
          key={log.ID}
          fromBucket={getBucketName(log.FromBucketID)}
          toBucket={getBucketName(log.ToBucketID)}
          amount={log.Amount / 100}
          time={log.Timestamp}
          note={""}
        />
      ))}
    </div>
  );
};

const LogBlock = ({ fromBucket, toBucket, amount, time, note }) => {
  const dC = useContext(DashContext);
  return (
    <div
      className={"log-block"}
      style={
        dC.isDark
          ? { backgroundColor: "#191919", color: "white" }
          : { backgroundColor: "#f4f4f4", color: "black" }
      }
    >
      <h1 className="path">
        {fromBucket} to {toBucket}
      </h1>
      <div className="log-note">{note}</div>
      <div className="log-amount">{amount}</div>
      <div className="log-time">{time}</div>
    </div>
  );
};
