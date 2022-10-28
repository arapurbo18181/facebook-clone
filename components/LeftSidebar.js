import React from "react";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <div className="">
      <div className="w-3/12 absolute left-0 top-16 inline-block min-h-full bg-[#18191a]">
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
  );
};

export default LeftSidebar;
