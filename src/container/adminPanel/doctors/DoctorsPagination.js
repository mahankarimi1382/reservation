"use client";
import { FaEdit } from "react-icons/fa";

import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import AddNewDoctorModal from "@/components/modals/AddNewDoctorModal";
import { delete_doctor } from "@/api/ApiCalling";

const DoctorsPagination = ({ items,setDoctors }) => {
  const [isEditDoctor, setIsEditDoctor] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorItems, setDoctorItems] = useState({});
  const itemsPerPage = 10;
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  // محاسبه تعداد کل صفحات
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // محاسبه آیتم‌هایی که باید نمایش داده شوند
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {isEditDoctor && (
        <AddNewDoctorModal
          setIsAddDoctorModal={setIsEditDoctor}
          doctorItems={doctorItems}

        />
      )}
      {currentItems.map((item) => {
        return (
          <div
            className=" border flex py-3 items-center rounded-lg bg-white shadow-md"
            key={item.id}
          >
            <div className=" flex w-[5%] justify-center items-center gap-1 text-lg">
              <MdDeleteForever
                onClick={() => delete_doctor(item.id, setDoctors)}
                className="  text-[#3F444D]  transition-all cursor-pointer hover:text-red-600"
              />
              <FaEdit
                onClick={() => {
                  setIsEditDoctor(true);
                  setDoctorItems(item);
                }}
                className="  text-[#3F444D]  transition-all cursor-pointer hover:text-green-600"
              />
            </div>
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

      {/* دکمه‌های صفحه‌بندی */}
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
