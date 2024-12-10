import { CiEdit, CiSearch } from "react-icons/ci";
import DoctorProfIcon from "../../../../../public/Pics/doctor-profile-icon.png";
import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import DoctorPanelMenu from "@/container/doctor-panel/DoctorPanelMenu";
import monitor_mobbile from "../../../../../public/Pics/doctorPanel/monitor-mobbile.png";
import buliding from "../../../../../public/Pics/doctorPanel/buliding.png";
import DoctorWorkCalendar from "@/container/doctor-panel/reservation-managment/DoctorWorkCalendar";
function page() {
  return (
    <div dir="rtl" className="flex pb-20  bg-[#F6FBFF]">
      <DoctorPanelMenu />
      <div className=" mt-10 w-full flex flex-col gap-7 items-center">
        <div className=" flex justify-between items-center w-[80%]">
          <label className=" w-[450px] border px-2 p-1 border-[#005DAD] rounded-xl flex justify-between ">
            <input className=" w-full outline-none" placeholder="جستجو" />
            <CiSearch className=" text-white text-4xl p-1 rounded-lg bg-[#005DAD]" />
          </label>
          <button className=" flex justify-center items-center p-2 border text-[#005DAD] gap-2 border-[#005DAD] rounded-xl">
            <Image src={DoctorProfIcon} width={24} alt="icon" />
            دکتر طاهر ثابتیان
            <IoIosArrowDown className=" text-xl" />
          </button>
        </div>
        <div className=" gap-8 w-[80%]  rounded-xl shadow-lg bg-white flex flex-col p-5">
          <div className=" text-xl flex gap-1 items-center">
            <h5>تقویم کاری</h5>
            <p className=" text-red-600 text-sm">
              ( پزشک گرامی لطفا محل ویزیت خود را انتخاب کنید و بعد تقویم کاری
              خود را پر کنید )
            </p>
          </div>
          <div className=" flex justify-center items-center gap-10">
            <button className=" text-[#979797] bg-[#F7F7F7] rounded-lg border border-[#979797] p-2 px-10 flex justify-center items-center gap-2">
              <Image src={buliding} alt="icon" width={24} />
              نوبت مطب ونک
            </button>
            <button className="  text-[#979797] bg-[#F7F7F7] rounded-lg border border-[#979797] p-2 px-10 flex justify-center items-center gap-2">
              <Image src={monitor_mobbile} alt="icon" width={24} />
              نوبت مشاوره آنلاین
            </button>{" "}
          </div>
        </div>
        <DoctorWorkCalendar />
      </div>
    </div>
  );
}

export default page;
