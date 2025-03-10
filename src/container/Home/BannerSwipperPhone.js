"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../public/Pics/banner.png";
import banner2 from "../../../public/Pics/baannerr2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Baner from "@/components/Baner";

export default function BannerSwipperPhone() {
  return (
    <div className=" flex w-[90%] gap-5 justify-center items-center lg:hidden">
      <Swiper
      spaceBetween={10}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper w-full flex justify-center items-center"
      >
        <SwiperSlide className="  py-2">
          <Baner pic={banner2} />
          {/* <button className=" bg-blue-300  w-full h-[130px]   flex flex-col justify-evenly items-center rounded-xl">
            <div className=" bg-blue-300  transition-all  flex justify-center items-center ">
              <img alt="icon" width={51} height={51} />
            </div>
            <h2>hhjh</h2>
          </button> */}
        </SwiperSlide>
        <SwiperSlide className="  py-2">
          <Baner pic={banner1} />
          {/* <button className=" bg-blue-300  w-full h-[130px]   flex flex-col justify-evenly items-center rounded-xl">
            <div className=" bg-blue-300  transition-all  flex justify-center items-center ">
              <img alt="icon" width={51} height={51} />
            </div>
            <h2>hhjh</h2>
          </button> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
