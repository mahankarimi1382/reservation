"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import calenderIcon from "../../../../public/pics/calendar.png";
import { RxCross2 } from "react-icons/rx";
import VisitHozoriCard from "./VisitHozoriCard";

function VisitSectionBoxes({ icon, topic }) {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const handleOpenModal = () => {
    setIsBoxOpen(!isBoxOpen);
  };
  return (
    <div className=" w-full justify-center flex">
      {isBoxOpen ? (
        <div className=" transition-all duration-[1000ms]   w-[95%] h-[600px] flex flex-col items-center rounded-2xl border border-[#005DAD]">
          <div className=" w-full px-5 border-b border-dashed border-[#005DAD] py-3 flex items-center justify-between">
            <h2 className=" p-3 gap-2 text-[#005DAD] font-semibold flex items-end">
              <Image width={32} src={icon} alt="hispital-icon" />
              {topic}
            </h2>
            <RxCross2
              onClick={handleOpenModal}
              className=" cursor-pointer text-[#005DAD] text-3xl"
            />
          </div>
          {topic === "ویزیت حضوری" && (
            <div className=" delay-700 w-full flex  flex-col gap-5 pt-10 items-center">
              <VisitHozoriCard   />
              <VisitHozoriCard  />
            </div>
          )}
        </div>
      ) : (
        <div className=" transition-all bg-white duration-300 w-[95%] h-[226px] flex flex-col justify-between rounded-2xl border border-[#005DAD]">
          <h2 className=" p-3 gap-2 text-[#005DAD] flex items-end">
            <Image width={32} src={icon} alt="hispital-icon" />
            {topic}
          </h2>
          <h2 className=" flex p-3 items-center gap-2 text-[20px] text-[#757575]">
            <Image width={24} src={calenderIcon} alt="calender-icon" />
            اولین نوبت خالی ، دوشنبه 3 آذر (14:30)
          </h2>
          <div className=" h-20 flex justify-center items-center  border-t border-dashed border-[#005DAD]">
            <button
              onClick={handleOpenModal}
              className=" hover:text-white hover:bg-[#005DAD] transition-all flex items-center border border-[#005DAD] text-[#005DAD] p-1 rounded-lg px-5 text-lg"
            >
              نوبت بگیرید
              <IoIosArrowRoundBack className=" text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VisitSectionBoxes;
