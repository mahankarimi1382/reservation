"use client";
import React, { useState } from "react";
import filterIcon from "../../../public/assets/filter.png";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import screenIcon from "../../../public/assets/mirroring-screen.png";
import hozoriIcon from "../../../public/assets/people.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SearchSpecialites from "./SearchSpecialites";
import GenderSelect from "./GenderSelect";
import DatePicker from "./DatePicker";
import VisitSelectModal from "./VisitSelectModal";
const Specialties = [
  { id: 1, caption: "جراحی مغز و اعصاب" },
  { id: 2, caption: "خون، سرطان و آنکولوژی" },
  { id: 3, caption: "اطفال، کودکان و نوزادان" },
  { id: 4, caption: "کلیه و مجاری ادراری" },
  { id: 5, caption: "آزمایشگاه و تصویر برداری" },
  { id: 6, caption: "ریه و دستگاه تنفسی" },
  { id: 7, caption: "جراحی مغز و اعصاب" },
  { id: 7, caption: "جراحی مغز و اعصاب" },
  { id: 7, caption: "جراحی مغز و اعصاب" },
  { id: 7, caption: "جراحی مغز و اعصاب" },
  { id: 7, caption: "جراحی مغز و اعصاب" },
  { id: 7, caption: "جراحی مغز و اعصاب" },
  { id: 7, caption: "جراحی مغز و اعصاب" },
];
function FilterDoctors() {
  const handleOpenModal = (type) => {
    setModal(type);
  };
  const [isSearching, setIsSearching] = useState(false);
  const [modal, setModal] = useState("");
  return (
    <div className=" flex flex-col gap-[30px] p-5 w-[411px] rounded-xl transition-all max-h-[1394px] min-h-[1164px] bg-white">
      {modal && <VisitSelectModal modal={modal} setModal={setModal} />}
      <h2 className=" flex items-center gap-2 text-[20px]">
        <Image width={28} src={filterIcon} alt="icon" />
        فیلتر پیشرفته
      </h2>
      <h2 className=" text-[16px">نام بیماری را جستجو کنید</h2>
      <div className={` min-h-10 duration-1000 transition-all`}>
        <div className=" flex w-full justify-center items-center">
          <div
            onClick={() => setIsSearching(!isSearching)}
            className=" px-2 border shadow-[0_1px_15px_-5px_rgba(0,0,0,0.3)] flex justify-center items-center  rounded-xl w-full"
          >
            <CiSearch className=" text-4xl text-[#005DAD]" />
            <input
              placeholder="نام بیماری را جستجو کنید"
              className=" outline-none h-[54px] w-full rounded-xl"
            />
            <IoIosArrowDown
              className={` ${
                isSearching && "rotate-180"
              } transition-all   duration-300 text-xl text-[#858585]`}
            />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-xl">
          {isSearching ? (
            <div className="  mt-6 mr-2  p-2 transition-all duration-500 w-[95%] h-52 overflow-auto customScroll flex flex-col">
              {Specialties.map((item) => {
                return (
                  <div
                    className=" border-b mx-2 flex items-center"
                    key={item.id}
                  >
                    <h5>{item.caption}</h5>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className=" transition-all mr-2 duration-300  w-[95%] h-0 overflow-auto customScroll flex flex-col">
              {Specialties.map((item) => {
                return (
                  <div
                    className=" border-b mx-2 flex items-center"
                    key={item.id}
                  >
                    <h5>{item.caption}</h5>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <h2 className=" text-[16px]">روش نوبت گیری رو انتخاب کنید</h2>
      <div className=" flex justify-between">
        <div className=" flex justify-between px-2 w-[171px] h-[54px] border shadow-[0_1px_15px_-5px_rgba(0,0,0,0.3)] rounded-xl">
          <button className=" font-semibold gap-1 flex justify-center items-center">
            <Image src={screenIcon} width={24} alt="" />
            آنلاین
          </button>
          <button
            onClick={() => handleOpenModal("online")}
            className=" text-sm text-[#005DAD]"
          >
            بیشتر...
          </button>
        </div>
        <div className=" flex justify-between px-2 w-[171px] h-[54px] border shadow-[0_1px_15px_-5px_rgba(0,0,0,0.3)] rounded-xl">
          <button className=" font-semibold gap-1 flex justify-center items-center">
            <Image src={hozoriIcon} width={24} alt="" />
            حضوری
          </button>
          <button
            onClick={() => handleOpenModal("hozoori")}
            className=" text-sm text-[#005DAD]"
          >
            بیشتر...
          </button>
        </div>
      </div>

      <SearchSpecialites />
      <GenderSelect />
      <DatePicker />
      <div className=" flex w-full justify-center items-center">
        <div className=" w-full h-[168px] flex flex-col justify-center px-5 border shadow-md rounded-2xl">
          <FormGroup>
            <div className=" flex items-center justify-between">
              <h2>فقط پزشکان آنلاین</h2>
              <FormControlLabel control={<Switch />} />
            </div>
            <div className=" flex items-center justify-between">
              <h2>فقط پزشکان دارای نوبت باز</h2>
              <FormControlLabel control={<Switch />} />
            </div>
            <div className=" flex items-center justify-between">
              <h2>فقط پزشکانی که بیمه قبول می کنند</h2>
              <FormControlLabel control={<Switch />} />
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
}

export default FilterDoctors;
