"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import poster from "../../../public/Pics/healthmagezine-pics/avocadoposter.png";
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
    <div className=" relative w-1/2 flex justify-center items-center">
      <IoIosArrowForward
        onClick={goNext}
        className=" absolute right-3 w-10 h-10 bg-white text-[rgba(62,50,50,0.5)] z-10 text-4xl rounded-xl p-2 cursor-pointer"
      />
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        className=" w-full"
      >
        {Topics.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="  flex justify-center items-center"
            >
              <div className=" min-w-[93px]  gap-2 relative flex flex-col justify-center items-center">
                <Image
                  alt="img"
                  width={1000}
                  className=" rounded-xl"
                  src={poster}
                />
                <div className=" absolute w-[95%] gap-2 rounded-xl bottom-2 pb-4 bg-[rgba(255,255,255,0.75)] flex flex-col p-2">
                  <h5 className=" text-2xl font-semibold">
                    رژیم غذایی سالم ، سبک زندگی سالم
                  </h5>
                  <p className=" font-light">
                    اگر شما رژیم غذایی خود را تغییر دهید نه تنها وزنتان بلکه سبک
                    زندگیتان هم نیز تغییر خواهد کرده پس از تغییر نترسید و این
                    لطف را در حق کنید و.....
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <IoIosArrowBack
        onClick={goPrev}
        className=" absolute left-3 w-10 h-10 bg-white text-[rgba(62,50,50,0.5)] z-10 text-4xl rounded-xl p-2 cursor-pointer"
      />
    </div>
  );
}
