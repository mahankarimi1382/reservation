import React from "react";
import { CiSearch } from "react-icons/ci";
import AllMedicalCenters from "./AllMedicalCenters";

function MedicalCentersPaginate() {
  return (
    <div className=" w-[810px] flex flex-col items-center justify-center gap-5">
      <div className="  w-[100%] ">
        <div className=" rounded-2xl flex h-[73px] items-center px-5 w-[100%] bg-white ">
          <h2 className=" text-[#919191B5] outline-none">
            لیست تمام مراکز درمانی ایران
          </h2>
        </div>
      </div>
      <div className=" rounded-2xl px-3 items-center gap-1 flex h-[62px] w-[100%] bg-white ">
        <CiSearch className=" text-[#919191] text-3xl" />

        <input
          className=" w-full  text-sm outline-none h-full"
          placeholder="جستجو در مراکز درمانی....."
        />
      </div>
      <AllMedicalCenters />
    </div>
  );
}

export default MedicalCentersPaginate;
