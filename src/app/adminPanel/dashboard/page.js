"use client";
import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import { CiSearch } from "react-icons/ci";
import DoctorProfIcon from "../../../../public/pics/doctor-profile-icon.png";
import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Doctor from "../../../../public/pics/AdminDashboard-icons/miniDoctorAvatar.png";
import patient from "../../../../public/pics/AdminDashboard-icons/patientAvatar.png";
import select from "../../../../public/pics/AdminDashboard-icons/select-all 1.png";
import people from "../../../../public/pics/AdminDashboard-icons/peopleAvatar.png";
import IncomeAdminChart from "@/container/adminPanel/dashBoard/IncomeAdminChart";
import TurnStatusChart from "@/container/adminPanel/dashBoard/TurnStatusChart";

function page() {
  const HandleCaptionColor = (id) => {
    switch (id) {
      case 1:
        return "text-[#8A8A8A]";
      case 2:
        return "text-[#36B7FF]";
      case 2:
        return "text-[#36B7FF]";
      case 3:
        return "text-[#FFCB5A]";
      case 4:
        return "text-[#66C6B9]";
    }
  };

  const cards = [
    {
      id: 1,
      title: "تعداد مراجعین",
      caption: "500 مراجعه کننده",
      icon: people,
    },
    { id: 2, title: "تعداد پزشکان", caption: "320 پزشک", icon: Doctor },
    { id: 3, title: "تعداد بیماران", caption: "320 بیمار", icon: patient },
    { id: 4, title: "آمار", caption: "350,000,000 تومان", icon: select },
  ];
  return (
    <div dir="rtl" className="flex  bg-[#F6FBFF]">
      <AdminPanelMenu />
      <div className=" mt-10 w-full flex flex-col gap-7 items-center">
        <div className=" flex justify-between items-center w-[80%]">
          <label className=" w-[450px] border px-2 p-1 border-[#005DAD] rounded-xl flex justify-between ">
            <input className=" w-full outline-none" placeholder="جستجو" />
            <CiSearch className=" text-white text-4xl p-1 rounded-lg bg-[#005DAD]" />
          </label>
          <button className=" flex justify-center items-center p-2 border text-[#005DAD] gap-2 border-[#005DAD] rounded-xl">
            <Image src={DoctorProfIcon} width={24} alt="icon" />
            دکتر طاهر ثابتیان
            <IoIosArrowDown className=" text-xl" />
          </button>
        </div>
        <div className=" w-[80%] flex items-center justify-between">
          {cards.map((item) => {
            return (
              <div
                key={item.id}
                className=" w-[225px] gap-2 h-[178px] bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <Image
                  src={item.icon}
                  alt="icon"
                  width={item.id === 1 || item.id === 4 ? 94 : 88}
                />
                <div className="  items-start flex flex-col justify-center gap-10">
                  <h5 className=" font-semibold">{item.title}</h5>
                  <p className={HandleCaptionColor(item.id)}>{item.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" w-[80%] p-4 bg-white items-center  rounded-lg shadow-md flex flex-col">
          <div className=" w-full  h-14 bg-[#E5E7E8] px-5 rounded-2xl flex items-center justify-between">
            <h5>درآمد</h5>
            <select className=" bg-[#E5E7E8] p-2 px-4 rounded-lg border border-[#818181]">
              <option>این ماه</option>
            </select>
          </div>
          <IncomeAdminChart />
        </div>
        <div className=" mb-5 w-[80%] p-4 bg-white items-center  rounded-lg shadow-md flex flex-col">
          <div className=" w-full  h-14 bg-[#E5E7E8] px-5 rounded-2xl flex items-center justify-between">
            <h5>وضعیت نوبت</h5>
            <select className=" bg-[#E5E7E8] p-2 px-4 rounded-lg border border-[#818181]">
              <option>1403</option>
            </select>
          </div>
          <TurnStatusChart />
        </div>
      </div>
    </div>
  );
}

export default page;
