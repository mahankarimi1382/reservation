import DatePickerComponent from "@/components/DatePickerComponent";
import { SelectFilter } from "@/components/Inputs/Input";
import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import Image from "next/image";
import React from "react";
import excel_icon from "../../../../../public/Pics/excelIcon.png";
import printer from "../../../../../public/Pics/printer.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { RateCounter } from "@/utils/RateCounter";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";

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
              نام بیمار
              <TiArrowSortedDown />
            </h4>

            <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] ">
              تاریخ ارسال <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] ">
              ساعت ارسال <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D]">
              وضعیت <TiArrowSortedDown />
            </h4>
          </div>
          {fakeData.map((item) => {
            return (
              <div
                className=" border flex py-3 rounded-lg bg-white shadow-md"
                key={item.id}
              >
                <div className=" w-[14%] flex justify-center items-center">
                  <input className="border-[#005DAD] border" type="checkbox" />
                </div>
                <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] ">
                  طاهر ثابتیان{" "}
                </h4>
                <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] ">
                  1403/04/02{" "}
                </h4>
                <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] ">
                  ساعت 14:30{" "}
                </h4>
                <h4 className=" text-[#005DAD] w-[14%] flex justify-center items-center ">
                  خوانده نشده{" "}
                </h4>
                <div className=" w-[28%] flex justify-center items-center gap-2">
                  <button className=" gap-2 border rounded-lg px-5 p-1 flex justify-center items-center bg-[#EED4D7] border-[#C30505] text-[#C30505]">
                    <HiOutlineTrash />
                    حذف
                  </button>
                  <button className=" text-sm flex justify-center items-center gap-2  bg-[#DBEDFF] text-[#005DAD] border border-[#005DAD] p-2 rounded-lg">
                    <IoEyeOutline />
                    مشاهده نظر{" "}
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
