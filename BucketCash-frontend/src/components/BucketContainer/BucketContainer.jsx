import React, { useContext } from "react";
import "./BucketContainer.css";
import { Bucket } from "../Bucket/Bucket";
import dashContext from "../../context/DashContext";


function BucketContainer() {

  const dC = useContext(dashContext);
  // TODO: make this dynamic
  return (
    <div className="container">
      {dC.buckets.map((bucket) => {
        return (
          <Bucket
            key={bucket.id}
            perc={bucket.Balance * 100 / 10000}
            money={bucket.Balance}
            color="#C4554D"
            name={bucket.name}
          />
        )
      })}

    </div>
  );
}

export default BucketContainer;
