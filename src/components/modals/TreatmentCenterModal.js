"use client";
import { get_doctor_treatmentCenter } from "@/api/ApiCalling";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ModalLogo from "../../../public/Pics/ModalLogo.png";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AddTreatmentButt } from "../Buttons/Button";

function TreatmentCenterModal({ setIsTreatmentCenter, id, name }) {
  const [isAddTreatmentModal, setIsAddTreatmentModal] = useState(false);

  const [treatmentCenters, setTreatmenCenters] = useState([]);
  console.log(treatmentCenters);
  const getTreatMent = async () => {
    const data = await get_doctor_treatmentCenter(id);
    if (data) {
      console.log(data);
      setTreatmenCenters(data);
    }
  };

  useEffect(() => {
    getTreatMent();
  }, [isAddTreatmentModal]);
  const handleClose = () => {
    setIsTreatmentCenter(false);
  };
  return (
    <div className=" w-screen z-10 h-screen top-0 justify-center items-center flex right-0 fixed bg-[rgba(0,0,0,0.6)]">
      <div className=" w-[450px] h-2/3 bg-white flex flex-col justify-between py-2 px-2 pb-5  items-center rounded-2xl">
        <div className=" relative w-full h-full gap-2 flex items-center flex-col">
          <RxCross2
            onClick={handleClose}
            className=" absolute cursor-pointer top-0 left-0  text-xl text-[#717171] "
          />

          <Image src={ModalLogo} alt="logo" width={67} />
          <div className=" w-full items-start justify-start">
            <h5 className=" flex gap-1">
              مراکز درمانی دکتر
              <span className=" text-[#005DAD]">{name}</span>:
            </h5>
          </div>
          {treatmentCenters.length == 0 ? (
            <h5 className=" w-full h-full flex justify-center items-center text-[#858585]">
              هیچ مرکز درمانی برای {name} ثبت نشده است
            </h5>
          ) : (
            <div className=" overflow-auto rounded-xl border p-2 border-[#005DAD] w-full h-full flex flex-col">
              <div className=" p-2 border-b w-full  flex items-center justify-center">
                <h5 className=" w-1/3">نام مرکز </h5>
                <h5 className=" w-1/3  text-center">نوع مرکز</h5>
                <h5 className=" w-1/3 "></h5>
              </div>
              {treatmentCenters.map((item) => {
                return (
                  <div
                    className=" text-[#858585] border-b last:border-none p-2  flex items-center justify-center"
                    key={item.id}
                  >
                    <h5 className=" w-1/3">
                      {item.officeName || item.clinicName}
                    </h5>
                    <h5 className=" w-1/3  text-center">
                      {item.officeName ? "مطب" : "بیمارستان,درمانگاه"}
                    </h5>
                    <div className=" w-1/3 flex justify-end items-center gap-5 ">
                      <FaEdit className=" text-green-400 hover:text-green-600 transition-all" />
                      <MdDelete className=" text-red-400 hover:text-red-600 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <AddTreatmentButt
            isAddTreatmentModal={isAddTreatmentModal}
            setIsAddTreatmentModal={setIsAddTreatmentModal}
            id={id}
          />
        </div>
      </div>
    </div>
  );
}

export default TreatmentCenterModal;
