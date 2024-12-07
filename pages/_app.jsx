import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../layout/Layout";
import store from "../redux/store";
import Router from "next/router";
import NProgress from "nprogress";

import { SessionProvider } from "next-auth/react"
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";

import "../styles/globals.css";
import "nprogress/nprogress.css";
import 'react-toastify/dist/ReactToastify.css';

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.remove());

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <div className="pt-[88px]">
            <ToastContainer />
            <Component {...pageProps} />
          </div>
        </Layout>
      </Provider>
    </SessionProvider>
  )
}
