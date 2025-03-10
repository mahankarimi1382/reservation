"use client";
import Image from "next/image";
import React, { useState } from "react";
import LoginFormImage from "../../../public/Pics/doctorLoginFormImg.png";

import {
  CitySelectInput,
  ProvinceSelectInput,
  SpecialtiesSelectInput,
} from "../Inputs/Input";
import { RxCross2 } from "react-icons/rx";
import { SyncLoader } from "react-spinners";
import {
  add_doctor,
  create_sme_profile,
  create_sme_profile_for_doctor,
} from "@/api/ApiCalling";
import Cookies from "js-cookie";
import { smeIdStorage, userProfileStore } from "@/store/Store";
const DoctorFormModal = ({ setIsAddDoctorModal, fromSignup }) => {
  const { phoneNum } = userProfileStore();
  const [cityId, setCityId] = useState("");
  console.log(cityId);
  console.log(cityId.id);
  const [specialistId, setSpecialistId] = useState("");
  console.log(specialistId);
  const { smeId } = smeIdStorage();

  const [doctorformData, setDoctorFormData] = useState({
    name: "",
    lastName: "",
    gender: "",
    codeNezam: "",
    nationalCode: "",
    phone: "",
    address: "",
    desc: "",
  });
  const data = {
    doctorName: doctorformData.name,
    doctorFamily: doctorformData.lastName,
    nationalId: doctorformData.nationalCode,
    codeNezam: doctorformData.codeNezam,
    specialistId: specialistId,
    mobile: doctorformData.phone,
    city: cityId.id,
    desc: doctorformData.desc,
    gender: doctorformData.gender,
    docExperiance: "string",
    docInstaLink: "string",
    smeProfileId: smeId || "",
  };

  const token = Cookies.get("token");
  console.log("smeID", smeId);
  const [isloading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);

  const handleChange = (e) => {
    setDoctorFormData({ ...doctorformData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (smeId) {
      console.log("first");
      setIsLoading(true);
      add_doctor(data, setIsLoading, setIsAddDoctorModal);
    } else {
      setIsLoading(true);
      create_sme_profile_for_doctor(
        data,
        token,
        setIsLoading,
        setIsAddDoctorModal,
        phoneNum
      );
    }
  };

  return (
    <div
      dir="rtl"
      className=" bg-[rgba(0,0,0,0.6)] w-full flex fixed justify-center items-center top-0 right-0 z-50 h-screen"
    >
      <div className=" relative overflow-hidden bg-white w-2/3 flex rounded-lg  items-center max-h-[90%]">
        <RxCross2
          onClick={() => setIsAddDoctorModal(false)}
          className=" absolute z-50 left-1 top-1 cursor-pointer"
        />
        <div className="  w-[80%] p-5 gap-4 flex flex-col">
          <h3 className=" flex text-2xl items-center gap-2">
            درخواست عضویت پزشکان در
            <span className=" text-[#005DAD]">دکتر رزرو</span>
          </h3>
          {fromSignup && (
            <h4 className=" text-xl">
              لطفا فرم زیر را پر کنید همکاران ما در اسرع وقت با شما تماس خواهند
              گرفت.
            </h4>
          )}

          <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className=" flex gap-8 ">
              <div className=" w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  نام
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-3 py-2 border-[#636972] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={doctorformData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  نام خانوادگی
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={doctorformData.lastName}
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
                  جنسیت
                </label>

                <select
                  id="gender"
                  name="gender"
                  className="w-full px-3 py-[10px] border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  required
                >
                  <option value={null}>انتخاب کنید</option>
                  <option value={true}>مرد</option>
                  <option value={false}>زن</option>
                </select>
              </div>
              <div className="w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="medicalCode"
                >
                  کد نظام پزشکی
                </label>

                <input
                  id="codeNezam"
                  name="codeNezam"
                  type="text"
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={doctorformData.codeNezam}
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
                  کد ملی
                </label>
                <input
                  id="nationalCode"
                  name="nationalCode"
                  type="text"
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={doctorformData.nationalCode}
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
                  id="phone"
                  name="phone"
                  type="text"
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={doctorformData.phone}
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
                  استان
                </label>

                <ProvinceSelectInput hiddentitle setCities={setCities} />
              </div>
              <div className="w-1/2 flex flex-col ">
                <CitySelectInput setCityId={setCityId} cities={cities} />
              </div>
            </div>

            <div className=" flex gap-8 ">
              <div className=" w-1/2 flex flex-col ">
                <SpecialtiesSelectInput
                  specialistId={specialistId}
                  setSpecialistId={setSpecialistId}
                />
              </div>
              <div className="w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="clinicAddress"
                >
                  آدرس مطب
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={doctorformData.address}
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="comments"
              >
                توضیحات
              </label>
              <textarea
                id="desc"
                name="desc"
                className="w-full  px-3 resize-none h-14 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={doctorformData.desc}
                onChange={handleChange}
                rows="4"
              />
            </div>
            <button
              className=" w-1/3 bg-[#005DAD] hover:bg-blue-700 text-white py-3 px-4 rounded-lg"
              type="submit"
            >
              {isloading ? (
                <SyncLoader color="white" size={10} />
              ) : (
                "ثبت درخواست"
              )}
            </button>
            {/* <p className=" -mt-3 ">
              قبلا ثبت نام کرده اید؟
              <span className=" text-[#005DAD] cursor-pointer">ورود</span>
            </p> */}
          </form>
        </div>
        <Image
          className=" object-cover "
          width={380}
          alt="image"
          src={LoginFormImage}
        />
      </div>
    </div>
  );
};

export default DoctorFormModal;
