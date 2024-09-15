import Image from "next/image";
import React from "react";
import calenderIcon from "../../../public/assets/calendar.png";

function DatePicker() {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" w-full rounded-2xl h-[112px] justify-center gap-4  border shadow-md flex flex-col">
        <h2 className=" px-5">تعیین روز نوبت :</h2>
        <div className=" w-full">
          <div className=" flex justify-around">
            <div className=" flex justify-between px-2 w-[150px] h-[48px] border  rounded-xl">
              <button className="  gap-1 w-full justify-between flex  items-center">
                از تاریخ
                <Image src={calenderIcon} width={24} alt="" />
              </button>
            </div>
            <div className=" flex justify-between px-2 w-[150px] h-[48px] border  rounded-xl">
              <button className="  gap-1 w-full justify-between flex  items-center">
                تا تاریخ
                <Image src={calenderIcon} width={24} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
