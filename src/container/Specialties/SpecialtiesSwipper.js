"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

export default function SpecialtiesSwipper({ Specialties }) {
  

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
    <div className=" mt-20 w-full flex justify-center items-center">
      <IoIosArrowForward
        onClick={goNext}
        className=" text-4xl text-[#3E88F6] cursor-pointer"
      />
      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        className=" w-[80%] "
      >
        {Specialties.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className=" flex justify-center items-center"
            >
              <div
                className=" w-48 min-w-[93px] gap-2 flex flex-col justify-center items-center"
                key={item.id}
              >
                <Image src={item.icon} alt="icon" width={74} />
                <h5>{item.title}</h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <IoIosArrowBack
        onClick={goPrev}
        className=" text-4xl text-[#3E88F6] cursor-pointer"
      />
    </div>
  );
}

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/scrollbar";
// import Image from "next/image";
// import { Pagination, Navigation } from "swiper/modules";

// function SpecialtiesSwipper({ Specialties }) {
//   const mappingCategoryFn = () => {
//     return (
//       <div>
//         {Specialties.map((item) => {
//           return (
//             <SwiperSlide key={item.id} className="">
//               <div
//                 className=" min-w-[93px] mx-20 flex flex-col justify-center items-center"
//                 key={item.id}
//               >
//                 <Image src={item.icon} alt="icon" width={74} />
//                 <h5>{item.title}</h5>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </div>
//     );
//   };
//   return (
//     <Swiper
//       modules={[Pagination, Navigation]}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       breakpoints={{
//         300: {
//           slidesPerView: 2,
//           spaceBetween: -10,
//           scrollbar: {
//             dragSize: 50,
//           },
//         },
//         640: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 4,
//           spaceBetween: 40,
//         },
//         1024: {
//           slidesPerView: 4,
//           spaceBetween: -20,
//             dragClass: "scrollbar-drag",
//         },
//       }}
//       className=" flex w-full justify-center items-center"
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       {mappingCategoryFn()}
//     </Swiper>
//   );
// }

// export default SpecialtiesSwipper;
