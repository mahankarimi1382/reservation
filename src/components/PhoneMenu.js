import React from "react";
import HomeIcon from "../../public/pics/home-icon.png";
import Image from "next/image";
function PhoneMenu() {
  return (
    <div className=" flex justify-around items-center w-full lg:hidden md:hidden h-[74px] fixed bottom-0 shadow-2xl bg-white text-white">
      <div>
        <Image width={24} src={HomeIcon} alt="home-icon" />
        <h2 className=" text-black">خانه</h2>
      </div>
      <div>
        {" "}
        <Image width={24} src={HomeIcon} alt="home-icon" />
        <h2 className=" text-black">خانه</h2>
      </div>
      <div>
        {" "}
        <Image width={24} src={HomeIcon} alt="home-icon" />
        <h2 className=" text-black">خانه</h2>
      </div>
      <div>
        {" "}
        <Image width={24} src={HomeIcon} alt="home-icon" />
        <h2 className=" text-black">خانه</h2>
      </div>
    </div>
  );
}

export default PhoneMenu;
