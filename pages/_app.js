import "../styles/globals.css";
import SideBar from "../components/SideBar";
import BaseContainer from "../components/BaseContainer";

function MyApp() {
  return (
    <div className="absolute flex h-full w-full overflow-hidden bg-gray-300 dark:bg-gray-900">
      <SideBar />
      <BaseContainer />
    </div>
  );
}

export default MyApp;
