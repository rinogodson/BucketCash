import React, { useContext } from "react";
import "./BucketContainer.css";
import { Bucket } from "../Bucket/Bucket";
import { DashContext } from "../../context/DashContext";
function BucketContainer() {
  const dC = useContext(DashContext);
  const [lev, setLev] = React.useState(false);
  const bucketHandler = (id) => {
    console.log("Bucket clicked");
    if (dC.isSelecting) {
      if (!lev) {
        console.log("toID set");
        dC.fns.setValue((prev) => ({ ...prev, fromID: id }));
        setLev(true);
      } else {
        console.log("fromID set");
        dC.fns.setValue((prev) => ({ ...prev, toID: id }));
        setLev(false);
        dC.fns.setValue((prev) => ({ ...prev, trModal: true }));
        dC.fns.setValue((prev) => ({ ...prev, isSelecting: false }));
      }
    }
  };
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
              click={() => bucketHandler(bucket.ID)}
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
