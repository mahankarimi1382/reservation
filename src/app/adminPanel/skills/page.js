import DatePickerComponent from "@/components/DatePickerComponent";
import { SelectFilter } from "@/components/Inputs/Input";
import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import Image from "next/image";
import React from "react";
import heartIcon from "../../../../public/Pics/Specialties/heart-icon.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { GoPlus } from "react-icons/go";
import { HiOutlineTrash } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";

function page() {
  const fakeData = [
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
  ];
  return (
    <div dir="rtl" className="flex bg-[#F6FBFF] justify-start">
      <AdminPanelMenu />
      <div className=" gap-10 mt-20 w-full flex flex-col items-center ">
        <div className=" w-[80%] flex justify-between">
          <SelectFilter title="تخصص" />
          <button className=" flex justify-center items-center gap-2 rounded-lg p-2 bg-[#005DAD] text-white">
            <GoPlus className=" text-2xl" />
            افزودن تخصص
          </button>
        </div>

        <div className=" gap-3 flex flex-col w-[80%] rounded-lg border shadow-md p-4 bg-white">
          <div className=" py-2 w-full flex rounded-lg bg-[#F4F4F4]">
            <h4 className=" w-1/4 flex justify-center  items-center text-[#3F444D] text-lg">
              آیکون
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-1/4 flex justify-center items-center text-[#3F444D] text-lg">
              تخصص ها
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-1/2 flex justify-center items-center text-[#3F444D] text-lg">
              اقدامات
              <TiArrowSortedDown />
            </h4>
          </div>
          {fakeData.map((item) => {
            return (
              <div
                className=" border flex py-3 rounded-lg bg-white shadow-md"
                key={item.id}
              >
                <div className=" w-1/4 flex justify-center items-center">
                  <Image width={47} src={heartIcon} alt="icon" />
                </div>
                <h4 className=" w-1/4 flex justify-center items-center text-[#3F444D] text-lg">
                  قلب و عروق
                </h4>
                <div className=" gap-2 w-1/2 flex justify-center items-center text-[#3F444D] text-lg">
                  <button className=" gap-2 border rounded-lg px-5 p-1 flex justify-center items-center bg-[#EED4D7] border-[#C30505] text-[#C30505]">
                    <HiOutlineTrash />
                    حذف
                  </button>
                  <button className=" gap-2 border rounded-lg px-5 p-1 flex justify-center items-center bg-[#F2FEF8] border-[#1F7168] text-[#1F7168]">
                    <CiEdit className=" font-bold text-2xl" />
                    ویرایش
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
