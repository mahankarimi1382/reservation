import Navbar from "@/components/Navbar";
import UserPanelMenue from "@/container/userPanel/UserPanelMenue";
import Image from "next/image";
import React from "react";
import prof from "../../../../public/Pics/userPanelProfile.png";
import { CiEdit } from "react-icons/ci";
import { TbTrash } from "react-icons/tb";
import { GoPlusCircle } from "react-icons/go";

function page() {
  return (
    <div dir="rtl" className=" bg-[#F6FBFF] w-full">
      <Navbar />
      <div className=" w-full items-start flex">
        <UserPanelMenue />
        <div className=" w-[82%] flex justify-center">
          <div className=" w-[90%] p-5 bg-white rounded-lg shadow-md flex flex-col gap-5 items-center">
            <div className=" flex flex-col">
              <Image src={prof} alt="profile" width={99} />
              <h5>میلاد خسروی </h5>
            </div>
            <div className=" flex justify-between border-b-2 border-dashed pb-5 w-full items-center">
              <div className=" flex justify-center items-center gap-2">
                <h5 className=" text-[#7E7E7E]">شماره موبایل :</h5>
                <p>09123570240</p>
              </div>
              <div className=" flex justify-center items-center gap-2">
                <h5 className=" text-[#7E7E7E]">کد ملی : </h5>
                <p>0790386402</p>
              </div>
              <div className=" gap-2 flex justify-center items-center">
                <button className=" p-1 px-2 flex justify-center items-center gap-2 rounded-md border border-[#005DAD] text-[#005DAD]">
                  <CiEdit className=" text-2xl" />
                  ویرایش
                </button>
                <button className=" p-1 px-2 flex justify-center items-center gap-2 rounded-md border border-[#005DAD] text-[#005DAD]">
                  <TbTrash className=" text-2xl" />
                  حذف
                </button>
              </div>
            </div>
            <button className=" flex justify-center items-center text-[#005DAD] text-xl gap-2">
              <GoPlusCircle />
              افزودن کاربر جدید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
