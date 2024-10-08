import Head from "next/head";
import SideBar from "../components/SideBar";
import BaseContainer from "../components/BaseContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Discord</title>
        <meta content="discord-light" property="og:title" />
        <meta
          content="very nice app professionaly made in mom's basement with cool feature/bug but importantly #ffffff absolute russian flashbang white bg."
          property="og:description"
        />
        <meta content="https://discord-light.vercel.app" property="og:url" />
        <meta content="summary_large_image" name="twitter:card" />

        <link rel="icon" type="image/png" href="/discord-light.png" />
      </Head>
      <main>
        <div className="absolute flex h-full w-full overflow-hidden bg-gray-300 dark:bg-gray-900">
          <SideBar />
          <BaseContainer />
        </div>
      </main>
    </>
  );
}
