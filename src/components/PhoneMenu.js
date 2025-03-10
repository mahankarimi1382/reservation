"use client";
import React from "react";
import HomeIcon from "../../public/Pics/phone-menu-icon/home_phone_icon.png";
import clipboard from "../../public/Pics/phone-menu-icon/clipboard_phone_icon.png";
import profile_phone from "../../public/Pics/phone-menu-icon/profile_phone_icon.png";
import search_phone from "../../public/Pics/phone-menu-icon/search_phone_icon.png";
import HomeIcon_blue from "../../public/Pics/phone-menu-icon/home_phone_icon_blue.png";
import clipboard_blue from "../../public/Pics/phone-menu-icon/clipboard_phone_icon_blue.png";
import profile_phone_blue from "../../public/Pics/phone-menu-icon/profile_phone_icon_blue.png";

import bilbilak from "../../public/Pics/phone-menu-icon/bilbilak_phoneMenu.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
function PhoneMenu() {
  const pathName = usePathname();
  const router = useRouter();
  console.log(pathName);
  return (
    <div
      dir="rtl"
      className=" shadow-[0px_-9px_9px_0px_rgba(0,_0,_0,_0.1)]
 flex z-40 justify-around items-center w-full lg:hidden md:hidden h-[74px] fixed bottom-0 bg-white text-white"
    >
      <div
        onClick={() => router.push("/")}
        className=" h-full relative w-1/4 flex items-center justify-center  flex-col"
      >
        <Image
          className={pathName == "/" ? " w-[30px]" : ""}
          width={24}
          src={pathName == "/" ? HomeIcon_blue : HomeIcon}
          alt="home-icon"
        />
        <h2
          className={
            pathName == "/"
              ? "text-[#005DAD] text-[18px]"
              : "text-black text-base"
          }
        >
          خانه
        </h2>
        {pathName == "/" && (
          <Image
            className=" absolute bottom-0"
            width={40}
            src={bilbilak}
            alt="home-icon"
          />
        )}
      </div>
      <div className=" w-1/4 flex items-center justify-center  flex-col">
        {" "}
        <Image width={24} src={search_phone} alt="home-icon" />
        <h2 className=" text-black">جستجو</h2>
      </div>
      <div className=" w-1/4 flex items-center justify-center  flex-col">
        {" "}
        <Image
          className={pathName == "/user/myTurns" ? " w-[30px]" : ""}
          width={24}
          src={pathName == "/user/myTurns" ? clipboard_blue : clipboard}
          alt="home-icon"
        />
        <h2 className=" text-black">نوبت های من</h2>
        {pathName == "/user/myTurns" && (
          <Image
            className=" absolute bottom-0"
            width={40}
            src={bilbilak}
            alt="home-icon"
          />
        )}
      </div>
      <div className=" w-1/4 flex items-center justify-center  flex-col">
        {" "}
        <Image
          className={pathName == "/user/userProfile" ? " w-[30px]" : ""}
          width={24}
          src={
            pathName == "/user/userProfile" ? profile_phone_blue : profile_phone
          }
          alt="home-icon"
        />
        <h2 className=" text-black">پروفایل</h2>
        {pathName == "/user/userProfile" && (
          <Image
            className=" absolute bottom-0"
            width={40}
            src={bilbilak}
            alt="home-icon"
          />
        )}
      </div>
    </div>
  );
}

export default PhoneMenu;
