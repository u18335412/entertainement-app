import Head from "next/head";
import Image from "next/image";
import SearchComponent from "../src/components/search";
import Thumbnail from "../src/components/shared/thumbnail";

export default function Home() {
  return (
    <div className="text-white flex justify-center items-center h-screen">
      {/* <Thumbnail /> */}
      <SearchComponent />
    </div>
  );
}
