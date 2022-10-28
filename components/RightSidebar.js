import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 hidden lg:block">
      <div className="w-3/12 h-screen overflow-auto bg-[#18191a] absolute right-0 top-16 text-white px-1">
        <div className="flex justify-between my-2">
          <div className="cursor-pointer w-10 h-10 flex justify-center items-center ml-5">
            <h2>Contacts</h2>
          </div>
          <div className="flex space-x-4">
            <div className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#3a3b3c]">
              <RiVideoAddFill />
            </div>
            <div className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#3a3b3c]">
              <BsSearch />
            </div>
            <div className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#3a3b3c]">
              <HiDotsHorizontal />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-1 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded relative">
            <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center relative">
              <Image
                src={"/man2.webp"}
                alt=""
                height={70}
                width={70}
                className=""
              />
            </div>
              <div className="w-3 h-3 bg-green-500 rounded-full absolute border-2 border-black bottom-2 left-11"></div>
            <div className="mx-3 mt-2">John Wick</div>
          </div>
          <div className="mt-1 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded relative">
            <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center relative">
              <Image
                src={"/man3.jpeg"}
                alt=""
                height={70}
                width={70}
                className=""
              />
            </div>
              <div className="w-3 h-3 bg-green-500 rounded-full absolute border-2 border-black bottom-2 left-11"></div>
            <div className="mx-3 mt-2">Ben Stokes</div>
          </div>
          <div className="mt-1 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded relative">
            <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center relative">
              <Image
                src={"/man4.jpg"}
                alt=""
                height={70}
                width={70}
                className=""
              />
            </div>
              <div className="w-3 h-3 bg-green-500 rounded-full absolute border-2 border-black bottom-2 left-11"></div>
            <div className="mx-3 mt-2">Brad Pitt</div>
          </div>
          <div className="mt-1 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded relative">
            <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center relative">
              <Image
                src={"/man5.jpg"}
                alt=""
                height={70}
                width={70}
                className=""
              />
            </div>
              <div className="w-3 h-3 bg-green-500 rounded-full absolute border-2 border-black bottom-2 left-11"></div>
            <div className="mx-3 mt-2">James Cameron</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
