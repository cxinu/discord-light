import Head from "next/head";
import SideBar from "../components/SideBar";
import BaseContainer from "../components/BaseContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Discord</title>
        <meta content="stdcinx" name="twitter:site" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="discord-light" property="og:title" />
        <meta content="https://discord-light.vercel.app" property="og:url" />
        <meta content="Rebuilt Discrod App" name="description" />
        <meta
          content="Rebuilt the entire Discord App. Professionally created in my moms basement, with bug/features like Animated profile pictures, nice buttons like bubble wrap but most importantly #ffffff absolute russian flashbang white bg."
          property="og:description"
        />
        <meta
          content="https://cdn.discordapp.com/attachments/959774329346883626/1031862295430705216/unknown.png"
          property="og:image"
        />

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
}
