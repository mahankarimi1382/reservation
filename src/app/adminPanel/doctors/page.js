import DatePickerComponent from "@/components/DatePickerComponent";
import { SelectFilter } from "@/components/Inputs/Input";
import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import Image from "next/image";
import React from "react";
import excel_icon from "../../../../public/Pics/excelIcon.png";
import printer from "../../../../public/Pics/printer.png";
import { TiArrowSortedDown } from "react-icons/ti";

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
          <SelectFilter title="نام پزشک" />
          <SelectFilter title="نام مرکز درمانی" />
          <SelectFilter title="تخصص" />
          <SelectFilter title="نوع ویزیت" />
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
            <h4 className=" w-[15%] flex justify-center  items-center text-[#3F444D] text-lg">
              نام پزشک
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[15%] flex justify-center items-center text-[#3F444D] text-lg">
              نام مرکز درمانی
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[15%] flex justify-center items-center text-[#3F444D] text-lg">
              کد نظام پزشکی
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[15%] flex justify-center items-center text-[#3F444D] text-lg">
              کد ملی <TiArrowSortedDown />
            </h4>
          </div>
          {fakeData.map((item) => {
            return (
              <div
                className=" border flex py-3 rounded-lg bg-white shadow-md"
                key={item.id}
              >
                <h4 className=" w-[15%] flex justify-center items-center text-[#3F444D] text-lg">
                  طاهر ثابتیان
                </h4>
                <h4 className=" w-[15%] flex justify-center items-center text-[#3F444D] text-lg">
                  مطب
                </h4>
                <h4 className=" w-[15%] flex justify-center items-center text-[#3F444D] text-lg">
                  549730
                </h4>
                <h4 className=" w-[15%] flex justify-center items-center text-[#3F444D] text-lg">
                  {item.code}
                </h4>
                <div className=" flex justify-center items-center gap-1">
                  <button className=" p-1 bg-[rgba(31,113,104,0.08)] border border-[#399086C9] text-[#399086C9] rounded-lg text-sm">
                    عکس ها
                  </button>
                  <button className=" p-1 bg-[rgba(247,79,115,0.21)] border border-[#921A34] text-[#921A34] rounded-lg text-sm">
                    هزینه زیرساخت
                  </button>
                  <button className=" p-1 bg-[rgba(83,102,248,0.12)] border border-[#5366F8] text-[#5366F8] rounded-lg text-sm">
                    مشاهده وضعیت اکانت
                  </button>
                  <button className=" p-1 bg-[#DBEDFF] border border-[#005DAD] text-[#005DAD] rounded-lg text-sm">
                    مشاهده جزئیات{" "}
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
