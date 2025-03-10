"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css/scrollbar";
import Image from "next/image";
import { get_first_page_specialties, get_specialties } from "@/api/ApiCalling";
import { useRouter } from "next/navigation";
import { myStore } from "@/store/Store";
import LoadingComponent from "./LoadingComponent";

function SwipperSection() {
  const {
    setSpecialistSearch,
    setMultiSpecialtiesBoxes,
    multiSpecialtiesBoxes,
  } = myStore();
  const router = useRouter();
  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await get_first_page_specialties();
    if (data) {
      setCategorys(data);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const mappingCategoryFn = () => {
    return (
      <div>
        {loading && <LoadingComponent />}
        {categorys.map((item) => {
          return (
            <SwiperSlide key={item.id} className="py-2 md:p-3 xl:p-[25px]">
              <button
                onClick={() => {
                  router.push("doctors");
                  setSpecialistSearch(item.id);
                  setMultiSpecialtiesBoxes([
                    ...multiSpecialtiesBoxes,
                    {
                      id: item.id,
                      caption: item.name,
                      type: "specialties",
                    },
                  ]);
                }}
                key={item.id}
                className="lg:my-0 my-2 group text-[10px] md:font-semibold font-light lg:hover:shadow-lg w-[95px] h-[120px] md:w-[100px] md:h-[130px] lg:hover:-mt-3 transition-all shadow-red-600 lg:hover:shadow-[#6991b4] lg:w-[131px] lg:h-[170px] flex flex-col justify-evenly items-center rounded-xl border border-[#DBD7D7]"
              >
                <div className="bg-[#eaeaea] transition-all group-hover:bg-[#6eb6f6] rounded-full w-[77px] h-[77px] flex justify-center items-center">
                  <img alt="icon" width={51} height={51} src={item.logoFile} />
                </div>
                <h2 className="text-center lg:font-medium lg:text-[12px]">
                  {item.name}
                </h2>
              </button>
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
      touchStartPreventDefault={false}
      simulateTouch={true}
      preventClicks={false} // اضافه کردن این خط
      preventClicksPropagation={false} // اضافه کردن این خط
      className="flex lg:w-[80%] justify-center items-center"
    >
      {mappingCategoryFn()}
    </Swiper>
  );
}

export default SwipperSection;
