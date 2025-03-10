import React from "react";
import HomeIcon from "../../public/Pics/phone-menu-icon/home_phone_icon.png";
import clipboard from "../../public/Pics/phone-menu-icon/clipboard_phone_icon.png";
import profile_phone from "../../public/Pics/phone-menu-icon/profile_phone_icon.png";
import search_phone from "../../public/Pics/phone-menu-icon/search_phone_icon.png";

import Image from "next/image";
function PhoneMenu() {
  return (
    <div
      className=" shadow-[0px_-9px_9px_0px_rgba(0,_0,_0,_0.1)]
 flex z-40 justify-around items-center w-full lg:hidden md:hidden h-[74px] fixed bottom-0 bg-white text-white"
    >
      <div className=" w-1/4 flex items-center justify-center  flex-col">
        <Image width={24} src={HomeIcon} alt="home-icon" />
        <h2 className=" text-black">خانه</h2>
      </div>
      <div className=" w-1/4 flex items-center justify-center  flex-col">
        {" "}
        <Image width={24} src={search_phone} alt="home-icon" />
        <h2 className=" text-black">جستجو</h2>
      </div>
      <div className=" w-1/4 flex items-center justify-center  flex-col">
        {" "}
        <Image width={24} src={clipboard} alt="home-icon" />
        <h2 className=" text-black">نوبت های من</h2>
      </div>
      <div className=" w-1/4 flex items-center justify-center  flex-col">
        {" "}
        <Image width={24} src={profile_phone} alt="home-icon" />
        <h2 className=" text-black">پروفایل</h2>
      </div>
    </div>
  );
}

export default PhoneMenu;
