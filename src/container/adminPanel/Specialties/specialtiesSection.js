"use client";
import { get_specialties } from "@/api/ApiCalling";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { SelectFilter } from "@/components/Inputs/Input";
import { GoPlus } from "react-icons/go";
import SubmitSpecialtiesModal from "@/components/modals/SubmitSpecialtiesModal";
import SpecialistPagination from "./SpecialistPagination";

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
        <SpecialistPagination

          setSpecialist={setSpecialist}
          setItem={setItem}
          setIsAddSpecialModal={setIsAddSpecialModal}
          items={specialist}
        />
      </div>
    </div>
  );
}

export default SpecialtiesPanelSection;
