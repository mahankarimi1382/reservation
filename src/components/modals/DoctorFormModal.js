"use client";
import Image from "next/image";
import React, { useState } from "react";
import LoginFormImage from "../../../public/Pics/doctorLoginFormImg.png";
import MedicalCenterFormImage from "../../../public/Pics/MedicalCenterFormImage.png";

import { CitySelectInput, ProvinceSelectInput } from "../Inputs/Input";
import { RxCross2 } from "react-icons/rx";
import { add_medical_center } from "@/api/ApiCalling";
import { SyncLoader } from "react-spinners";
const DoctorFormModal = ({ type, setIsMedicalCenterForm }) => {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [medicalformData, setMedicalFormData] = useState({
    name: "",
    address: "",
    gender: "",
    medicalCode: "",
    siamCode: "",
    contactNumber: "",
    nationalCode: "",
    city: "",
    specialty: "",
    clinicAddress: "",
    comments: "",
  });

  const handleChange = (e) => {
    setMedicalFormData({ ...medicalformData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
    },
    name: "golbarg",
    address: "oonja",
    geolon: 0,
    geolat: 0,
    phone: "09305485308",
    cityId: 1,
    siamCode: "100",
    desc: "klklmklmhjhj",
    clinicTypeId: 1,
  };
  return (
    <div
      dir="rtl"
      className=" bg-[rgba(0,0,0,0.6)] w-full flex fixed justify-center items-center top-0 right-0 z-50 h-screen"
    >
      <div className=" relative overflow-hidden bg-white w-2/3 flex rounded-lg  items-center max-h-[90%]">
        <RxCross2
          onClick={() => setIsMedicalCenterForm(false)}
          className=" absolute z-50 left-1 top-1 cursor-pointer"
        />
        <div className="  w-[80%] p-5 gap-4 flex flex-col">
          <h3 className=" flex text-2xl items-center gap-2">
            {type === "doctor"
              ? "درخواست عضویت پزشکان در "
              : "درخواست عضویت مرکز درمانی در "}
            <span className=" text-[#005DAD]">دکتر رزرو</span>
          </h3>
          {/* <h4 className=" text-xl">
            لطفا فرم زیر را پر کنید همکاران ما در اسرع وقت با شما تماس خواهند
            گرفت.
          </h4> */}
          <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className=" flex gap-8 ">
              <div className=" w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  {type === "doctor" ? "نام" : "نام مرکز درمانی "}
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full px-3 py-2 border-[#636972] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={medicalformData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  {type === "doctor" ? "نام خانوادگی" : "نوع مرکز درمانی "}
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={medicalformData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className=" flex gap-8 ">
              <div className=" w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="gender"
                >
                  {type === "doctor" ? "جنسیت" : "کد سیام "}
                </label>
                {type === "doctor" ? (
                  <select
                    id="gender"
                    name="gender"
                    className="w-full px-3 py-[10px] border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    required
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                  </select>
                ) : (
                  <input
                    id="siamCode"
                    name="siamCode"
                    type="text"
                    className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={medicalformData.siamCode}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
              <div className="w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="medicalCode"
                >
                  {type === "doctor" ? "کد نظام پزشکی" : "استان"}
                </label>
                {type === "doctor" ? (
                  <input
                    id="medicalCode"
                    name="medicalCode"
                    type="text"
                    className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={medicalformData.medicalCode}
                    onChange={handleChange}
                    required
                  />
                ) : (
                  <ProvinceSelectInput setCities={setCities} hiddentitle />
                )}
              </div>
            </div>
            {type === "doctor" && (
              <div className=" flex gap-8 ">
                <div className=" w-1/2 flex flex-col ">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="gender"
                  >
                    کد ملی
                  </label>
                  <input
                    id="clinicAddress"
                    name="clinicAddress"
                    type="text"
                    className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={medicalformData.clinicAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-1/2 flex flex-col ">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="clinicAddress"
                  >
                    شماره همراه
                  </label>
                  <input
                    id="clinicAddress"
                    name="clinicAddress"
                    type="text"
                    className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={medicalformData.clinicAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            )}
            <div className=" flex gap-8 ">
              <div className=" w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="gender"
                >
                  {type === "doctor" ? "استان" : "شهر"}
                </label>
                {type === "doctor" ? (
                  <ProvinceSelectInput hiddentitle setCities={setCities} />
                ) : (
                  <CitySelectInput hiddentitle cities={cities} />
                )}
              </div>
              <div className="w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="gender"
                >
                  {type === "doctor" ? "شهر" : "شماره همراه"}
                </label>
                {type === "doctor" ? (
                  <select
                    id="gender"
                    name="gender"
                    className="w-full px-3 py-[10px] border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    required
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                  </select>
                ) : (
                  <input
                    id="clinicAddress"
                    name="clinicAddress"
                    type="text"
                    className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={medicalformData.clinicAddress}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            </div>
            {type === "doctor" ? (
              <div className=" flex gap-8 ">
                <div className=" w-1/2 flex flex-col ">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="gender"
                  >
                    تخصص
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="w-full px-3 py-[10px] border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    required
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                  </select>
                </div>
                <div className="w-1/2 flex flex-col ">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="clinicAddress"
                  >
                    آدرس مطب
                  </label>
                  <input
                    id="clinicAddress"
                    name="clinicAddress"
                    type="text"
                    className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            ) : (
              <div className=" w-full flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="clinicAddress"
                >
                  آدرس مرکز درمانی
                </label>
                <input
                  id="clinicAddress"
                  name="clinicAddress"
                  type="text"
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={medicalformData.clinicAddress}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="comments"
              >
                توضیحات
              </label>
              <textarea
                id="comments"
                name="comments"
                className="w-full  px-3 resize-none h-14 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={medicalformData.comments}
                onChange={handleChange}
                rows="4"
              />
            </div>
            <button
              onClick={() => {
                type == "doctor"
                  ? console.log("first")
                  : add_medical_center(data, setLoading);
              }}
              className=" w-1/3 bg-[#005DAD] hover:bg-blue-700 text-white py-3 px-4 rounded-lg"
              type="submit"
            >
              {loading ? <SyncLoader color="white" size={10} /> : "ثبت درخواست"}
            </button>
            {/* <p className=" -mt-3 ">
              قبلا ثبت نام کرده اید؟
              <span className=" text-[#005DAD] cursor-pointer">ورود</span>
            </p> */}
          </form>
        </div>
        <Image
          className=" object-cover "
          width={type === "doctor" ? 380 : 440}
          alt="image"
          src={type === "doctor" ? LoginFormImage : MedicalCenterFormImage}
        />
      </div>
    </div>
  );
};

export default DoctorFormModal;
