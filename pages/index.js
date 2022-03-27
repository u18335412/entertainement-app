import Head from "next/head";
import Image from "next/image";
import Recommended from "../src/components/recommended";
import SearchComponent from "../src/components/search";
import TrendingComponent from "../src/components/trending";

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full text-white">
      <SearchComponent />
      <TrendingComponent />
      <div className="pr-9">
        <Recommended />
      </div>
    </div>
  );
}
