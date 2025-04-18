import React from "react";
import "./BucketContainer.css";
import { Bucket } from "../Bucket/Bucket";

function BucketContainer() {
  return (
    <div className="container">
      <Bucket perc={30} money={"30k"} color="#C4554D" name="Bucket 1" />
      <Bucket perc={40} money={"40k"} color="#8B67AB" name="Savings" />
      <Bucket perc={50} money={"50k"} color="#CB782F" name="Pocket" />
    </div>
  );
}

export default BucketContainer;
