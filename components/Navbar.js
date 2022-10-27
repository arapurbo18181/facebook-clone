import Link from "next/link";
import React from "react";
import {
  BsShop,
  BsMessenger,
} from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { TbGridDots, TbDeviceGamepad } from "react-icons/tb";
import { MdNotificationsActive, MdOutlineGroups, MdOutlineOndemandVideo } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-[#242526]">
      <div className="flex justify-between items-center mx-5">
        <div className="flex my-2">
          <div>
            <Image src={"/facebook-logo.png"} alt="" height={45} width={45} />
          </div>
          <div>
            <input className="bg-[#3a3b3c] py-2 px-4 mx-2 rounded-full text-white w-64" type="text" placeholder="Search Facebook" />
          </div>
        </div>
        <div className="my-1">
          <ul className="flex text-[#b0b3b8] text-3xl">
            <Link href={"/"} className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg" title="Home">
              <AiOutlineHome />
            </Link>
            <Link href={"/"} className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg" title="Watch">
              <MdOutlineOndemandVideo />
            </Link>
            <Link href={"/"} className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg" title="Marketplace">
              <BsShop />
            </Link>
            <Link href={"/"} className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg" title="Groups">
              <MdOutlineGroups/>
            </Link>
            <Link href={"/"} className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg" title="Gaming">
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
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <Image src={"/man2.webp"} alt="" height={70} width={70} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
