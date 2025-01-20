"use client";
import { delete_doctor, get_doctors } from "@/api/ApiCalling";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AddDoctorButt } from "@/components/Buttons/Button";
import excel_icon from "../../../../public/Pics/excelIcon.png";
import Image from "next/image";

import { TiArrowSortedDown } from "react-icons/ti";
import { SelectFilter } from "@/components/Inputs/Input";
function DoctorsSection() {
  const [isAddDoctorModal, setIsAddDoctorModal] = useState(false);

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const url = "Doctor/read-all-doctors";

    const fetchData = async () => {
      const data = await get_doctors(url);
      if (data) {
        setDoctors(data);
      }
    };
    fetchData();
  }, [isAddDoctorModal]);
  return (
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
        {/* <button className=" border rounded-lg px-3 p-1 gap-2 text-[#3F444D] border-[#3F444D] flex">
        <Image src={printer} alt=" icon" width={24} />
        چاپ اطلاعات{" "}
      </button> */}
        <AddDoctorButt
          isAddDoctorModal={isAddDoctorModal}
          setIsAddDoctorModal={setIsAddDoctorModal}
        />
      </div>
      <div className=" gap-3 flex flex-col w-[85%] rounded-lg border shadow-md p-4 bg-white">
        <div className=" py-2 w-full flex rounded-lg bg-[#F4F4F4]">
          <span className=" w-[5%]" />
          <h4 className=" w-[14%] flex justify-center  items-center text-[#3F444D] text-lg">
            نام پزشک
            <TiArrowSortedDown />
          </h4>
          <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
            نام مرکز درمانی
            <TiArrowSortedDown />
          </h4>
          <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
            کد نظام پزشکی
            <TiArrowSortedDown />
          </h4>
          <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
            کد ملی <TiArrowSortedDown />
          </h4>
        </div>
        {doctors.map((item) => {
          return (
            <div
              className=" border flex py-3 items-center rounded-lg bg-white shadow-md"
              key={item.id}
            >
              <MdDeleteForever
                onClick={() => delete_doctor(item.id,setDoctors)}
                className="  text-[#3F444D] text-lg transition-all cursor-pointer hover:text-red-600 w-[5%]"
              />
              <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
                {item.doctorName} {item.doctorFamily}
              </h4>
              <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
                مطب
              </h4>
              <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
                {item.codeNezam}
              </h4>
              <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
                {item.nationalId}
              </h4>
              <div className=" w-[38%] flex justify-center items-center gap-1">
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
  );
}

export default DoctorsSection;
