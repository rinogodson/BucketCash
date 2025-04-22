import BottomBar from "./components/BottomBar";
import BucketContainer from "./components/BucketContainer/BucketContainer";
import Logo from "./components/Logo";
import Pond from "./components/Pond/Pond";

function Dashboard() {
  return (
    <>
      <Logo />
      <BucketContainer />
      <BottomBar />
      <Pond />
    </>
  );
}

export default Dashboard
