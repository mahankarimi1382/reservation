"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css/scrollbar";
import Image from "next/image";

function SwipperSection({ categorys }) {
  const mappingCategoryFn = () => {
    return (
      <div>
        {categorys.map((item) => {
          return (
            <SwiperSlide key={item.id} className=" p-3 lg:p-[25px]">
              <div
                key={item.id}
                className=" group  hover:shadow-lg w-[104px] h-[146px]  hover:-mt-3 transition-all shadow-red-600  hover:shadow-[#6991b4] lg:w-[131px] lg:h-[170px] flex flex-col justify-evenly items-center rounded-xl border border-[#DBD7D7]"
              >
                <div className=" bg-[#eaeaea] transition-all group-hover:bg-[#6eb6f6] rounded-full w-[77px] h-[77px] flex justify-center items-center ">
                  <Image alt="icon" width={51} src={item.icon} />
                </div>
                <h2 className=" text-[10px] font-semibold text-center lg:font-medium lg:text-[12px]">
                  {item.name}
                </h2>
              </div>
            </SwiperSlide>
          );
        })}
      </div>
    );
  };
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: -10,
          scrollbar: {
            dragSize: 50,
          },
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: -20,
          dragClass: "scrollbar-drag",
        },
      }}
      modules={[Scrollbar, Autoplay]}
      scrollbar={{
        draggable: true,
        dragSize: 50,
        dragClass: "scrollbar-drag",
      }}
      className=" flex lg:w-[80%] justify-center items-center"
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {mappingCategoryFn()}
    </Swiper>
  );
}

export default SwipperSection;
