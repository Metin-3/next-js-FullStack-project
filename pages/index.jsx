import Head from "next/head";
import Home from "./home/index"

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create Next Appp</title>
        <meta name="description" content="html" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center">Hello Metin</h1>
      <Home />
    </div>
  );
}
