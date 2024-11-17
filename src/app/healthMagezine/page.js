import Navbar from "@/components/Navbar";
import TopSwipper from "@/container/healthMagezine/healthTopSwipper";
import React from "react";
import dog from "../../../public/Pics/healthmagezine-pics/dog.png";
import food from "../../../public/Pics/healthmagezine-pics/food.png";
import stadium from "../../../public/Pics/healthmagezine-pics/statuim.png";
import technology from "../../../public/Pics/healthmagezine-pics/technology.png";
import terapy from "../../../public/Pics/healthmagezine-pics/terapy.png";
import HealthPosterSwipper from "@/container/healthMagezine/HealthPosterSwipper";
import Image from "next/image";
import arayesho from "../../../public/Pics/healthmagezine-pics/arayeshi.png";
import bardar from "../../../public/Pics/healthmagezine-pics/bardar.png";
import poost from "../../../public/Pics/healthmagezine-pics/poost.png";
import CategorySection from "@/container/healthMagezine/CategorySection";
import ArticleSection from "@/container/healthMagezine/ArticleSection";
import FourPosterSection from "@/container/healthMagezine/FourPosterSection";
import ImageArticle from "@/container/healthMagezine/ImageArticle";
import AudioArticle from "@/container/healthMagezine/AudioArticle";
const topics = [
  { id: 1, title: "ورزش  سلامت", img: dog },
  { id: 2, title: "روانشناسی", img: food },
  { id: 3, title: "قلب و عروق", img: stadium },
  { id: 4, title: "اعصاب", img: technology },
  { id: 5, title: "ارتوپدی", img: terapy },
  { id: 6, title: "گوش ، حلق و بینی", img: dog },
  { id: 7, title: "پوست و مو" },
  { id: 8, title: "چشم پزشکی" },
  { id: 9, title: "زنان و زایمان" },
  { id: 10, title: "کودکان" },
  { id: 11, title: "روانپرشکی" },
  { id: 12, title: "رادیولوژی" },
  { id: 13, title: "پزشکی خانواده" },
  { id: 14, title: "بیهوشی" },
  { id: 15, title: "دندانپزشکی" },
];
function page() {
  return (
    <div dir="rtl" className=" bg-[#F5F5F5] w-full flex items-center flex-col">
      <Navbar />
      <TopSwipper Topics={topics} />

      <div className=" mt-5 gap-5 w-[90%] flex flex-col justify-center items-center">
        <h3 className=" text-xl font-medium">مجله های پر طرفدار</h3>
        <div className=" w-full flex justify-between items-center">
          <HealthPosterSwipper Topics={topics} />
          <div className=" relative">
            <Image width={268} alt="image" src={arayesho} />
            <div className=" rounded-xl gap-1 mx-2 bg-[rgba(255,255,255,0.75)] bottom-2 flex flex-col justify-center items-start p-2 absolute">
              <h3 className=" text-md font-semibold">
                پوست سالم ، اعتماد به نفس بالا
              </h3>
              <p className=" text-sm text-[#757575]">
                آیا می‌خواهید پوست و مویی سالم و زیبا داشته باشید؟و همچنین در
                کنارش اعتماد به نفس بالایی داشته باشید پس ما را بخوانید
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-between gap-3">
            <div className=" relative">
              <Image width={268} alt="image" src={bardar} />
              <div className=" rounded-xl gap-1 mx-2 bg-[rgba(255,255,255,0.75)] bottom-2 flex flex-col justify-center items-start p-2 absolute">
                <h3 className=" text-md font-semibold">
                  بارداری سالم ، نوزاد بالا{" "}
                </h3>
                <p className=" text-sm text-[#757575]">
                  با مطالعه مقالات ما به مادری بهتری دست پیدا کنید و نوزادی سالم
                  داشته باشید.
                </p>
              </div>
            </div>
            <div className=" relative">
              <Image width={268} alt="image" src={poost} />
              <div className=" rounded-xl gap-1 mx-2 bg-[rgba(255,255,255,0.75)] bottom-2 flex flex-col justify-center items-start p-2 absolute">
                <h3 className=" text-md font-semibold">پوست سالم </h3>
                <p className=" text-sm text-[#757575]">
                  با مطالعه مقالات ما پوست سالم و شاداب داشته باشید.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CategorySection />
        <ArticleSection />
        <FourPosterSection />
        <ImageArticle />
        <AudioArticle />
      </div>
    </div>
  );
}

export default page;
