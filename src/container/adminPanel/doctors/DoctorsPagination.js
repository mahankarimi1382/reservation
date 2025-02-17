"use client";
import { FaEdit } from "react-icons/fa";

import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { delete_doctor } from "@/api/ApiCalling";
import DeletingModal from "@/components/modals/DeletingModal";
import { TreatMentCenterButt } from "@/components/Buttons/Button";

const DoctorsPagination = ({
  isLoading,
  doctors,
  currentPage,
  setCurrentPage,
  totalPages,
  setDoctorItems,
  setIsAddDoctorModal,
  setDoctors,
}) => {
  const [selectedItem, setSelectedItem] = useState({});
  console.log(selectedItem);
  const [isDeletingModal, setIsDeletingModal] = useState(false);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className=" w-full h-full">
      {isDeletingModal && (
        <DeletingModal
          DeletingFn={delete_doctor}
          id={selectedItem.id}
          name={selectedItem.doctorName + " " + selectedItem.doctorFamily}
          setList={setDoctors}
          list={doctors}
          closeModal={() => setIsDeletingModal(false)}
        />
      )}
      {doctors.length == 0 && !isLoading ? (
        <div className=" w-full h-full justify-center items-center flex text-3xl text-slate-500">
          نتیجه ای یافت نشد
        </div>
      ) : (
        doctors.map((item) => {
          console.log(item.smeProfile.doctors[0]);
          return (
            <div
              className=" border flex py-3 items-center rounded-lg bg-white shadow-md"
              key={item.id}
            >
              <div className=" flex w-[5%] justify-center items-center gap-1 text-lg">
                <MdDeleteForever
                  onClick={() => {
                    setSelectedItem(item);
                    setIsDeletingModal(true);
                  }}
                  className="  text-[#3F444D]  transition-all cursor-pointer hover:text-red-600"
                />
                <FaEdit
                  onClick={() => {
                    setIsAddDoctorModal(true);
                    setDoctorItems(item);
                  }}
                  className="  text-[#3F444D]  transition-all cursor-pointer hover:text-green-600"
                />
              </div>
              <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
                {item.smeProfile.doctors[0].doctorName}{" "}
                {item.smeProfile.doctors[0].doctorFamily}
              </h4>
              <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
                مطب
              </h4>
              <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
                {item.smeProfile.doctors[0].codeNezam}
              </h4>
              <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
                {item.smeProfile.doctors[0].nationalId}
              </h4>
              <div className=" w-[38%] flex justify-center items-center gap-1">
                <button className=" p-1 bg-[rgba(31,113,104,0.08)] border border-[#399086C9] text-[#399086C9] rounded-lg text-sm">
                  عکس ها
                </button>
                <button className=" p-1 bg-[rgba(247,79,115,0.21)] border border-[#921A34] text-[#921A34] rounded-lg text-sm">
                  هزینه زیرساخت
                </button>
                <TreatMentCenterButt
                  name={item.doctorName + " " + item.doctorFamily}
                  id={item.id}
                />
                <button className=" p-1 bg-[#DBEDFF] border border-[#005DAD] text-[#005DAD] rounded-lg text-sm">
                  مشاهده جزئیات{" "}
                </button>
              </div>
            </div>
          );
        })
      )}

      <div className=" mt-5  w-full flex justify-center items-center">
        <Pagination
          onChange={handleChange}
          page={currentPage}
          count={totalPages}
          color="primary"
        />
      </div>
    </div>
  );
};

export default DoctorsPagination;
