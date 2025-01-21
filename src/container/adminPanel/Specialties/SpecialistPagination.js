"use client";
import { delete_specialties } from "@/api/ApiCalling";
import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi2";

const SpecialistPagination = ({
  items,
  setIsAddSpecialModal,
  setItem,
  setSpecialist,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const itemsPerPage = 10;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {currentItems.map((item) => {
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
            </div>
          </div>
        );
      })}
      <div className=" w-full flex justify-center items-center mt-5">
        {/* دکمه‌های صفحه‌بندی */}
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

export default SpecialistPagination;
