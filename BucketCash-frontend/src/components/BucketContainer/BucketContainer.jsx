import React, { useContext } from "react";
import "./BucketContainer.css";
import { Bucket } from "../Bucket/Bucket";
import { DashContext } from "../../context/DashContext";
function BucketContainer() {
  const dC = useContext(DashContext);
  return (
    <div
      className="container"
      style={{
        background: dC.isDark ? "#191919" : "#f4f4f4",
        borderColor: dC.isDark ? "#252525" : "#E3E3E3",
      }}
    >
      {dC.buckets &&
        dC.buckets.map((bucket, index) => {
          return (
            <Bucket
              key={index}
              perc={(bucket.Balance * 100) / bucket.Max}
              money={bucket.Balance}
              color={"#C4C4C4"}
              name={bucket.Name}
              max={bucket.Max}
            />
          );
        })}
    </div>
  );
}

export default BucketContainer;
