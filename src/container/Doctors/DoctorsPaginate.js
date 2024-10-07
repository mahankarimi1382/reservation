import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import AllDoctorsCard from "../../components/AllDoctorsCard";

function DoctorsPaginate() {
  return (
    <div className=" w-[900px] flex flex-col items-center justify-center gap-10">
      <div className=" w-full bg-gray-500 rounded-xl h-20"></div>

      <div className="  w-[100%] ">
        <div className=" rounded-2xl px-3 items-center justify-center gap-1 flex h-[73px] w-[100%] bg-white ">
          <CiSearch className=" text-[#919191] text-3xl" />

          <input
            className=" text-sm outline-none h-full w-[80%]"
            placeholder="جستجو پزشک،درمانگر،کلینیک..."
          />
          <IoLocationOutline className="  text-lg text-[#005DAD]" />
          <p className=" hidden lg:flex text-[12px] text-[#005DAD] font-medium">
            انتخاب شهر
          </p>
        </div>
      </div>
      <div className=" w-full gap-10 px-10 flex bg-white rounded-2xl h-[62px]">
        <h2 className=" flex  items-center text-[20px]">
          <CgSortAz className=" text-3xl" />
          دسته بندی :
        </h2>
        <button className=" text-[#858585]">پیشفرض</button>
        <button className=" text-[#858585]">محبوب ترین ها</button>
        <button className=" text-[#858585]">نزدیک ترین نوبت</button>
        <button className=" text-[#858585]">کم ترین معطلی در مطب</button>
      </div>
      <AllDoctorsCard />
    </div>
  );
}

export default DoctorsPaginate;
