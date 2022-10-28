import type { NextPage } from "next";
import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";

const Home: NextPage = () => {
  return (
    <div>
      <Homepage/>
    </div>
  );
};

export default Home;
