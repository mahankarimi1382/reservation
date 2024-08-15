"use client";

import React from "react";
import layer from "../../../public/assets/Layer_1.png";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Image from "next/image";
function Baner({ pic, text }) {
  return (
    <div className=" min-w-[300px] pr-36 lg:pr-0 lg:min-w-[592px] rounded-3xl lg:min-h-[268px]">
      <button className=" flex justify-center items-center gap-1 absolute z-10 mr-[450px] mt-[225px] px-4 bg-[#B0DAFF] p-2 rounded-full">
        کلینیک زیبایی
        <MdOutlineArrowCircleLeft />
      </button>
      <Image
      
        className=" lg:absolute lg:mr-[407px] lg:mt-[196px]"
        alt="layer"
        src={layer}
      />
      <Image
      width={592}
        src={pic}
        alt="banner1"
        className=" object-cover min-w-[300px]  lg:min-w-[592px] rounded-md lg:max-h-[268px] lg:rounded-3xl"
      />
    </div>
  );
}

export default Baner;
