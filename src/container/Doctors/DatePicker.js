import Image from "next/image";
import React from "react";
import calenderIcon from "../../../public/Pics/calendar.png";
import DatePickerComponent from "@/components/DatePickerComponent";

function DatePicker() {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" w-full rounded-2xl h-[112px] justify-center gap-4  border shadow-md flex flex-col">
        <h2 className=" px-5">تعیین روز نوبت :</h2>
        <div className=" w-full">
          <div className=" flex justify-around">
            <DatePickerComponent title="از تاریخ" />

            <DatePickerComponent title="تا تاریخ" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
