import Image from "next/image";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";

import docProf from "../../../public/Pics/bahramMirzayi.png";
function ReservDateAndTimeModal({ setIsReservModal }) {
  const [hours, setHours] = useState(false);
  
  const dayDetails = [
    {
      id: 1,
      day: "چهارشنبه",
      dayDate: "29",
      mounth: "اردیبهشت",
      isFull: false,
      hours: [
        { id: 1, time: "16:00", isFull: false },
        { id: 2, time: "17:00", isFull: false },
        { id: 3, time: "18:00", isFull: true },
        { id: 4, time: "19:00", isFull: false },
        { id: 5, time: "20:00", isFull: true },
        { id: 6, time: "21:00", isFull: true },
        { id: 6, time: "21:00", isFull: true },
        { id: 6, time: "21:00", isFull: false },
        { id: 6, time: "21:00", isFull: false },
        { id: 6, time: "21:00", isFull: false },
        { id: 6, time: "21:00", isFull: false },
        { id: 6, time: "21:00", isFull: false },
        { id: 6, time: "21:00", isFull: false },
        { id: 6, time: "21:00", isFull: false },
        { id: 6, time: "21:00", isFull: false },
      ],
    },
    { id: 2, day: "پنج شنبه", dayDate: "30", mounth: "اردیبهشت", isFull: true },
    {
      id: 2,
      day: "پنج شنبه",
      dayDate: "30",
      mounth: "اردیبهشت",
      isFull: false,
    },
    {
      id: 3,
      day: "پنج شنبه",
      dayDate: "30",
      mounth: "اردیبهشت",
      isFull: false,
    },
    { id: 4, day: "پنج شنبه", dayDate: "30", mounth: "اردیبهشت", isFull: true },
    { id: 5, day: "پنج شنبه", dayDate: "30", mounth: "اردیبهشت", isFull: true },
    {
      id: 6,
      day: "پنج شنبه",
      dayDate: "30",
      mounth: "اردیبهشت",
      isFull: false,
    },
    { id: 7, day: "پنج شنبه", dayDate: "30", mounth: "اردیبهشت", isFull: true },
    {
      id: 8,
      day: "پنج شنبه",
      dayDate: "30",
      mounth: "اردیبهشت",
      isFull: false,
    },
  ];
  const mappedDayDetails = () => {
    return dayDetails.map((item) => {
      return (
        <button
          onClick={() => setHours(item.hours)}
          disabled={item.isFull}
          className=" disabled:bg-[#FBFBFB] disabled:text-[#B2B2B2] disabled:border-none flex flex-col min-w-[95px] min-h-[95px] justify-between py-2 items-center  rounded-lg transition-all hover:bg-[#DBEDFF] hover:border-[#005DAD] hover:text-[#005DAD] border  "
          key={item.id}
        >
          <h5>{item.day}</h5>
          <h5>{item.dayDate}</h5>
          <h5>{item.mounth}</h5>
        </button>
      );
    });
  };
  const mappedHours = () => {
    return hours.map((item) => {
      return (
        <button
          disabled={item.isFull}
          className=" disabled:bg-[#FBFBFB] transition-all hover:bg-[#DBEDFF] hover:border-[#005DAD] text-[#005DAD] disabled:text-[#B2B2B2] disabled:border-none border p-2 px-4 rounded-lg"
          key={item.id}
        >
          {item.time}
        </button>
      );
    });
  };
  const handleCloseModal = () => {
    setIsReservModal(false);
  };
  return (
    <div
      onClick={handleCloseModal}
      className="   w-screen h-screen top-0 justify-center items-center flex right-0 fixed bg-[rgba(0,0,0,0.6)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          hours
            ? " w-[40%] h-[90%] transition-all  flex flex-col p-5 gap-5 bg-white rounded-2xl "
            : " w-[40%] h-[60%] transition-all flex flex-col p-5 gap-5 bg-white rounded-2xl"
        }`}
      >
        <div className=" w-full flex items-center justify-between">
          <h2 className=" text-xl">انتخاب نوبت حضوری</h2>
          <RxCross2 className=" text-xl text-[#94989E]" />
        </div>
        <div className=" flex items-center gap-4">
          <Image
            className=" rounded-full border border-[#005DAD]"
            src={docProf}
            width={72}
            alt="profile"
          />
          <div className=" flex flex-col">
            <span className=" flex items-center gap-2">
              <h5 className=" text-lg">بهرام میرزایی</h5>
              <p>شماره نظام پزشکی: ۱۲۴۴۳</p>
            </span>
            <h5 className=" text-[#94989E] flex items-center gap-1">
              <IoLocationOutline className=" text-xl" />
              تهران ، صادقیه وفا آذر بن بست پانیذ
            </h5>
          </div>
        </div>
        <div className=" gap-4 customScroll min-h-[100px] py-5 flex overflow-x-auto overflow-y-hidden px-2">
          {mappedDayDetails()}
        </div>
        {hours && (
          <div className=" flex flex-col">
            <div className=" flex flex-col ">
              <h2 className=" text-lg ">انتخاب ساعت ویزیت</h2>
              <div className=" flex gap-5 flex-wrap">{mappedHours()}</div>
            </div>
            <div className=" w-full flex justify-end gap-4 items-center">
              <button className=" border px-10 rounded-lg p-2 text-[#005DAD] border-[#005DAD]">
                انصراف
              </button>
              <button className=" border px-10 rounded-lg p-2 text-white bg-[#005DAD]">
                تایید و ادامه
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReservDateAndTimeModal;
