import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/Pics/logo-doctor.png";

import {
  CitySelectInput,
  ProvinceSelectInput,
  SpecialtiesSelectInput,
} from "../Inputs/Input";
import { add_doctor, edit_doctors } from "@/api/ApiCalling";
import { smeIdStorage } from "@/store/Store";
import { RxCross2 } from "react-icons/rx";
import { SyncLoader } from "react-spinners";
import { ErrorHandler } from "@/utils/ErrorHandler";
function AddNewDoctorModal({ setIsAddDoctorModal, doctorItems }) {
  const [isLoading, setIsLoading] = useState(false);
  const { smeId } = smeIdStorage();
  const [cities, setCities] = useState([]);
  const [doctorName, setDoctorName] = useState(
    doctorItems ? doctorItems.doctorName : ""
  );
  const [doctorFamily, setDoctorFamily] = useState(
    doctorItems ? doctorItems.doctorFamily : ""
  );
  const [nationalId, setnationalId] = useState(
    doctorItems ? doctorItems.nationalId : ""
  );
  const [specialistId, setSpecialistId] = useState(
    doctorItems ? doctorItems.specialistId : ""
  );
  const [codeNezam, setCodeNezam] = useState(
    doctorItems ? doctorItems.codeNezam : ""
  );
  const [mobile, setMobile] = useState(doctorItems ? doctorItems.mobile : "");
  const [cityId, setCityId] = useState(1);
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "0200013076",
    },
    id: doctorItems && doctorItems.id,
    doctorName,
    doctorFamily,
    nationalId,
    specialistId,
    codeNezam,
    docExperiance: "string",
    docInstaLink: "string",
    mobile,
    desc: "string",
    smeProfileId: smeId,
  };
  return (
    <div className=" z-20  w-screen h-screen top-0 justify-center items-center flex right-0 fixed bg-[rgba(0,0,0,0.6)]">
      <div className=" w-1/2 h-[95%] gap-4 rounded-xl p-3 bg-white flex flex-col items-center">
        <div className=" relative w-full justify-center items-center flex">
          <Image src={logo} alt="logo" width={67} />
          <RxCross2
            onClick={() => setIsAddDoctorModal(false)}
            className=" cursor-pointer absolute left-1 top-1 "
          />
        </div>
        <div className=" flex items-start justify-start w-full">
          <h5 className=" text-xl">
            لطفا فرم زیر را با توجه به{" "}
            <span className=" text-[#005DAD] font-semibold">اطلاعات دکتر</span>{" "}
            پر کنید
          </h5>
        </div>
        <div className=" flex flex-wrap w-full gap-x-16 gap-y-5 justify-center  ">
          <div className=" w-[40%] flex gap-2 flex-col items-start">
            <h5>نام</h5>
            <input
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              className=" border border-[#636972] rounded-lg p-2 w-full"
            />
          </div>
          <div className=" w-[40%] flex gap-2 flex-col items-start ">
            <h5>نام خانوادگی</h5>
            <input
              value={doctorFamily}
              onChange={(e) => setDoctorFamily(e.target.value)}
              className=" border border-[#636972] rounded-lg p-2 w-full "
            />
          </div>
          <div className=" flex w-[40%] gap-2 flex-col items-start">
            <h5>جنسیت</h5>
            <select className=" border border-[#636972] rounded-lg p-2 w-full">
              <option></option>
              <option>مرد</option>
              <option>زن</option>
            </select>
          </div>
          <div className=" w-[40%] flex gap-2 flex-col items-start">
            <h5>کد نظام پزشکی</h5>
            <input
              value={codeNezam}
              onChange={(e) => setCodeNezam(e.target.value)}
              className=" border w-full border-[#636972] rounded-lg p-2"
            />
          </div>
          <div className=" w-[40%] flex gap-2 flex-col items-start">
            <h5>کد ملی</h5>
            <input
              value={nationalId}
              onChange={(e) => setnationalId(e.target.value)}
              className=" border w-full border-[#636972] rounded-lg p-2"
            />
          </div>
          <div className=" w-[40%] flex gap-2 flex-col items-start">
            <h5>شماره همراه</h5>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className=" border w-full border-[#636972] rounded-lg p-2"
            />
          </div>
          <div className=" w-[40%]">
            <ProvinceSelectInput setCities={setCities} />
          </div>
          <div className="w-[40%]">
            <CitySelectInput setCityId={setCityId} cities={cities} />
          </div>
          <SpecialtiesSelectInput
            specialistId={specialistId}
            setSpecialistId={setSpecialistId}
          />
          <div className=" w-[40%] flex gap-2 flex-col items-start">
            <h5>آدرس مطب</h5>
            <input className=" border w-full border-[#636972] rounded-lg p-2" />
          </div>
        </div>
        <button
          onClick={() => {
            if (
              doctorName &&
              doctorFamily &&
              nationalId &&
              specialistId &&
              codeNezam &&
              mobile
            ) {
              doctorItems
                ? edit_doctors(data, setIsLoading, setIsAddDoctorModal)
                : add_doctor(data, setIsLoading, setIsAddDoctorModal);
              setIsLoading(true);
            } else {
              ErrorHandler("empty value");
            }
          }}
          className=" w-1/2 flex justify-center h-10 items-center gap-2 rounded-lg p-2 bg-[#005DAD] text-white"
        >
          {isLoading ? <SyncLoader color="white" size={10} /> : "ثبت"}
        </button>
      </div>
    </div>
  );
}

export default AddNewDoctorModal;
