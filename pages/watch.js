import React from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { AiTwotoneLike, AiFillHeart } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { BiWorld, BiLike } from "react-icons/bi";

const watch = () => {
  return (
    <div>
      <div className="container flex bg-[#18191a] justify-center items-center mt-16">
        <div className="w-screen lg:w-6/12 flex flex-col items-center overflow-auto h-full text-white">
          {/* video 1 started */}
          <div className="w-9/12 bg-[#242526] mt-4 rounded-lg">
            <div className="flex justify-start mx-4 my-2 py-2">
              <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center relative">
                <Image
                  src={"/man2.webp"}
                  alt=""
                  height={70}
                  width={70}
                  className="cursor-pointer"
                />
              </div>
              <div className="mx-2">
                <h2 className="cursor-pointer">John Wick</h2>
                <p className="text-xs flex text-[#b0b3b8]">
                  35m <BsDot className="mt-1" />{" "}
                  <BiWorld className=" text-base" />
                </p>
              </div>
            </div>
            <div className="mx-4 space-y-2">
              <p>My first video</p>
              <video src="/hero.mp4" autoPlay controls loop></video>
            </div>
            <div className="mx-4 mt-4 flex justify-between border-b pb-3">
              <div className="flex">
                <AiTwotoneLike className="text-[#2374e1] cursor-pointer" />
                <AiFillHeart className="text-[#f3425f] cursor-pointer" />
                <span className="ml-2 text-xs text-[#b0b3b8] cursor-pointer">
                  335
                </span>
              </div>
              <div className="flex text-xs  text-[#b0b3b8] space-x-2">
                <p className="cursor-pointer">30 Comments</p>
                <p className="cursor-pointer">5 Shares</p>
              </div>
            </div>
            <div className="mx-4 flex justify-evenly mt-2 text-[#b0b3b8]">
              <div className="flex justify-center items-center rounded-md cursor-pointer h-8 w-40 hover:bg-[#3a3b3c]">
                <BiLike className="mt-1 mx-1 text-xl" />
                <p>Like</p>
              </div>
              <div className="flex justify-center items-center rounded-md cursor-pointer h-8 w-40 hover:bg-[#3a3b3c]">
                <FaRegCommentAlt className="mt-1 mx-1" />
                <p>Comment</p>
              </div>
              <div className="flex justify-center items-center rounded-md cursor-pointer h-8 w-40 hover:bg-[#3a3b3c]">
                <RiShareForwardLine className="mt-1 mx-1 text-xl" />
                <p>Share</p>
              </div>
            </div>
          </div>
          {/* video 1 ends */}
          {/* video 2 started */}
          <div className="w-9/12 bg-[#242526] mt-4 rounded-lg">
            <div className="flex justify-start mx-4 my-2 py-2">
              <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center relative">
                <Image
                  src={"/man3.jpeg"}
                  alt=""
                  height={70}
                  width={70}
                  className="cursor-pointer"
                />
              </div>
              <div className="mx-2">
                <h2 className="cursor-pointer">Ben Stokes</h2>
                <p className="text-xs flex text-[#b0b3b8]">
                  35m <BsDot className="mt-1" />{" "}
                  <BiWorld className=" text-base" />
                </p>
              </div>
            </div>
            <div className="mx-4 space-y-2">
              <p>My son studies hard...😍</p>
              <video src="/video1.mp4" autoPlay controls loop></video>
            </div>
            <div className="mx-4 mt-4 flex justify-between border-b pb-3">
              <div className="flex">
                <AiTwotoneLike className="text-[#2374e1] cursor-pointer" />
                <AiFillHeart className="text-[#f3425f] cursor-pointer" />
                <span className="ml-2 text-xs text-[#b0b3b8] cursor-pointer">
                  335
                </span>
              </div>
              <div className="flex text-xs  text-[#b0b3b8] space-x-2">
                <p className="cursor-pointer">30 Comments</p>
                <p className="cursor-pointer">5 Shares</p>
              </div>
            </div>
            <div className="mx-4 flex justify-evenly mt-2 text-[#b0b3b8]">
              <div className="flex justify-center items-center rounded-md cursor-pointer h-8 w-40 hover:bg-[#3a3b3c]">
                <BiLike className="mt-1 mx-1 text-xl" />
                <p>Like</p>
              </div>
              <div className="flex justify-center items-center rounded-md cursor-pointer h-8 w-40 hover:bg-[#3a3b3c]">
                <FaRegCommentAlt className="mt-1 mx-1" />
                <p>Comment</p>
              </div>
              <div className="flex justify-center items-center rounded-md cursor-pointer h-8 w-40 hover:bg-[#3a3b3c]">
                <RiShareForwardLine className="mt-1 mx-1 text-xl" />
                <p>Share</p>
              </div>
            </div>
          </div>
          {/* video 2 ends */}
          {/* video 3 starts */}

          <div className="w-9/12 bg-[#242526] mt-4 rounded-lg">
            <div className="flex justify-start mx-4 my-2 py-2">
              <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center relative">
                <Image
                  src={"/man4.jpg"}
                  alt=""
                  height={70}
                  width={70}
                  className="cursor-pointer"
                />
              </div>
              <div className="mx-2">
                <h2 className="cursor-pointer">Brad Pitt</h2>
                <p className="text-xs flex text-[#b0b3b8]">
                  35m <BsDot className="mt-1" />{" "}
                  <BiWorld className=" text-base" />
                </p>
              </div>
            </div>
            <div className="mx-4 space-y-2">
              <p>This is my university</p>
              <video src="/video2.mp4" autoPlay controls loop></video>
            </div>
            <div className="mx-4 mt-4 flex justify-between border-b pb-3">
              <div className="flex">
                <AiTwotoneLike className="text-[#2374e1] cursor-pointer" />
                <AiFillHeart className="text-[#f3425f] cursor-pointer" />
                <span className="ml-2 text-xs text-[#b0b3b8] cursor-pointer">
                  335
                </span>
              </div>
              <div className="flex text-xs  text-[#b0b3b8] space-x-2">
                <p className="cursor-pointer">30 Comments</p>
                <p className="cursor-pointer">5 Shares</p>
              </div>
            </div>
            <div className="mx-4 flex justify-evenly mt-2 text-[#b0b3b8]">
              <div className="flex justify-center items-center rounded-md cursor-pointer h-8 w-40 hover:bg-[#3a3b3c]">
                <BiLike className="mt-1 mx-1 text-xl" />
                <p>Like</p>
              </div>
              <div className="flex justify-center items-center rounded-md cursor-pointer h-8 w-40 hover:bg-[#3a3b3c]">
                <FaRegCommentAlt className="mt-1 mx-1" />
                <p>Comment</p>
              </div>
              <div className="flex justify-center items-center rounded-md cursor-pointer h-8 w-40 hover:bg-[#3a3b3c]">
                <RiShareForwardLine className="mt-1 mx-1 text-xl" />
                <p>Share</p>
              </div>
            </div>
          </div>
          {/* video 3 ends */}
          {/* video 4 Starts */}
          <div className="w-9/12 bg-[#242526] mt-4 rounded-lg">
            <div className="flex justify-start mx-4 my-2 py-2">
              <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center relative">
                <Image
                  src={"/man5.jpg"}
                  alt=""
                  height={70}
                  width={70}
                  className="cursor-pointer"
                />
              </div>
              <div className="mx-2">
                <h2 className="cursor-pointer">James Cameron</h2>
                <p className="text-xs flex text-[#b0b3b8]">
                  35m <BsDot className="mt-1" />{" "}
                  <BiWorld className=" text-base" />
                </p>
              </div>
            </div>
            <div className="mx-4 space-y-2">
              <p>This is my classroom</p>
              <video src="/video3.mp4" autoPlay controls loop></video>
            </div>
            <div className="mx-4 mt-4 flex justify-between border-b pb-3">
              <div className="flex">
                <AiTwotoneLike className="text-[#2374e1] cursor-pointer" />
                <AiFillHeart className="text-[#f3425f] cursor-pointer" />
                <span className="ml-2 text-xs text-[#b0b3b8] cursor-pointer">
                  335
                </span>
              </div>
              <div className="flex text-xs  text-[#b0b3b8] space-x-2">
                <p className="cursor-pointer">30 Comments</p>
                <p className="cursor-pointer">5 Shares</p>
              </div>
            </div>
            <div className="mx-4 flex justify-evenly mt-2 text-[#b0b3b8]">
              <div className="flex justify-center items-center rounded-md cursor-pointer h-8 w-40 hover:bg-[#3a3b3c]">
                <BiLike className="mt-1 mx-1 text-xl" />
                <p>Like</p>
              </div>
              <div className="flex justify-center items-center rounded-md cursor-pointer h-8 w-40 hover:bg-[#3a3b3c]">
                <FaRegCommentAlt className="mt-1 mx-1" />
                <p>Comment</p>
              </div>
              <div className="flex justify-center items-center rounded-md cursor-pointer h-8 w-40 hover:bg-[#3a3b3c]">
                <RiShareForwardLine className="mt-1 mx-1 text-xl" />
                <p>Share</p>
              </div>
            </div>
          </div>
          {/* video 4 ends */}
        </div>
      </div>
    </div>
  );
};

export default watch;
