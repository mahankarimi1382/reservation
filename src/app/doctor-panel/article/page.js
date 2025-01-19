import { CiSearch } from "react-icons/ci";
import DoctorProfIcon from "../../../../public/Pics/doctor-profile-icon.png";
import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import DoctorPanelMenu from "@/container/doctor-panel/DoctorPanelMenu";
import AddArticle from "@/container/doctor-panel/article/AddArticle";

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
          {/* <div className=" w-[90%] flex p-3 border border-[#005DAD] bg-[#ECF6FF] rounded-xl items-center text-[#005DAD] gap-1">
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
          </div> */}
          <AddArticle />
        </div>
      </div>
    </div>
  );
}

export default page;
