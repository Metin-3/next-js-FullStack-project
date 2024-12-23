import Head from "next/head";
import Home from "./home/index";
import axios from "axios";

export default function Index({categoryList, productList}) {
  return (
    <div>
      <Head>
        <title>Create Next Appp</title>
        <meta name="description" content="html" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <Home categoryList={categoryList} productList={productList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);
  const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  return {
    props:{
      categoryList: res.data ? res.data : [],
      productList: product.data ? product.data : [],
    },
  };
};
