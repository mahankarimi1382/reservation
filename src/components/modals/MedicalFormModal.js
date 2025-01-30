"use client";
import Image from "next/image";
import React, { useState } from "react";
import LoginFormImage from "../../../public/Pics/doctorLoginFormImg.png";
import MedicalCenterFormImage from "../../../public/Pics/MedicalCenterFormImage.png";

import { CitySelectInput, ProvinceSelectInput } from "../Inputs/Input";
import { RxCross2 } from "react-icons/rx";
import { add_medical_center } from "@/api/ApiCalling";
import { SyncLoader } from "react-spinners";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
const MapTest = dynamic(() => import("../../components/MapTest"), {
  ssr: false,
});
const MedicalFormModal = ({ type, setIsMedicalCenterForm }) => {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [position, setPosition] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [siamCode, setSiamCode] = useState("");
  const [phone, setPhone] = useState("");
  const [cityId, setCityId] = useState("1");
  const [desc, setDesc] = useState("");

  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
    },
    name,
    address,
    geolon: position[0],
    geolat: position[1],
    phone,
    cityId,
    siamCode,
    desc,
    clinicTypeId: 1,
  };
  return (
    <div
      dir="rtl"
      className=" bg-[rgba(0,0,0,0.6)] w-full flex fixed justify-center items-center top-0 right-0 z-50 h-screen"
    >
      <div className=" relative overflow-hidden bg-white w-2/3 flex rounded-lg  items-center h-[90%] max-h-[90%]">
        <RxCross2
          onClick={() => setIsMedicalCenterForm(false)}
          className=" absolute z-50 left-1 top-1 cursor-pointer"
        />
        <div className="customScroll overflow-auto max-h-full  w-[80%] p-5 gap-4 flex flex-col">
          <h3 className=" flex text-2xl items-center gap-2">
            درخواست عضویت مرکز درمانی در
            <span className=" text-[#005DAD]">دکتر رزرو</span>
          </h3>
          {/* <h4 className=" text-xl">
            لطفا فرم زیر را پر کنید همکاران ما در اسرع وقت با شما تماس خواهند
            گرفت.
          </h4> */}
          <div className=" flex flex-col gap-3">
            <div className=" flex gap-8 ">
              <div className=" w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  نام مرکز درمانی
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full px-3 py-2 border-[#636972] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  نوع مرکز درمانی
                </label>
                <select
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option></option>
                </select>
              </div>
            </div>
            <div className=" flex gap-8 ">
              <div className=" w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="gender"
                >
                  کد سیام
                </label>

                <input
                  id="siamCode"
                  name="siamCode"
                  type="text"
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={siamCode}
                  onChange={(e) => setSiamCode(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="medicalCode"
                >
                  استان
                </label>

                <ProvinceSelectInput setCities={setCities} hiddentitle />
              </div>
            </div>

            <div className=" flex gap-8 ">
              <div className=" w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="gender"
                >
                  شهر
                </label>
                <CitySelectInput hiddentitle cities={cities} />
              </div>
              <div className="w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="gender"
                >
                  شماره همراه
                </label>

                <input
                  id="clinicAddress"
                  name="clinicAddress"
                  type="text"
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

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
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows="4"
              />
            </div>
            <div className=" w-full">
              <MapTest setPosition={setPosition} />
            </div>
            <button
              onClick={() => {
                add_medical_center(data, setLoading);
              }}
              className=" w-1/3 bg-[#005DAD] hover:bg-blue-700 text-white py-3 px-4 rounded-lg"
              type="submit"
            >
              {loading ? <SyncLoader color="white" size={10} /> : "ثبت درخواست"}
            </button>
          </div>
        </div>
        <Image
          className=" object-cover "
          width={type === "doctor" ? 380 : 440}
          alt="image"
          src={type === "doctor" ? LoginFormImage : MedicalCenterFormImage}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default MedicalFormModal;
