import Link from "next/link";
import React, { useRef, useState } from "react";
import { BsShop, BsMessenger } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { TbGridDots, TbDeviceGamepad } from "react-icons/tb";
import {
  MdNotificationsActive,
  MdOutlineGroups,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const clickToggle = () => {
    if (!ref.current.classList.contains("border-b-4")) {
      ref.current.classList.add("border-b-4");
      ref2.current.classList.remove("border-b-4");
      ref3.current.classList.remove("border-b-4");
      ref4.current.classList.remove("border-b-4");
      ref5.current.classList.remove("border-b-4");
    } 
    
    
    
  }
  const clickToggle2 = () =>{
    if (!ref2.current.classList.contains("border-b-4")) {
      ref.current.classList.remove("border-b-4");
      ref2.current.classList.add("border-b-4");
      ref3.current.classList.remove("border-b-4");
      ref4.current.classList.remove("border-b-4");
      ref5.current.classList.remove("border-b-4");
    }
  }
  const clickToggle3 = () =>{
    if (!ref3.current.classList.contains("border-b-4")) {
      ref.current.classList.remove("border-b-4");
      ref2.current.classList.remove("border-b-4");
      ref3.current.classList.add("border-b-4");
      ref4.current.classList.remove("border-b-4");
      ref5.current.classList.remove("border-b-4");
    }
  }
  const clickToggle4 = () =>{
    if (!ref4.current.classList.contains("border-b-4")) {
      ref.current.classList.remove("border-b-4");
      ref2.current.classList.remove("border-b-4");
      ref3.current.classList.remove("border-b-4");
      ref4.current.classList.add("border-b-4");
      ref5.current.classList.remove("border-b-4");
    }
  }
  const clickToggle5 = () =>{
    if (!ref5.current.classList.contains("border-b-4")) {
      ref.current.classList.remove("border-b-4");
      ref2.current.classList.remove("border-b-4");
      ref3.current.classList.remove("border-b-4");
      ref4.current.classList.remove("border-b-4");
      ref5.current.classList.add("border-b-4");
    }
  }
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  return (
    <div className="bg-[#242526]">
      <div className="flex justify-between items-center mx-5">
        <div className="flex my-2">
          <div>
            <Image src={"/facebook-logo.png"} alt="" height={45} width={45} />
          </div>
          <div>
            <input
              className="bg-[#3a3b3c] py-2 px-4 mx-2 rounded-full text-white w-64"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </div>
        <div className="my-1">
          <ul className="flex text-[#b0b3b8] text-3xl">
            <div ref={ref} className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg border-[#2374e1]" title="Home"  onClick={clickToggle}  >
              <Link href={"/"}>
                <AiOutlineHome />
              </Link>
            </div>
            <Link ref={ref2}
              href={"/"}
              className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg border-[#2374e1]"
              title="Watch" onClick={clickToggle2} 
            >
              <MdOutlineOndemandVideo />
            </Link>
            <Link ref={ref3}
              href={"/"}
              className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg border-[#2374e1]"
              title="Marketplace" onClick={clickToggle3} 
            >
              <BsShop />
            </Link>
            <Link ref={ref4}
              href={"/"}
              className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg border-[#2374e1]" 
              title="Groups" onClick={clickToggle4} 
            >
              <MdOutlineGroups />
            </Link>
            <Link ref={ref5}
              href={"/"}
              className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg border-[#2374e1]"
              title="Gaming" onClick={clickToggle5} 
            >
              <TbDeviceGamepad />
            </Link>
          </ul>
        </div>
        <div className="flex text-[#e4e6eb] my-2 text-xl space-x-4">
          <div className="w-11 h-11 flex justify-center items-center rounded-full bg-[#3a3b3c] hover:bg-[#4e4f50] cursor-pointer">
            <TbGridDots />
          </div>
          <div className="w-11 h-11 flex justify-center items-center rounded-full bg-[#3a3b3c] hover:bg-[#4e4f50] cursor-pointer">
            <BsMessenger />
          </div>
          <div className="w-11 h-11 flex justify-center items-center rounded-full bg-[#3a3b3c] hover:bg-[#4e4f50] cursor-pointer">
            <MdNotificationsActive />
          </div>
          <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
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
  );
};

export default Navbar;
