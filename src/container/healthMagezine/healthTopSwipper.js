"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

export default function TopSwipper({ Topics }) {
  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className=" relative w-[90%] m-auto flex justify-center items-center">
      <IoIosArrowForward
        onClick={goNext}
        className=" absolute left-0  shadow-[-3px_0px_23px_32px_rgba(255,_255,_255,_1)] bg-white h-14 z-10  right-0 text-4xl text-[#3E88F6] cursor-pointer"
      />
      <Swiper
        ref={swiperRef}
        slidesPerView={6}
        spaceBetween={20}
        loop={true}
        className=" w-full"
      >
        {Topics.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className=" flex justify-center items-center"
            >
              <div className=" w-48 min-w-[93px] gap-2 relative flex flex-col justify-center items-center">
                <Image
                  alt="img"
                  width={170}
                  className=" p-1 rounded-xl blur-[1.5px]"
                  src={item.img}
                />
                <h5 className=" absolute flex justify-center items-center text-white gap-5">
                  #{item.title}
                </h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <IoIosArrowBack
        onClick={goPrev}
        className=" absolute left-0  shadow-[-3px_0px_23px_32px_rgba(255,_255,_255,_1)] bg-white h-14 z-10 text-4xl text-[#3E88F6] cursor-pointer"
      />
    </div>
  );
}
