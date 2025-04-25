import React from "react";
import "./trModal.css";
import Button from "../Button";
import { useContext } from "react";
import { DashContext } from "../../context/DashContext";
const TrModal = () => {
  const dC = useContext(DashContext);

  const [transferDetails, setTransferDetails] = React.useState({
    fromID: dC.fromID,
    toID: dC.toID,
    amount: "0",
  });

  const handleSubmit = async () => {
    dC.fns.transfer(
      transferDetails.fromID,
      transferDetails.toID,
      Number(transferDetails.amount * 100),
    );
    dC.fns.setValue((prev) => ({ ...prev, trModal: false }));
    dC.fns.setValue((prev) => ({ ...prev, fromID: 0, toID: 0 }));
  };

  return (
    <>
      <div className="trModalBg">
        <div className="trModal">
          {" "}
          <h1 className="trModalHeader">Transfer</h1>
          <div className="trModalBody">
            <input
              className="InputBox"
              type="text"
              placeholder="Amount to Transfer"
              value={transferDetails.amount}
              onChange={(e) => {
                setTransferDetails({
                  ...transferDetails,
                  amount: e.target.value,
                });
              }}
            />
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Button
              text={"Cancel"}
              color={"#C4C4C4"}
              click={() => {
                dC.fns.setValue((prev) => ({ ...prev, trModal: false }));
                dC.fns.setValue((prev) => ({ ...prev, fromID: 0, toID: 0 }));
              }}
            />
            <Button text={"Submit"} color={"green"} click={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrModal;
