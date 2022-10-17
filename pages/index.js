import Head from "next/head";
import SideBar from "../components/SideBar";
import BaseContainer from "../components/BaseContainer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Discord</title>
        <meta name="Disocrd" content="Rebuilt Discrod App" />
        <link rel="icon" type="image/png" href="/discord-light.png" />
      </Head>
      <main>
        <div className="absolute flex h-full w-full overflow-hidden bg-gray-300 dark:bg-gray-900">
          <SideBar />
          <BaseContainer />
        </div>
      </main>
    </div>
  );
};

export default Home;
