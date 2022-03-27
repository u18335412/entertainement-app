import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Navbar from "../src/components/shared/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <NextNProgress color="#FC4747" options={{ showSpinner: false }} />
      <Navbar />
      <div className="pl-[10.25rem] w-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
