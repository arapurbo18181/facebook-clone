import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <LeftSidebar/>
      <RightSidebar/>
    </div>
  );
};

export default Home;
