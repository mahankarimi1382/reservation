import React from "react";
import { CiSearch } from "react-icons/ci";
import { Checkbox } from "@mui/material";

function SearchSpecialites() {
  const Specialties = [
    { id: 1, caption: "جراحی مغز و اعصاب" },
    { id: 2, caption: "خون، سرطان و آنکولوژی" },
    { id: 3, caption: "اطفال، کودکان و نوزادان" },
    { id: 4, caption: "کلیه و مجاری ادراری" },
    { id: 5, caption: "آزمایشگاه و تصویر برداری" },
    { id: 6, caption: "ریه و دستگاه تنفسی" },
    { id: 7, caption: "جراحی مغز و اعصاب" },
  ];
  return (
    <div className=" w-full flex justify-center items-center ">
      <div className=" py-4 w-full rounded-xl items-center flex flex-col border h-[300px] shadow-md">
        <label className=" px-2 gap-2 bg-[#F4F4F4] h-[43px] flex items-center w-[85%] rounded-xl">
          <CiSearch className=" text-2xl " />
          <input
            placeholder="جستجو تخصص"
            className=" bg-[#F4F4F4] outline-none"
          />
        </label>
        <div className=" w-[95%] overflow-auto customScroll flex flex-col">
          {Specialties.map((item) => {
            return (
              <div className=" border-b mx-2 flex items-center" key={item.id}>
                <Checkbox />
                <h5>{item.caption}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchSpecialites;
