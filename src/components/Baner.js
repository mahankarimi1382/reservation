"use client";

import React from "react";
import layer from "../../public/Pics/Layer_1.png";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Image from "next/image";
function Baner({ pic, text }) {
  return (
    <div className=" rounded-3xl relative bg-black flex flex-col">
      <Image
        width={592}
        src={pic}
        alt="banner1"
        className=" rounded-3xl object-cover"
      />
      <button className=" text-xs sm:text-base bottom-1 left-1 flex justify-center items-center gap-1 absolute z-10  px-4 bg-[#B0DAFF] p-2 rounded-full">
        کلینیک زیبایی
        <MdOutlineArrowCircleLeft />
      </button>
      <Image
        className=" sm:block hidden absolute -bottom-1 -left-1"
        alt="layer"
        src={layer}
      />
    </div>
  );
}

export default Baner;
