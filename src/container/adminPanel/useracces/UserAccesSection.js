"use client";
import { IOSSwitch } from "@/components/Buttons/Button";
import { FormControlLabel } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";
import excel_icon from "../../../../public/Pics/excelIcon.png";
import printer from "../../../../public/Pics/printer.png";
import lockIcon from "../../../../public/Pics/lock-icon.png";
import { get_all_users } from "@/api/ApiCalling";
import LoadingComponent from "@/components/LoadingComponent";

function UserAccesSection() {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);
  console.log(users);
  const getUsers = async () => {
    const data = await get_all_users();
    if (data) {
      console.log(data);
      setUsers(data);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
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
    <div className=" gap-10 mt-20 w-full flex flex-col items-center ">
      {loading && <LoadingComponent />}
      {/* <div className=" flex w-[80%]  gap-5 items-center">
        <DatePickerComponent title="از تاریخ" />
        <DatePickerComponent title="تا تاریخ" />
        <SelectFilter title="نام پزشک" />
        <SelectFilter title="ساعت" />
        <SelectFilter title="نوع ویزیت" />
        <SelectFilter title="نام مرکز درمانی" />
      </div> */}
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
        {users.map((item) => {
          return (
            <div
              className=" border flex py-3 rounded-lg bg-white shadow-md"
              key={item.id}
            >
              <h4 className=" w-[13%] flex justify-center items-center text-[#3F444D] ">
                {" "}
              </h4>
              <h4 className=" w-[13%] flex justify-center items-center text-[#3F444D] ">
                {item.profileName}
              </h4>
              <h4 className=" w-[13%] flex justify-center items-center text-[#3F444D] ">
                {" "}
              </h4>
              <h4 className=" bg-white z-10 w-[13%] flex justify-center items-center text-[#3F444D] ">
                {item.userName}
              </h4>
              <h4 className=" w-[14%] max-w-[15%] flex justify-center items-center text-[#3F444D] ">
                {" "}
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
  );
}

export default UserAccesSection;
