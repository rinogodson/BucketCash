import React from "react";
import { useEffect } from "react";
import "./crModal.css";
import Button from "../Button";
import { useContext } from "react";
import { DashContext } from "../../context/DashContext";
const CrModal = () => {
  const dC = useContext(DashContext);

  const [newBucketDetails, setNewBucketDetails] = React.useState({
    name: "",
    amount: "0",
    max: "10000",
  });

  const handleSubmit = async () => {
    dC.fns.createBucket(
      newBucketDetails.name,
      Number(newBucketDetails.amount),
      Number(newBucketDetails.max),
    );
    dC.fns.setValue((prev) => ({ ...prev, crModal: false }));
  };

  useEffect(() => {
    console.log(newBucketDetails);
  }, [newBucketDetails]);

  return (
    <>
      <div className="crModalBg">
        <div className="crModal">
          {" "}
          <h1 className="crModalHeader">Create Bucket</h1>
          <div className="crModalBody">
            <input
              className="InputBox"
              type="text"
              placeholder="Name"
              value={newBucketDetails.name}
              onChange={(e) => {
                setNewBucketDetails({
                  ...newBucketDetails,
                  name: e.target.value,
                });
              }}
            />
            <input
              className="InputBox"
              type="text"
              placeholder="Initial Balance"
              value={newBucketDetails.amount / 100}
              onChange={(e) => {
                setNewBucketDetails({
                  ...newBucketDetails,
                  amount: e.target.value * 100,
                });
              }}
            />
            <input
              className="InputBox"
              type="text"
              placeholder="MaxBalance"
              value={newBucketDetails.max / 100}
              onChange={(e) => {
                setNewBucketDetails({
                  ...newBucketDetails,
                  max: e.target.value * 100,
                });
              }}
            />
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Button
              text={"Cancel"}
              color={"#C4C4C4"}
              click={() =>
                dC.fns.setValue((prev) => ({ ...prev, crModal: false }))
              }
            />
            <Button text={"Submit"} color={"green"} click={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CrModal;
