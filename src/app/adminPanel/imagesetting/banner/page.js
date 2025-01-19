import DatePickerComponent from "@/components/DatePickerComponent";
import { SelectFilter } from "@/components/Inputs/Input";
import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import Image from "next/image";
import React from "react";
import excel_icon from "../../../../../public/Pics/excelIcon.png";
import printer from "../../../../../public/Pics/printer.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import folder from "../../../../../public/Pics/folder.png";
import { GoPlus } from "react-icons/go";
import Link from "next/link";
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
        <div className=" flex w-[80%]  gap-5 items-center">
          <DatePickerComponent title="از تاریخ" />
          <DatePickerComponent title="تا تاریخ" />
          <SelectFilter title="نظر" />
          <SelectFilter title="نوع ویزیت" />
          <SelectFilter title="محل ویزیت" />
          <SelectFilter title="ساعت" />
        </div>
        <div className=" w-[80%] justify-end flex items-center">
          <Link href="/adminPanel/imagesetting/banner/add-banner"
            className=" flex justify-center items-center gap-2 rounded-lg p-2 bg-[#005DAD] text-white"
          >
            افزودن
            <GoPlus className=" text-2xl" />
          </Link>
        </div>
        <div className=" gap-2 flex justify-end w-[80%] items-center">
          <button className=" border rounded-lg px-3 p-1 gap-2 text-[#185B37] border-[#185B37] flex">
            <Image src={excel_icon} alt=" icon" width={24} />
            خروجی اکسل
          </button>
          <button className=" border rounded-lg px-3 p-1 gap-2 text-[#3F444D] border-[#3F444D] flex">
            <Image src={printer} alt=" icon" width={24} />
            چاپ اطلاعات{" "}
          </button>
        </div>
        <div className=" gap-3 flex flex-col w-[80%] rounded-lg border shadow-md p-4 bg-white">
          <div className=" py-2 w-full flex rounded-lg bg-[#F4F4F4]">
            <h4 className=" gap-2 text-[#005DAD] font-semibold w-[14%] flex justify-center  items-center text-lg">
              <input className=" border-[#005DAD] border" type="checkbox" />
              همه
            </h4>

            <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] ">
              بنر
              <TiArrowSortedDown />
            </h4>

            <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] ">
              عنوان بنر
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] ">
              دسته بندی بنر
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D]">
              تاریخ شروع
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D]">
              تاریخ پایان <TiArrowSortedDown />
            </h4>
          </div>
          {fakeData.map((item) => {
            return (
              <div
                className=" border flex py-3 items-center rounded-lg bg-white shadow-md"
                key={item.id}
              >
                <div className=" w-[14%] flex justify-center items-center">
                  <input className="border-[#005DAD] border" type="checkbox" />
                </div>
                <div className=" w-[14%] flex justify-center items-center text-[#3F444D] ">
                  <Image src={folder} alt="image" width={56} />
                </div>
                <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] ">
                  تخفیف های استثنایی{" "}
                </h4>
                <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] ">
                  پوست، مو و زیبایی{" "}
                </h4>
                <h4 className=" text-[#005DAD] w-[14%] flex justify-center items-center ">
                  1403/09/09{" "}
                </h4>
                <h4 className=" text-[#005DAD] w-[14%] flex justify-center items-center ">
                  1403/09/09{" "}
                </h4>
                <button className=" gap-2 border rounded-lg px-5 p-1 flex justify-center items-center bg-[#F2FEF8] border-[#1F7168] text-[#1F7168]">
                  <CiEdit className=" font-bold text-2xl" />
                  ویرایش
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
