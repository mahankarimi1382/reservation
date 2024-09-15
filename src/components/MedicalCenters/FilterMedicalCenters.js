import React from "react";
import filterIcon from "../../../public/assets/filter.png";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

import SerchDropDowns from "./SerchDropDowns";
function FilterMedicalCenters() {
  return (
    <div className=" w-[411px] min-h-[797px] py-2 flex justify-center items-center bg-white rounded-xl">
      <div className=" w-[95%] h-[97%] flex gap-2 flex-col">
        <div className=" w-full flex justify-between items-center">
          <h2 className=" flex items-center gap-2 text-[20px]">
            <Image width={28} src={filterIcon} alt="icon" />
            فیلتر پیشرفته
          </h2>
          <h2 className=" flex items-center gap-1 text-[14px] text-[#E62333F2]">
            <RxCross2 className=" text-xl" />
            حذف فیلترها
          </h2>
        </div>
        <SerchDropDowns title={"نام شهر را جستجو کنید"} placeHolder="نام شهر" />
        <SerchDropDowns title={"منطقه"} placeHolder="نام منطقه" />
        <SerchDropDowns title={"دسته بندی تخصص ها"} placeHolder="تخصص ها" />
        <SerchDropDowns title={"نام تخصص"} placeHolder="نام تخصص" />
        <SerchDropDowns title={"خدمات"} placeHolder="نام خدمات" />
        <SerchDropDowns title={"مرکز"} placeHolder="نوع مرکز" />
        <div className=" w-full flex justify-center items-center">
          <button className=" text-white w-[271px] p-2 rounded-lg bg-[#005DAD]">
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterMedicalCenters;
