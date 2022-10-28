import type { NextPage } from "next";
import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { BsFillBookFill } from "react-icons/bs";
import { FcFilmReel } from "react-icons/fc";
import { RiVideoAddFill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { GoSmiley } from "react-icons/go";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container flex bg-[#18191a] justify-center items-center mt-16">
        <div className="w-6/12 flex-col justify-center items-center h-screen text-white">
          <div className="w-9/12 bg-[#242526] mt-4 rounded-lg">
            <div className="flex justify-evenly pb-4 text-[#b0b3b8] border-b border-[#b0b3b8]">
              <div className="flex mt-4 cursor-pointer hover:bg-[#4e4f50] w-40 h-12 justify-center items-center rounded-lg">
                <div className="mt-1 mx-1 text-xl">
                  <BsFillBookFill />
                </div>
                <div>
                  <h2>Stories</h2>
                </div>
              </div>
              <div className="flex mt-4 cursor-pointer hover:bg-[#4e4f50] w-40 h-12 justify-center items-center rounded-lg">
                <div className="mt-1 mx-1 text-xl">
                  <FcFilmReel />
                </div>
                <div>
                  <h2>Reels</h2>
                </div>
              </div>
              <div className="flex mt-4 cursor-pointer hover:bg-[#4e4f50] w-40 h-12 justify-center items-center rounded-lg">
                <div className="mt-1 mx-1 text-xl">
                  <RiVideoAddFill />
                </div>
                <div>
                  <h2>Rooms</h2>
                </div>
              </div>
            </div>
            <div className="ml-4 mt-4 flex space-x-2">
              <div className="h-40 w-24 rounded-lg overflow-hidden border border-black cursor-pointer">
                <div className="relative hover:scale-105 transition-all duration-500">
                  <Image
                    src={"/man2.webp"}
                    alt=""
                    height={100}
                    width={100}
                    className="hover:"
                  />
                  <div className="absolute w-full h-full bg-black top-0 left-0 opacity-10 hover:opacity-20"></div>
                </div>
                <div className="bg-[#242526] w-full h-full text-sm flex-col justify-center hover:bg-[#18191a] z-30">
                  <div className="flex justify-center">
                    <AiFillPlusCircle className="text-[#2e89ff] text-3xl left-9 bottom-10" />
                  </div>
                  <div className="flex justify-center">Create Story</div>
                </div>
              </div>

              <div className="h-40 w-24 rounded-lg overflow-hidden border border-black cursor-pointer relative">
                <div className="w-full h-full hover:scale-105 transition-all duration-500">
                  <Image
                    src={"/story1.jpg"}
                    alt=""
                    height={100}
                    width={100}
                    className=""
                  />
                  <div className="absolute w-full h-full bg-black top-0 left-0 opacity-10 hover:opacity-20"></div>
                </div>

                <div className="w-9 h-9 rounded-full overflow-hidden cursor-pointer flex justify-center items-center absolute top-2 left-2 border-4 border-[#2e89ff] ">
                  <Image
                    src={"/man3.jpeg"}
                    alt=""
                    height={70}
                    width={70}
                    className=""
                  />
                </div>
              </div>
              <div className="h-40 w-24 rounded-lg overflow-hidden border border-black cursor-pointer relative">
                <div className="hover:scale-105 transition-all duration-500">
                  <Image
                    src={"/story5.jpg"}
                    alt=""
                    height={100}
                    width={120}
                    className=""
                  />
                  <div className="absolute w-full h-full bg-black top-0 left-0 opacity-10 hover:opacity-20"></div>
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden cursor-pointer flex justify-center items-center absolute top-2 left-2 border-4 border-[#2e89ff] ">
                  <Image
                    src={"/man4.jpg"}
                    alt=""
                    height={70}
                    width={70}
                    className=""
                  />
                </div>
              </div>
              <div className="h-40 w-24 rounded-lg overflow-hidden border border-black cursor-pointer relative">
                <div className=" hover:scale-105 transition-all duration-500">
                  <Image
                    src={"/story3.jpg"}
                    alt=""
                    height={100}
                    width={100}
                    className=""
                  />
                  <div className="absolute w-full h-full bg-black top-0 left-0 opacity-10 hover:opacity-20"></div>
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden cursor-pointer flex justify-center items-center absolute top-2 left-2 border-4 border-[#2e89ff] ">
                  <Image
                    src={"/man5.jpg"}
                    alt=""
                    height={70}
                    width={70}
                    className=""
                  />
                </div>
              </div>
              <div className="h-40 w-24 rounded-lg overflow-hidden border border-black cursor-pointer relative">
                <div className="relative hover:scale-105 transition-all duration-500">
                  <Image
                    src={"/story4.jpg"}
                    alt=""
                    height={100}
                    width={100}
                    className="hover:"
                  />
                  <div className="absolute w-full h-full bg-black top-0 left-0 opacity-10 hover:opacity-20"></div>
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden cursor-pointer flex justify-center items-center absolute top-2 left-2 border-4 border-[#2e89ff] ">
                  <Image
                    src={"/man2.webp"}
                    alt=""
                    height={70}
                    width={70}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-9/12 bg-[#242526] mt-4 rounded-lg py-2">
            <div className="flex justify-start mx-4 my-2 border-b py-2">
              <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center relative">
                <Image
                  src={"/man2.webp"}
                  alt=""
                  height={70}
                  width={70}
                  className=""
                />
              </div>
              <div className="w-full">
                <input
                  className="bg-[#3a3b3c] py-2 px-4 mx-2 rounded-full text-white w-full cursor-pointer hover:bg-[#4e4f50]"
                  type="text"
                  placeholder="What's on your mind?"
                />
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="flex justify-center items-center space-x-2 cursor-pointer hover:bg-[#4e4f50] w-40 h-10 rounded-lg">
                <div className="mt-1 text-[#f3425f] text-2xl">
                  <RiVideoAddFill />
                </div>
                <div>
                  <h2>Live video</h2>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-2 cursor-pointer hover:bg-[#4e4f50] w-40 h-10 rounded-lg">
                <div className="mt-1 text-[#45bd62] text-2xl">
                  <FaPhotoVideo />
                </div>
                <div>
                  <h2>Photo/Video</h2>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-2 cursor-pointer hover:bg-[#4e4f50] w-40 h-10 rounded-lg">
                <div className="mt-1 text-[#f7b928] text-2xl">
                  <GoSmiley />
                </div>
                <div>
                  <h2>Feeling/Activity</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
