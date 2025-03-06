"use client";
import Image from "next/image";
import React, { useState } from "react";
import LoginFormImage from "../../../public/Pics/doctorLoginFormImg.png";
import MedicalCenterFormImage from "../../../public/Pics/MedicalCenterFormImage.png";

import { CitySelectInput, ProvinceSelectInput } from "../Inputs/Input";
import { RxCross2 } from "react-icons/rx";
import {
  add_medical_center,
  add_Office,
  edit_clinic,
  edit_office,
} from "@/api/ApiCalling";
import { SyncLoader } from "react-spinners";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Phone } from "@mui/icons-material";
import { Eror } from "../ToastAlerts";
const MapTest = dynamic(() => import("../../components/MapTest"), {
  ssr: false,
});
const MedicalFormModal = ({ closeModal, selectedMedical }) => {
  console.log(selectedMedical);
  console.log(selectedMedical);
  const pathName = usePathname();
  console.log(selectedMedical);
  console.log(pathName);
  const isoffice = pathName === "/adminPanel/medicalcenters/offices";
  const [isVirtual, setIsVirtual] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [initProvince, setInitProvince] = useState(
    (selectedMedical && selectedMedical.provinceId) || ""
  );
  const [position, setPosition] = useState([
    (selectedMedical && selectedMedical.geolon) || 51.4055941,
    (selectedMedical && selectedMedical.geolat) || 35.758954,
  ]);
  const [name, setName] = useState(
    (selectedMedical && selectedMedical.clinicName) ||
      (selectedMedical && selectedMedical.name) ||
      ""
  );
  const [address, setAddress] = useState(
    (selectedMedical && selectedMedical.address) || ""
  );
  const [siamCode, setSiamCode] = useState(
    (selectedMedical && selectedMedical.siamCode) ||
      (selectedMedical && selectedMedical.postalCode) ||
      ""
  );
  const [phone, setPhone] = useState(
    (selectedMedical && selectedMedical.phone) || ""
  );

  const [cityId, setCityId] = useState(
    (selectedMedical && selectedMedical.cityId) || ""
  );
  const [desc, setDesc] = useState(
    (selectedMedical && selectedMedical.desc) || ""
  );
  const [clinicTypeId, setClinicTypeId] = useState(
    (selectedMedical && selectedMedical.clinicTypeId) || 0
  );
  const [officeTypeId, setOfficeTypeId] = useState(0);
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
    },
    id: selectedMedical && selectedMedical.id,
    name,
    address,
    geolon: position ? position[0] : 0,
    geolat: position ? position[1] : 0,
    phone,
    cityId: cityId.id,
    siamCode,
    desc,
    clinicTypeId,
  };
  const data2 = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
      smeProfileId: 0,
    },
    id: selectedMedical && selectedMedical.id,
    name,
    address,
    geolon: position ? position[0] : 0,
    geolat: position ? position[1] : 0,
    phone,
    cityId: cityId.id,
    postalCode: siamCode,
    officeTypeId,
  };
  const handleSubmit = () => {
    // console.log(
    //   selectedMedical,
    //   isoffice,
    //   !isVirtual,
    //   cityId,
    //   officeTypeId,
    //   name,
    //   address,
    //   phone,
    //   siamCode
    // );
    if (
      selectedMedical &&
      isoffice &&
      !isVirtual &&
      cityId &&
      officeTypeId &&
      name &&
      address &&
      phone &&
      siamCode
    ) {
      console.log(isoffice);
      setLoading(true);
      console.log("first");
      edit_office(data2, setLoading, closeModal);
    } else if (
      isoffice &&
      !isVirtual &&
      cityId &&
      officeTypeId &&
      name &&
      address &&
      phone &&
      siamCode
    ) {
      console.log(isoffice);
      setLoading(true);
      console.log("first");
      add_Office(data2, setLoading, closeModal);
    } else if (
      selectedMedical &&
      isoffice &&
      isVirtual &&
      officeTypeId &&
      name &&
      phone
    ) {
      setLoading(true);
      console.log("dahd");
      edit_office(data2, setLoading, closeModal);
    } else if (isoffice && isVirtual && officeTypeId && name && phone) {
      setLoading(true);
      console.log("dahd");
      add_Office(data2, setLoading, closeModal);
    } else if (
      selectedMedical &&
      cityId &&
      clinicTypeId &&
      name &&
      address &&
      phone &&
      siamCode
    ) {
      console.log("medical");
      edit_clinic(data, setLoading, closeModal);
      setLoading(true);
    } else if (cityId && clinicTypeId && name && address && phone && siamCode) {
      console.log("medical");
      add_medical_center(data, setLoading, closeModal);
      setLoading(true);
    } else {
      Eror("لطفا اطلاعات را کامل وارد کنید");
    }
  };
  return (
    <div
      dir="rtl"
      className=" bg-[rgba(0,0,0,0.6)] w-full flex fixed justify-center items-center top-0 right-0 z-50 h-screen"
    >
      <div className=" relative overflow-hidden bg-white w-2/3 flex rounded-lg  items-center h-[90%] max-h-[90%]">
        <RxCross2
          onClick={closeModal}
          className=" absolute z-50 left-1 top-1 cursor-pointer"
        />
        <div className="customScroll overflow-auto max-h-full  w-[80%] p-5 gap-4 flex flex-col">
          <h3 className=" flex text-2xl items-center gap-2">
            {isoffice ? "درخواست عضویت مطب در" : "درخواست ثبت مرکز درمانی  در"}
            <span className=" text-[#005DAD]">دکتر رزرو</span>
          </h3>
          <div className=" flex flex-col gap-3">
            <div className=" flex gap-8 ">
              <div className=" w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  {isoffice ? "نام مطب" : "نام مرکز درمانی "}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border-[#636972] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  {isoffice ? "نوع مطب" : "نوع مرکز درمانی "}
                </label>
                {isoffice ? (
                  <select
                    onChange={(e) => {
                      if (e.target.value != 1) {
                        setIsVirtual(true);
                        setAddress("");
                        setPosition(null);
                        setOfficeTypeId(e.target.value);
                      } else {
                        setPosition([
                          (selectedMedical && selectedMedical.geolon) ||
                            51.4055941,
                          (selectedMedical && selectedMedical.geolat) ||
                            35.758954,
                        ]);
                        setIsVirtual(false);
                        setOfficeTypeId(e.target.value);
                      }
                    }}
                    className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={null}>انتخاب نوع مطب</option>
                    <option value={1}>حضوری</option>
                    <option value={2}>تصویری</option>
                    <option value={3}>تلفنی</option>
                    <option value={4}>پیامرسان</option>
                  </select>
                ) : (
                  <select
                    value={clinicTypeId}
                    onChange={(e) => setClinicTypeId(e.target.value)}
                    className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={null}>انتخاب نوع مرکز درمانی</option>
                    <option value={1}>بیمارستان دولتی</option>
                    <option value={2}>بیمارستان خصوصی</option>
                    <option value={3}>درمانگاه خصوصی</option>
                    <option value={4}>درمانگاه دولتی</option>
                    <option value={5}>درمانگاه خیریه</option>
                  </select>
                )}
              </div>
            </div>

            <div className=" flex gap-8 ">
              <div className=" w-1/2 flex flex-col ">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {isoffice ? "کد پستی" : "کد سیام"}
                </label>

                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={siamCode}
                  onChange={(e) => setSiamCode(e.target.value)}
                />
              </div>
              <div className="w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="medicalCode"
                >
                  استان
                </label>

                <ProvinceSelectInput
                  setInitProvince={setInitProvince}
                  initProvince={initProvince}
                  setCities={setCities}
                  hiddentitle
                />
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
                <CitySelectInput
                  cityId={cityId}
                  setCityId={setCityId}
                  hiddentitle
                  cities={cities}
                />
              </div>
              <div className="w-1/2 flex flex-col ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="gender"
                >
                  شماره تلفن
                </label>

                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {!isVirtual && (
              <div className=" w-full flex flex-col ">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {isoffice ? "آدرس مطب" : "آدرس مرکز درمانی"}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#636972] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                className="w-full  px-3 resize-none h-14 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows="4"
              />
            </div>
            {!isVirtual && (
              <div className=" w-full">
                <MapTest position={position} setPosition={setPosition} />
              </div>
            )}

            <button
              onClick={handleSubmit}
              className=" w-1/3 bg-[#005DAD] text-white py-3 px-4 rounded-lg"
              type="submit"
            >
              {loading ? <SyncLoader color="white" size={10} /> : "ثبت درخواست"}
            </button>
          </div>
        </div>
        <Image
          className=" object-cover "
          width={440}
          alt="image"
          src={MedicalCenterFormImage}
        />
      </div>
    </div>
  );
};

export default MedicalFormModal;
