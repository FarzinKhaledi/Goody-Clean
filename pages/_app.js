import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "../styles/meanmenu.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import "swiper/css/bundle";
// Global styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Layouts/GoTop";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Ston - Disinfection Cleaning Services React Next Template</title>
      </Head>

      <Component {...pageProps} />

      <GoTop />
    </>
  );
}
