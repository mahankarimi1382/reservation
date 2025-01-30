"use client";
import { delete_doctor, get_doctors } from "@/api/ApiCalling";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AddDoctorButt } from "@/components/Buttons/Button";
import excel_icon from "../../../../public/Pics/excelIcon.png";
import Image from "next/image";

import { TiArrowSortedDown } from "react-icons/ti";
import { SelectFilter } from "@/components/Inputs/Input";
import DoctorsPagination from "./DoctorsPagination";
function DoctorsSection() {
  const [isAddDoctorModal, setIsAddDoctorModal] = useState(false);
  const [doctorItems, setDoctorItems] = useState({});
  console.log(doctorItems);
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
          setDoctorItems={setDoctorItems}
          doctorItems={doctorItems}
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
        <DoctorsPagination
          setDoctorItems={setDoctorItems}
          items={doctors}
          setIsAddDoctorModal={setIsAddDoctorModal}
          setDoctors={setDoctors}
        />
      </div>
    </div>
  );
}

export default DoctorsSection;
