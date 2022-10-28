import React from "react";
import Image from "next/image";
import { BsFillBookFill, BsDot } from "react-icons/bs";
import { FcFilmReel } from "react-icons/fc";
import { RiVideoAddFill, RiShareForwardLine } from "react-icons/ri";
import { AiFillPlusCircle, AiTwotoneLike, AiFillHeart } from "react-icons/ai";
import { FaPhotoVideo, FaRegCommentAlt } from "react-icons/fa";
import { GoSmiley } from "react-icons/go";
import { BiWorld, BiLike } from "react-icons/bi";

const Homepage = () => {
  return (
    <div>
      <div className="container flex bg-[#18191a] justify-center items-center mt-16">
        <div className="w-6/12 flex items-center flex-col h-full text-white">
          {/* Story, reels, rooms started */}
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
                <div className="hover:scale-105 transition-all duration-500">
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
          {/* Story, reels, rooms ends */}
          {/* Status bar started */}
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
              <div className="flex justify-center items-center space-x-2 cursor-pointer hover:bg-[#3a3b3c] w-40 h-10 rounded-lg">
                <div className="mt-1 text-[#f3425f] text-2xl">
                  <RiVideoAddFill />
                </div>
                <div>
                  <h2>Live video</h2>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-2 cursor-pointer hover:bg-[#3a3b3c] w-40 h-10 rounded-lg">
                <div className="mt-1 text-[#45bd62] text-2xl">
                  <FaPhotoVideo />
                </div>
                <div>
                  <h2>Photo/Video</h2>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-2 cursor-pointer hover:bg-[#3a3b3c] w-40 h-10 rounded-lg">
                <div className="mt-1 text-[#f7b928] text-2xl">
                  <GoSmiley />
                </div>
                <div>
                  <h2>Feeling/Activity</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Status bar ends */}
          {/* Post 1 started */}
          <div className="w-9/12 bg-[#242526] mt-4 rounded-lg py-2">
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
            <div className="mx-4">
              <p>
                This is my first post and I am feeling so much excitement in me.
              </p>
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
          {/* Post 1 ends */}
          {/* Post 2 Starts */}

          <div className="w-9/12 bg-[#242526] mt-4 rounded-lg py-2">
            <div className="flex justify-start mx-4 my-2 py-2">
              <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center relative">
                <Image
                  src={"/man3.jpeg"}
                  alt=""
                  height={70}
                  width={70}
                  className=""
                />
              </div>
              <div className="mx-2">
                <h2 className="cursor-pointer">John Wick</h2>
                <p className="text-xs flex text-[#b0b3b8]">
                  5h <BsDot className="mt-1" />{" "}
                  <BiWorld className=" text-base" />
                </p>
              </div>
            </div>
            <div className="mx-4">
              <p>I have posted this picture</p>
              <Image
                src={"/post1.jpg"}
                alt=""
                height={1000}
                width={1000}
                className="h-full w-full"
              />
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
          {/* Post 2 Ends */}
          {/* Post 3 Started */}

          <div className="w-9/12 bg-[#242526] mt-4 rounded-lg py-2">
            <div className="flex justify-start mx-4 my-2 py-2">
              <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center relative">
                <Image
                  src={"/man4.jpg"}
                  alt=""
                  height={70}
                  width={70}
                  className=""
                />
              </div>
              <div className="mx-2">
                <h2 className="cursor-pointer">Brad Pitt</h2>
                <p className="text-xs flex text-[#b0b3b8]">
                  1h <BsDot className="mt-1" />{" "}
                  <BiWorld className=" text-base" />
                </p>
              </div>
            </div>
            <div className="mx-4">
              <p>Pakistani Bowling lineup 😍😍</p>
              <Image
                src={"/post2.jpg"}
                alt=""
                height={1000}
                width={1000}
                className="h-full w-full"
              />
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
          {/* Post 3 Ends */}
          {/* Post 4 Started */}

          <div className="w-9/12 bg-[#242526] mt-4 rounded-lg py-2">
            <div className="flex justify-start mx-4 my-2 py-2">
              <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center relative">
                <Image
                  src={"/man5.jpg"}
                  alt=""
                  height={70}
                  width={70}
                  className=""
                />
              </div>
              <div className="mx-2">
                <h2 className="cursor-pointer">James Cameron</h2>
                <p className="text-xs flex text-[#b0b3b8]">
                  1d <BsDot className="mt-1" />{" "}
                  <BiWorld className=" text-base" />
                </p>
              </div>
            </div>
            <div className="mx-4">
              <p>Bangladesh lost the match..😢</p>
              <Image
                src={"/post3.jpg"}
                alt=""
                height={1000}
                width={1000}
                className="h-full w-full"
              />
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
          {/* Post 4 Ends */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
