import Image from "next/image";
import React from "react";
import calenderIcon from "../../../public/assets/calendar.png";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

function VisitHozoriCard() {
  return (
    <div className=" w-[90%] px-5 gap-2 p-5 flex flex-col bg-white shadow-xl rounded-xl">
      <div className=" w-full  justify-between flex">
        <h2 className=" text-xl font-semibold">مطب دکتر بهرام</h2>
        <h5 className=" text-[#005DAD]">250,000 تومن</h5>
      </div>
      <h2 className=" flex text-[16px] items-center gap-2  text-[#757575]">
        <Image width={24} src={calenderIcon} alt="calender-icon" />
        اولین نوبت خالی ، دوشنبه 3 آذر (14:30)
      </h2>
      <h2 className=" flex text-[16px]  items-center gap-2 text-[#757575]">
        <IoLocationOutline className=" text-2xl" />
        تهران-میدان شهدا-خیابان فلان
      </h2>
      <h2 className=" flex text-[16px] items-center gap-2 text-[#757575]">
        <FiPhone className=" text-2xl" />
        77188185
      </h2>
      <hr className=" font-bold border-[#757575]" />
      <div className=" w-full justify-between flex items-center">
        <button className=" p-1 px-4 border border-[#005DAD] rounded-sm">
          رزر اولین نوبت خالی
        </button>
        <button className="bg-[#005DAD] p-1 px-4 rounded-sm text-white">نوبت بگیرید</button>
      </div>
    </div>
  );
}

export default VisitHozoriCard;
