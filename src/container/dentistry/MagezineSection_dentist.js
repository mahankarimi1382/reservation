import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import magezineimg from "../../../public/Pics/magezineimg.png";
import Image from "next/image";
function MagezineSection_dentist() {
  const Magezine = [
    {
      id: 1,
      text: "۹ علت شایع ریزش مو در زنان و روش‌های درمان آن",
      img: magezineimg,
    },
    {
      id: 2,
      text: "۹ علت شایع ریزش مو در زنان و روش‌های درمان آن",
      img: magezineimg,
    },
    {
      id: 3,
      text: "۹ علت شایع ریزش مو در زنان و روش‌های درمان آن",
      img: magezineimg,
    },
    {
      id: 4,
      text: "۹ علت شایع ریزش مو در زنان و روش‌های درمان آن",
      img: magezineimg,
    },
    {
      id: 5,
      text: "۹ علت شایع ریزش مو در زنان و روش‌های درمان آن",
      img: magezineimg,
    },
    {
      id: 6,
      text: "۹ علت شایع ریزش مو در زنان و روش‌های درمان آن",
      img: magezineimg,
    },
  ];
  return (
    <div className=" lg:flex flex-col w-full lg:mt-20 mt-5 justify-center items-center">
      <div className=" mr-4 lg:mr-0 flex w-11/12 justify-between items-center">
        <h2 className=" flex gap-1 w-full justify-center items-center text-[18px] lg:text-[32px]">
          <span className=" text-[#005DAD]">مجله سلامت دندانپزشکی</span>
          دکتر رزرو
        </h2>
        <div className=" flex gap-5"></div>
      </div>
      <div className=" flex no-scrollbar overflow-x-auto mt-4 lg:mt-10 gap-6 lg:p-0 p-2 lg:w-[1184px]">
        {Magezine.map((item) => {
          return (
            <div
              key={item.id}
              className=" shadow-lg py-2 lg:py-0 gap-2 lg:gap-6 rounded-2xl justify-center items-center min-w-[159px] min-h-[188px] lg:min-w-[278px] lg:h-[316px] border flex flex-col"
            >
              <Image
                alt="magezine-pic"
                width={256}
                className=" w-[148px] lg:w-[256px] rounded-xl"
                src={item.img}
              />
              <p className=" lg:px-5 px-2 text-[12px] lg:text-[18px]">
                {item.text}
              </p>
              <div className=" lg:w-5/6 flex justify-end  ">
                <button className=" items-center gap-1  px-5 lg:px-2 p-2 flex rounded-lg text-[14px] text-[#005DAD] bg-[#D3E9FD]">
                  مشاهده مقاله
                  <FaArrowLeft />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MagezineSection_dentist;
