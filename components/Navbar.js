import Link from "next/link";
import React, { useRef } from "react";
import { BsShop, BsMessenger, BsSearch } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { TbGridDots, TbDeviceGamepad } from "react-icons/tb";
import {
  MdNotificationsActive,
  MdOutlineGroups,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import Image from "next/image";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const Navbar = () => {
  const clickToggle = () => {
    if (!ref.current.classList.contains("border-b-4")) {
      ref.current.classList.add("border-b-4");
      ref2.current.classList.remove("border-b-4");
      ref3.current.classList.remove("border-b-4");
      ref4.current.classList.remove("border-b-4");
      ref5.current.classList.remove("border-b-4");
    }
  };
  const clickToggle2 = () => {
    if (!ref2.current.classList.contains("border-b-4")) {
      ref.current.classList.remove("border-b-4");
      ref2.current.classList.add("border-b-4");
      ref3.current.classList.remove("border-b-4");
      ref4.current.classList.remove("border-b-4");
      ref5.current.classList.remove("border-b-4");
    }
  };
  const clickToggle3 = () => {
    if (!ref3.current.classList.contains("border-b-4")) {
      ref.current.classList.remove("border-b-4");
      ref2.current.classList.remove("border-b-4");
      ref3.current.classList.add("border-b-4");
      ref4.current.classList.remove("border-b-4");
      ref5.current.classList.remove("border-b-4");
    }
  };
  const clickToggle4 = () => {
    if (!ref4.current.classList.contains("border-b-4")) {
      ref.current.classList.remove("border-b-4");
      ref2.current.classList.remove("border-b-4");
      ref3.current.classList.remove("border-b-4");
      ref4.current.classList.add("border-b-4");
      ref5.current.classList.remove("border-b-4");
    }
  };
  const clickToggle5 = () => {
    if (!ref5.current.classList.contains("border-b-4")) {
      ref.current.classList.remove("border-b-4");
      ref2.current.classList.remove("border-b-4");
      ref3.current.classList.remove("border-b-4");
      ref4.current.classList.remove("border-b-4");
      ref5.current.classList.add("border-b-4");
    }
  };
  const toggleMenu = () => {
    if(!ref6.current.classList.contains("translate-y-100")){
      ref6.current.classList.add("translate-y-100")
      ref6.current.classList.remove("translate-y-0")
    }else if (ref6.current.classList.contains("translate-y-100")){
      ref6.current.classList.remove("translate-y-100")
      ref6.current.classList.add("translate-y-0")
    }
  }
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  return (
    <div>
      <div className="bg-[#242526] fixed top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center mx-5">
          <div className="flex justify-between my-2">
            <div className="cursor-pointer flex-1 h-full w-full">
              <Image className="" src={"/facebook-logo.png"} alt="" height={45} width={45} />
            </div>
            <div className="flex-1">
              <input
                className="bg-[#3a3b3c] hidden xl:block py-2 px-4 mx-2 rounded-full text-white w-64"
                type="text"
                placeholder="Search Facebook"
              />
              <div className="xl:hidden mx-2 w-11 h-11 bg-[#3a3b3c] hover:bg-[#4e4f50]  rounded-full flex justify-center items-center cursor-pointer">
                <BsSearch className="block xl:hidden text-[#e4e6eb]" />
              </div>
            </div>
          </div>
          {/* Navbar starts */}
          <div className="my-1 hidden lg:block">
            <ul className="flex text-[#b0b3b8] text-3xl">
              <Link
                ref={ref}
                href={"/"}
                className="hover:bg-[#3a3b3c] border-b-4 w-28 h-14 flex justify-center items-center rounded-lg border-[#2374e1]"
                title="Home"
                onClick={clickToggle}
              >
                <AiOutlineHome />
              </Link>
              <Link
                ref={ref2}
                href={"/watch"}
                className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg border-[#2374e1]"
                title="Watch"
                onClick={clickToggle2}
              >
                <MdOutlineOndemandVideo />
              </Link>
              <Link
                ref={ref3}
                href={"/marketPlace"}
                className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg border-[#2374e1]"
                title="Marketplace"
                onClick={clickToggle3}
              >
                <BsShop />
              </Link>
              <Link
                ref={ref4}
                href={"/groups"}
                className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg border-[#2374e1]"
                title="Groups"
                onClick={clickToggle4}
              >
                <MdOutlineGroups />
              </Link>
              <Link
                ref={ref5}
                href={"/gaming"}
                className="hover:bg-[#3a3b3c] w-28 h-14 flex justify-center items-center rounded-lg border-[#2374e1]"
                title="Gaming"
                onClick={clickToggle5}
              >
                <TbDeviceGamepad />
              </Link>
            </ul>
          </div>
          {/* Navbar Ends */}
          <div className="flex text-[#e4e6eb] my-2 text-xl space-x-4">
            {/* Alternative navbar Starts */}
            <div>
              <div ref={ref6} className="transition-transform translate-y-0 duration-200">
                <div className="w-full absolute left-0 top-16 overflow-y-auto scrollbar-hide inline-block h-screen bg-[#18191a]">
                  <div className="mx-3 mt-4 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer flex justify-center items-center">
                      <Image
                        src={"/man2.webp"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">John Wick</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/friends.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Friends</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/groups.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Groups</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/marketplace.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Marketplace</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/watch.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Watch</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/memories.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Memories</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/saved.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Saved</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/pages.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Pages</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/events.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Events</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/mostrecent.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Most Recent</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/favourites.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Favourites</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/adcenter.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Ad Center</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/adsmanager.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Ads Manager</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/blooddonations.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Blood Donations</div>
                  </div>
                  <div className="mx-3 my-2 text-white flex cursor-pointer hover:bg-[#3a3b3c] px-3 py-2 rounded">
                    <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer">
                      <Image
                        src={"/climatesciencecenter.png"}
                        alt=""
                        height={70}
                        width={70}
                        className=""
                      />
                    </div>
                    <div className="mx-3 mt-2">Climate Science Center</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-11 h-11 rounded-full flex bg-[#3a3b3c] hover:bg-[#4e4f50] justify-center items-center lg:hidden cursor-pointer" onClick={toggleMenu}>
              <FaBars className="text-[#e4e6eb]" />
            </div>
            {/* Alternative navbar Ends */}
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

      <LeftSidebar />
      <RightSidebar />
    </div>
  );
};

export default Navbar;
