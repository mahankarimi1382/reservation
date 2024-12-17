import { CiSearch } from "react-icons/ci";
import DoctorProfIcon from "../../../../public/Pics/doctor-profile-icon.png";
import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import DoctorPanelMenu from "@/container/doctor-panel/DoctorPanelMenu";
import { PiWarningCircle } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { GoTrash } from "react-icons/go";

function page() {
  return (
    <div dir="rtl" className="flex pb-20  bg-[#F6FBFF]">
      <DoctorPanelMenu />
      <div className=" mt-10 w-full flex flex-col gap-7 items-center">
        <div className=" flex justify-between items-center w-[80%]">
          <label className=" bg-white w-[450px] border px-2 p-1 border-[#005DAD] rounded-xl flex justify-between ">
            <input className=" w-full outline-none" placeholder="جستجو" />
            <CiSearch className=" text-white text-4xl p-1 rounded-lg bg-[#005DAD]" />
          </label>
          <button className=" flex justify-center items-center p-2 border text-[#005DAD] gap-2 border-[#005DAD] rounded-xl">
            <Image src={DoctorProfIcon} width={24} alt="icon" />
            دکتر طاهر ثابتیان
            <IoIosArrowDown className=" text-xl" />
          </button>
        </div>
        <div className=" w-[80%] mt-14 p-5 items-center flex gap-7 bg-white rounded-3xl flex-col">
          <div className=" w-[90%] flex p-3 border border-[#005DAD] bg-[#ECF6FF] rounded-xl items-center text-[#005DAD] gap-1">
            <PiWarningCircle />
            <h5>
              لیست زیر شامل بیماران شما در مطب انتخاب شده می باشد در صورت نیاز
              مطب خود را تغییر دهید.
            </h5>
          </div>
          <div className=" w-full flex justify-end gap-3">
            <button className=" flex items-center rounded-lg justify-center px-8 p-1 text-[#005DAD] gap-2 border border-[#005DAD]">
              <CiEdit className=" text-xl" />
              ویرایش
            </button>
            <button className=" text-[#E62333F2] border-[#E62333F2] bg-[rgba(230,35,51,0.07)] rounded-lg flex items-center justify-center px-8 p-1 text-[#005DAD] gap-2 border border-[#005DAD]">
              <GoTrash />
              حذف
            </button>
          </div>
          <div className=" w-full gap-4 flex flex-col">
            <h5 className=" font-semibold">1 ) عنوان مقاله</h5>
            <textarea
              className=" p-4 resize-none border rounded-2xl"
              placeholder="لطفا عنوان مقاله  خود را بنویسید"
            />
            <h5 className=" font-semibold">2 ) توضیحات مختصر</h5>
            <textarea
              className=" h-32 p-4 resize-none border rounded-2xl"
              placeholder="خلاصه یا چکیده‌ای از مقاله که محتوای اصلی و نکات مهم مقاله را در چند خط توضیح دهید."
            />
            <h5 className=" font-semibold">3 ) دسته بندی مقاله</h5>
            <select className=" text-[#C1C0C0] w-[270px] p-2 border rounded-lg">
              <option>لطفا موضوع مقاله را مشخص کنید</option>
            </select>
            <h5 className=" font-semibold">4 ) نویسندگان مقاله</h5>
            <input
              placeholder="نام و نام خانوادگی نویسنده"
              className=" w-[270px] p-2 border rounded-lg"
            />
            <h5 className=" font-semibold">5 ) تاریخ انتشار مقاله</h5>
            <div className=" flex gap-3 items-center">
              <input
                placeholder="روز"
                className=" text-center w-[130px] p-2 border rounded-lg"
              />
              <input
                placeholder="ماه"
                className=" text-center w-[130px] p-2 border rounded-lg"
              />
              <input
                placeholder="سال"
                className=" text-center w-[130px] p-2 border rounded-lg"
              />
            </div>
            <h5 className=" font-semibold">6 ) بارگذاری مقاله</h5>
            <textarea
              className=" h-52 bg-[#F5F5F5] p-4 resize-none border rounded-2xl"
              placeholder="پزشک گرامی لطفا مقاله را اینجا بگذارید ( کپی کنید سپس اینجا پیست کنید )"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
