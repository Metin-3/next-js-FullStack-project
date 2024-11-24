import Head from "next/head";
import Home from "./home/index";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create Next Appp</title>
        <meta name="description" content="html" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <Home />
    </div>
  );
}
