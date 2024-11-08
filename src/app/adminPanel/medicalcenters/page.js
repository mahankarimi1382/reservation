import DatePickerComponent from "@/components/DatePickerComponent";
import { SelectFilter } from "@/components/Inputs/Input";
import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import Image from "next/image";
import React from "react";
import excel_icon from "../../../../public/Pics/excelIcon.png";
import printer from "../../../../public/Pics/printer.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { RateCounter } from "@/utils/RateCounter";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import bahram from "../../../../public/Pics/bahramMirzayi.png";
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
            <h4 className=" w-[16%] flex justify-center items-center text-[#3F444D] ">
              عکس پزشک
              <TiArrowSortedDown />
            </h4>

            <h4 className=" w-[16%] flex justify-center items-center text-[#3F444D] ">
              نام پزشک <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[16%] flex justify-center items-center text-[#3F444D] ">
              کد نظام پزشکی
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[16%] flex justify-center items-center text-[#3F444D]">
              تخصص
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[16%] flex justify-center items-center text-[#3F444D]">
              تاریخ بارگذاری
              <TiArrowSortedDown />
            </h4>
          </div>
          {fakeData.map((item) => {
            return (
              <div
                className=" border flex py-3 items-center rounded-lg bg-white shadow-md"
                key={item.id}
              >
                <div className=" w-[16%] flex justify-center items-center text-[#3F444D] ">
                  <Image
                    src={bahram}
                    alt="image"
                    width={67}
                    className=" rounded-full border border-[#005DAD]"
                  />
                </div>
                <h4 className=" w-[16%] flex justify-center items-center text-[#3F444D] ">
                  بهرام میرزایی{" "}
                </h4>
                <h4 className=" w-[16%] flex justify-center items-center text-[#3F444D] ">
                  1234567{" "}
                </h4>
                <h4 className=" text-[#005DAD] w-[16%] flex justify-center items-center ">
                  قلب و عروق{" "}
                </h4>
                <h4 className=" text-[#005DAD] w-[16%] flex justify-center items-center ">
                  1403/09/09{" "}
                </h4>
                <button className=" gap-2 border rounded-lg px-5 p-1 flex justify-center items-center bg-[#DBEDFF] border-[#005DAD] text-[#005DAD]">
                  <CiEdit className=" font-bold text-2xl" />
                  مشاهده جزئیات
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
