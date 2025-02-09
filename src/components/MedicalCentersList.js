"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { delete_clinic, delete_office, get_clinics, get_offices } from "@/api/ApiCalling";

import { Pagination } from "@mui/material";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DeletingModal from "./modals/DeletingModal";
import excel_icon from "../../public/Pics/excelIcon.png";
import printer from "../../public/Pics/printer.png";
import DatePickerComponent from "@/components/DatePickerComponent";
import { SelectFilter } from "@/components/Inputs/Input";
import { AddMedicalCenterButt } from "@/components/Buttons/Button";
function MedicalCentersList({ type }) {
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [isMedicalCenterForm, setIsMedicalCenterForm] = useState(false);

  console.log(medicalCenters);
  const getMedicalCenters = async () => {
    const data = await get_clinics();
    if (data) {
      console.log(data);
      setMedicalCenters(data);
    }
  };
  const getOffices = async () => {
    const data = await get_offices();
    if (data) {
      console.log(data);
      setMedicalCenters(data);
    }
  };

  useEffect(() => {
    if (type == "office") {
      getOffices();
    } else {
      getMedicalCenters();
    }
  }, [isMedicalCenterForm]);

  const [isDeletingModal, setIsDeletingModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  console.log(selectedItem);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const itemsPerPage = 10;
  const totalPages = Math.ceil(medicalCenters.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = medicalCenters.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className=" gap-10 mt-20 w-full flex flex-col items-center ">
      <div className=" flex w-[80%]  gap-5 items-center">
        <DatePickerComponent title="از تاریخ" />
        <DatePickerComponent title="تا تاریخ" />
        <SelectFilter title="نظر" />
        <SelectFilter title="نوع ویزیت" />
        <SelectFilter title="محل ویزیت" />
        <SelectFilter title="ساعت" />
      </div>
      <div className=" gap-1 flex-col flex items-end w-[80%] justify-end">
        <AddMedicalCenterButt
          isMedicalCenterForm={isMedicalCenterForm}
          setIsMedicalCenterForm={setIsMedicalCenterForm}
        />
        <div className=" gap-2 flex justify-end w-[80%] items-center">
          <button className=" border rounded-lg px-3 p-1 gap-2 text-[#185B37] border-[#185B37] flex">
            <Image src={excel_icon} alt=" icon" width={24} />
            خروجی اکسل
          </button>
          <button className=" border rounded-lg px-3 p-1 gap-2 text-[#3F444D] border-[#3F444D] flex">
            <Image src={printer} alt=" icon" width={24} />
            چاپ اطلاعات{" "}
          </button>
        </div>
      </div>
      <div className=" gap-3 flex flex-col w-[80%] rounded-lg border shadow-md p-4 bg-white">
        {isDeletingModal && (
          <DeletingModal
            DeletingFn={type == "office" ? delete_office : delete_clinic}
            id={selectedItem.id}
            name={
              type == "office" ? selectedItem.name : selectedItem.clinicName
            }
            setList={setMedicalCenters}
            closeModal={() => setIsDeletingModal(false)}
          />
        )}
        <div className=" py-2 w-full flex rounded-lg bg-[#F4F4F4]">
          <span className="w-[5%]" />
          <h4 className=" primary w-[16%] flex justify-center items-center text-[#3F444D] ">
            {type == "office" ? "مطب" : "مراکز درمانی"}

            <TiArrowSortedDown />
          </h4>

          <h4 className=" w-[16%] flex justify-center items-center text-[#3F444D] ">
            {type == "office" ? "نام مطب" : "نام مرکز "}
            <TiArrowSortedDown />
          </h4>
          <h4 className=" w-[16%] flex justify-center items-center text-[#3F444D] ">
            {type == "office" ? "کد پستی" : "کد سیام"}

            <TiArrowSortedDown />
          </h4>
          <h4 className=" w-[16%] font-medium flex justify-center items-center text-[#3F444D]">
            {type == "office" ? "تعداد پزشکان مطب" : "تعداد پزشکان مرکز"}

            <TiArrowSortedDown />
          </h4>
          <h4 className=" w-[16%] flex justify-center items-center text-[#3F444D]">
            {type == "office" ? "نوع مطب" : "نوع مرکز"}

            <TiArrowSortedDown />
          </h4>
        </div>
        {currentItems.map((item) => {
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
              <div className=" w-[16%] flex justify-center items-center text-[#3F444D] ">
                <Image
                  src={""}
                  alt="image"
                  width={67}
                  className=" rounded-full border border-[#005DAD]"
                />
              </div>
              <h4 className=" w-[16%] flex justify-center items-center text-[#3F444D] ">
                {type == "office" ? item.name : item.clinicName}
              </h4>
              <h4 className=" w-[16%] flex justify-center items-center text-[#3F444D] ">
                {type == "office" ? item.postalCode : item.siamCode}
              </h4>
              <h4 className=" text-[#005DAD] w-[16%] flex justify-center items-center ">
                0
              </h4>
              <h4 className=" text-[#005DAD] w-[16%] flex justify-center items-center ">
                {type == "office" ? item.officeTypeName : item.clinicTypeName}

                {}
              </h4>
              <button className=" gap-2 border rounded-lg px-5 p-1 flex justify-center items-center bg-[#DBEDFF] border-[#005DAD] text-[#005DAD]">
                مشاهده جزئیات
              </button>
            </div>
          );
        })}
        <div className=" w-full flex justify-center items-center">
          <Pagination
            onChange={handleChange}
            page={currentPage}
            count={totalPages}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default MedicalCentersList;
