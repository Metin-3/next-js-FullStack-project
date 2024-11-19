import Head from "next/head";
import Home from "./home/index"
import Header from "../components/layout/Header";
import Input from "../components/form/Input";

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
      <Header />
      <Home />
      <div className="p-20 container mx-auto">
        <Input />
      </div>
    </div>
  );
}
