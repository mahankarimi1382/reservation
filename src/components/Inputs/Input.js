"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export const SerchDropDowns = (props) => {
  const Specialties = [
    { id: 1, caption: "جراحی مغز و اعصاب" },
    { id: 2, caption: "خون، سرطان و آنکولوژی" },
    { id: 3, caption: "اطفال، کودکان و نوزادان" },
    { id: 4, caption: "کلیه و مجاری ادراری" },
    { id: 5, caption: "آزمایشگاه و تصویر برداری" },
    { id: 6, caption: "ریه و دستگاه تنفسی" },
    { id: 8, caption: "جراحی مغز و اعصاب" },
    { id: 9, caption: "جراحی مغز و اعصاب" },
    { id: 10, caption: "جراحی مغز و اعصاب" },
    { id: 11, caption: "جراحی مغز و اعصاب" },
    { id: 12, caption: "جراحی مغز و اعصاب" },
    { id: 13, caption: "جراحی مغز و اعصاب" },
    { id: 14, caption: "جراحی مغز و اعصاب" },
  ];
  const [isSearching, setIsSearching] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectOption = (option) => {
    setIsSearching(false);
    setSelectedOption(option);
  };
  return (
    <div className=" flex flex-col gap-3">
      <h2 className=" text-xl">{props.title}</h2>
      <div
        onClick={() => setIsSearching(!isSearching)}
        className=" px-2 border shadow-[0_1px_15px_-5px_rgba(0,0,0,0.3)] flex justify-center items-center  rounded-xl w-full"
      >
        <CiSearch className=" text-4xl text-[#005DAD]" />
        <input
          placeholder={selectedOption ? selectedOption : props.title}
          className=" outline-none h-[54px] w-full rounded-xl"
        />
        <IoIosArrowDown
          className={` ${
            isSearching && "rotate-180"
          } transition-all   duration-300 text-xl text-[#858585]`}
        />
      </div>
      <div className="bg-white shadow-lg rounded-xl">
        {isSearching ? (
          <div className="  mt-6 mr-2  p-2 transition-all duration-500 w-[95%] h-52 overflow-auto customScroll flex flex-col">
            {Specialties.map((item) => {
              return (
                <div className=" border-b mx-2 flex items-center" key={item.id}>
                  <h5 onClick={() => handleSelectOption(item.caption)}>
                    {item.caption}
                  </h5>
                </div>
              );
            })}
          </div>
        ) : (
          <div className=" transition-all mr-2 duration-300  w-[95%] h-0 overflow-auto customScroll flex flex-col">
            {Specialties.map((item) => {
              return (
                <div className=" border-b mx-2 flex items-center" key={item.id}>
                  <h5>{item.caption}</h5>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
