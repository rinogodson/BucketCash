import { useContext } from "react";
import BottomBar from "./components/BottomBar";
import BucketContainer from "./components/BucketContainer/BucketContainer";
import CrModal from "./components/crModal/CrModal";
import Logo from "./components/Logo";
import Pond from "./components/Pond/Pond";
import { DashContext } from "./context/DashContext";
import TrModal from "./components/trModal/trModal";

function Dashboard() {
  const dC = useContext(DashContext);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: dC.isDark ? "black" : "white",
        overflow: "none",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Logo />
      <BucketContainer />
      <BottomBar />
      <Pond />
      {dC.crModal && <CrModal />}
      {dC.trModal && <TrModal />}

      <button
        onClick={() => {
          dC.fns.setValue((prev) => ({ ...prev, isDark: !dC.isDark }));
        }}
      >
        Theme
      </button>
    </div>
  );
}

export default Dashboard;
