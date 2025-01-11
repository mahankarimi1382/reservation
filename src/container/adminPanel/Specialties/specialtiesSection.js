"use client";
import { delete_specialties, get_specialties } from "@/api/ApiCalling";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi2";
import { TiArrowSortedDown } from "react-icons/ti";
import heartIcon from "../../../../public/Pics/Specialties/heart-icon.png";

function SpecialtiesPanelSection() {
  const [specialist, setSpecialist] = useState([]);

  useEffect(() => {
    const url = "Specialist/read-specialists";

    const fetchData = async () => {
      const data = await get_specialties(url);
      if (data) {
        setSpecialist(data);
      }
    };
    fetchData();
  }, []);

  return (
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

      {specialist.map((item) => {
        return (
          <div
            className=" border flex py-3 rounded-lg bg-white shadow-md"
            key={item.id}
          >
            <div className=" w-1/4 flex justify-center items-center">
              <Image width={47} src={heartIcon} alt="icon" />
            </div>
            <h4 className=" w-1/4 flex justify-center items-center text-[#3F444D] text-lg">
              {item.name}
            </h4>
            <div className=" gap-2 w-1/2 flex justify-center items-center text-[#3F444D] text-lg">
              <button
                onClick={() => delete_specialties(item.id)}
                className=" gap-2 border rounded-lg px-5 p-1 flex justify-center items-center bg-[#EED4D7] border-[#C30505] text-[#C30505]"
              >
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
  );
}

export default SpecialtiesPanelSection;
