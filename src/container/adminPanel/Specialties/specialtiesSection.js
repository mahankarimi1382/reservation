"use client";
import { delete_specialties, get_specialties } from "@/api/ApiCalling";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { TiArrowSortedDown } from "react-icons/ti";
import { EditSpecialistButt } from "@/components/Buttons/Button";
import { SelectFilter } from "@/components/Inputs/Input";
import { AddSpecialtiesButt } from "@/components/Buttons/Button";
import { GoPlus } from "react-icons/go";
import SubmitSpecialtiesModal from "@/components/modals/SubmitSpecialtiesModal";
import { CiEdit } from "react-icons/ci";

function SpecialtiesPanelSection() {
  const [specialist, setSpecialist] = useState([]);
  const [isAddSpecialModal, setIsAddSpecialModal] = useState(false);
  const [item, setItem] = useState(null);

  console.log(specialist);
  const url = "Specialist/read-specialists";

  const fetchData = async () => {
    const data = await get_specialties(url);
    if (data) {
      setSpecialist(data);
    }
  };
  useEffect(() => {
    fetchData();
  }, [isAddSpecialModal]);

  return (
    <div className=" gap-10 mt-20 w-full flex flex-col items-center ">
      {isAddSpecialModal && (
        <SubmitSpecialtiesModal
          setIsAddSpecialModal={setIsAddSpecialModal}
          item={item}
          setItem={setItem}
        />
      )}

      <div className=" w-[80%] flex justify-between">
        <SelectFilter title="تخصص" />
        <button
          onClick={() => {
            setIsAddSpecialModal(true);
            setItem();
          }}
          className=" flex justify-center items-center gap-2 rounded-lg p-2 bg-[#005DAD] text-white"
        >
          <GoPlus className=" text-2xl" />
          افزودن تخصص
        </button>
      </div>
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
                <img src={item.logoFile} width={47} height={47} alt="logo" />
              </div>
              <h4 className=" w-1/4 flex justify-center items-center text-[#3F444D] text-lg">
                {item.name}
              </h4>
              <div className=" gap-2 w-1/2 flex justify-center items-center text-[#3F444D] text-lg">
                <button
                  onClick={() => {
                    delete_specialties(item.id, setSpecialist);
                  }}
                  className=" gap-2 border rounded-lg px-5 p-1 flex justify-center items-center bg-[#EED4D7] border-[#C30505] text-[#C30505]"
                >
                  <HiOutlineTrash />
                  حذف
                </button>
                <button
                  onClick={() => {
                    setItem(item);
                    setIsAddSpecialModal(true);
                  }}
                  className=" gap-2 border rounded-lg px-5 p-1 flex justify-center items-center bg-[#F2FEF8] border-[#1F7168] text-[#1F7168]"
                >
                  <CiEdit className=" font-bold text-2xl" />
                  ویرایش
                </button>
                {/* <EditSpecialistButt
                  isEditSpecialModal={isEditSpecialModal}
                  setIsEditSpecialModal={setIsEditSpecialModal}
                  item={item}
                /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SpecialtiesPanelSection;
