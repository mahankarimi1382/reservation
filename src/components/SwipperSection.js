"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css/scrollbar";
import Image from "next/image";
import { get_specialties } from "@/api/ApiCalling";
function SwipperSection() {
  const [categorys, setCategorys] = useState([]);
  const url = "Specialist/read-specialists";

  const fetchData = async () => {
    const data = await get_specialties(url);
    if (data) {
      setCategorys(data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const mappingCategoryFn = () => {
    return (
      <div>
        {categorys.map((item) => {
          return (
            <SwiperSlide key={item.id} className="  py-2 md:p-3 xl:p-[25px]">
              <div
                key={item.id}
                className=" group text-[10px] md:font-semibold font-light  hover:shadow-lg w-[95px] h-[120px] md:w-[100px] md:h-[130px]  hover:-mt-3 transition-all shadow-red-600  hover:shadow-[#6991b4] lg:w-[131px] lg:h-[170px] flex flex-col justify-evenly items-center rounded-xl border border-[#DBD7D7]"
              >
                <div className=" bg-[#eaeaea]  transition-all group-hover:bg-[#6eb6f6] rounded-full w-[77px] h-[77px] flex justify-center items-center ">
                  <img alt="icon" width={51} height={51} src={item.logoFile} />
                </div>
                <h2 className="  text-center lg:font-medium lg:text-[12px]">
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
          spaceBetween: 2,
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
          slidesPerView: 4,
          spaceBetween: 0,
          dragClass: "scrollbar-drag",
        },
        1280: {
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
