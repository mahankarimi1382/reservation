"use client";
import React from "react";
import heart from "../../../public/assets/heart-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { IoIosMore } from "react-icons/io";
import brain from "../../../public/assets/brain-icon.png";
import dakheli from "../../../public/assets/dakheli-icon.png";
import eye from "../../../public/assets/eye-icon.png";
import zayman from "../../../public/assets/zayman-icon.png";
import kollie from "../../../public/assets/kollie-icon.png";
import dentist from "../../../public/assets/dentist-icon.png";
import Image from "next/image";
function SpecialtiesSection() {
  const categorys = [
    {
      id: 1,
      name: "متخصص قلب و عروق",
      icon: heart,
    },
    {
      id: 2,
      name: "متخصص مغز و اعصاب",
      icon: brain,
    },
    {
      id: 3,
      name: "متخصص زنان و زایمان",
      icon: zayman,
    },
    {
      id: 4,
      name: "دندانپزشکی",
      icon: dentist,
    },
    {
      id: 5,
      name: "متخصص کلیه و مجاری",
      icon: kollie,
    },
    {
      id: 6,
      name: "بینایی سنجی",
      icon: eye,
    },
    {
      id: 8,
      name: "متخصص داخلی",
      icon: dakheli,
    },
    {
      id: 9,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 10,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 11,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 12,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 13,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 14,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
  ];
  return (
    <div className=" w-full flex-col items-center lg:gap-16 mt-5  lg:mt-24 justify-center flex">
      <div className=" w-full items-center justify-center px-4 flex">
        <h2 className=" flex gap-2  lg:text-[32px]">
          <span className=" text-[#005DAD]">تخصص</span>
          های دکتر رزرو
        </h2>
      </div>
      <div className=" pl-3 w-full flex lg:w-[80%] lg:-mr-28 items-center">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: -10,
              scrollbar:{
                dragSize:50,
              }
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
          // spaceBetween={-20}
          // slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {categorys.map((item) => {
            return (
              <SwiperSlide key={item.id} className=" p-3 lg:p-[25px]">
                <div
                  key={item.id}
                  className="  hover:shadow-lg w-[104px] h-[146px]  hover:-mt-3 transition-all hover:shadow-[#c2eeff] lg:w-[131px] lg:h-[170px] flex flex-col justify-evenly items-center rounded-xl border border-[#DBD7D7]"
                >
                  <div className=" bg-[#eaeaea] hover:bg-[#51a8f4] rounded-full w-[77px] h-[77px] flex justify-center items-center ">
                    <Image alt="icon" width={51} src={item.icon} />
                  </div>
                  <h2 className=" text-[10px] font-semibold lg:font-medium lg:text-[12px]">
                    {item.name}
                  </h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className=" lg:-mr-20  bg-[#eaeaea] hover:bg-[#005DAD] hover:shadow-lg hover:border-none hover:-mt-2 transition-all hover:shadow-[#c2eeff] min-w-[104px] h-[146px] lg:w-[131px] lg:h-[170px] flex flex-col justify-evenly items-center rounded-xl border border-[#DBD7D7]">
          <div className=" bg-white rounded-full w-[77px] h-[77px] flex justify-center items-center ">
            <IoIosMore className=" text-3xl" />
          </div>
          <h2 className=" text-[12px]">مشاهده بیشتر</h2>
        </div>
      </div>
    </div>
  );
}

export default SpecialtiesSection;
