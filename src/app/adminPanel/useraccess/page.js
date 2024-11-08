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
import { IOSSwitch } from "@/components/Buttons/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CiEdit } from "react-icons/ci";
import lockIcon from "../../../../public/Pics/lock-icon.png";
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
          <SelectFilter title="نام پزشک" />
          <SelectFilter title="ساعت" />
          <SelectFilter title="نوع ویزیت" />
          <SelectFilter title="نام مرکز درمانی" />
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
            <h4 className=" w-[13%] flex justify-center  items-center text-[#3F444D] ">
              نقش ها
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[13%] flex justify-center items-center text-[#3F444D] ">
              نام
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[13%] flex justify-center items-center text-[#3F444D] ">
              موبایل <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[13%] flex justify-center items-center text-[#3F444D] ">
              کد ملی <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[13%] flex justify-center items-center text-[#3F444D] ">
              ایمیل
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[13%] flex justify-center items-center text-[#3F444D]">
              وضعیت <TiArrowSortedDown />
            </h4>
          </div>
          {fakeData.map((item) => {
            return (
              <div
                className=" border flex py-3 rounded-lg bg-white shadow-md"
                key={item.id}
              >
                <h4 className=" w-[13%] flex justify-center items-center text-[#3F444D] ">
                  مدیر سیستم{" "}
                </h4>
                <h4 className=" w-[13%] flex justify-center items-center text-[#3F444D] ">
                  پرسنل{" "}
                </h4>
                <h4 className=" w-[13%] flex justify-center items-center text-[#3F444D] ">
                  0912345678{" "}
                </h4>
                <h4 className=" bg-white z-10 w-[13%] flex justify-center items-center text-[#3F444D] ">
                  0024567543{" "}
                </h4>
                <h4 className=" max-w-[15%] flex justify-center items-center text-[#3F444D] ">
                  example@gmail.com{" "}
                </h4>
                <h4 className="  pl-8 text-green-600 w-[10%] flex justify-center items-center ">
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  />
                </h4>
                <div className=" w-[22%] flex justify-center items-center gap-2">
                  <button className=" text-sm flex justify-center items-center gap-2  bg-[rgba(219,215,215,0.25)] text-[#4E4E4E] border border-[#4E4E4E] p-1  rounded-lg">
                    <Image src={lockIcon} alt="icon" width={24} />
                    رمز عبور
                  </button>
                  <button className=" text-sm flex justify-center items-center gap-2  bg-[rgba(228,255,241,0.45)] text-[#1F7168] border border-[#1F7168] p-1 rounded-lg">
                    <CiEdit className=" text-xl text-[#1F7168]" />
                    جزئیات تراکنش{" "}
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
