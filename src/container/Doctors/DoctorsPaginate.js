"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import Image from "next/image";
import doctorprof from "../../../public/Pics/abbas.png";
import star from "../../../public/Pics/star.png";
import hospital from "../../../public/Pics/hospital.png";
import monitor from "../../../public/Pics/monitor-mobbile.png";
import { AiFillLike } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import LoadingComponent from "@/components/LoadingComponent";
import {
  EmtyReservButt,
  MatabShowButt,
  SeeDoctorNazaratButt,
} from "@/components/Buttons/Button";
import Link from "next/link";
import { Pagination } from "@mui/material";
import { search_doctors } from "@/api/ApiCalling";
import { myStore } from "@/store/Store";
import { RxCross2 } from "react-icons/rx";
function DoctorsPaginate() {
  const { isSerchDoctorLoading, setIsSerchDoctorLoading } = myStore();
  const {
    bimehTakmili,
    bimeAsli,
    justOnline,
    hasTurn,
    acceptInsurance,
    gender,
    sDate,
    eDate,
    onlineTypeId,
    officeOrClinicHozoori,
  } = myStore();

  const {
    setBimehTakmili,
    specialistSearch,
    setSpecialistSearch,
    setBimeAsli,
    setJustOnline,
    setHasTurn,
    setAcceptInsurance,
    setGender,
    setSDate,
    setEDate,
    setOnlineTypeId,
    setOfficeOrClinicHozoori,
  } = myStore();
  const { currentPageDoctorSearch, setCurrentPageDoctorSearch } = myStore();
  const [name, setName] = useState("");
  const [provinceId, setProvinceId] = useState("");
  const [cityId, setCityId] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [filtredBoxes, setFiltredBoxes] = useState([]);
  let boxItems = [
    {
      id: 1,
      caption: specialistSearch.name,
      type: "specialties",
    },
    {
      id: 2,
      caption: bimeAsli,
      type: "bimeAsli",
    },
    {
      id: 3,
      caption: bimehTakmili,
      type: "bimeTakmili",
    },
  ];
  console.log("box items ", boxItems);
  console.log(filtredBoxes);
  const handleSearchDoctors = (name) => {
    if (name.length >= 2) {
      setIsSerchDoctorLoading(true);
      getDoctors(name);
      setName(name);
      setCurrentPageDoctorSearch(1);
    } else if (name.length == 0) {
      setIsSerchDoctorLoading(true);
      getDoctors(name);
      setName(name);
      setName(name);
      setCurrentPageDoctorSearch(1);
    }
  };
  const handleFiltredBoxes = () => {
    setFiltredBoxes(boxItems);
  };

  const getDoctors = async (name) => {
    let data = {
      name: name || "",
      pagesize: 3,
      currentPage: currentPageDoctorSearch || "",
      specialistId: specialistSearch.id || "",
      provinceId: provinceId || "",
      cityId: cityId || "",
      BimehTakmili: bimehTakmili || "",
      BimeAsli: bimeAsli || "",
      JustOnline: justOnline || "",
      HasTurn: hasTurn || "",
      AcceptInsurance: acceptInsurance || "",
      Gender: gender || "",
      Sdate: sDate || "",
      Edate: eDate || "",
      OnlineTypeId: onlineTypeId || "",
      OfficeOrClinicHozoori: officeOrClinicHozoori || "",
    };
    const result = await search_doctors(data);
    if (result) {
      console.log(result);
      setDoctors(result.list);
      setIsSerchDoctorLoading(false);
      handleFiltredBoxes();
      let number = result.totalRecords / 3;
      let totalpages = Math.ceil(number);
      setTotalPages(totalpages);
    }
  };
  useEffect(() => {
    getDoctors(name);
    setIsSerchDoctorLoading(true);
  }, [
    currentPageDoctorSearch,
    specialistSearch,
    bimehTakmili,
    bimeAsli,
    justOnline,
    hasTurn,
    acceptInsurance,
    gender,
    sDate,
    eDate,
    onlineTypeId,
    officeOrClinicHozoori,
  ]);
  const handleChange = (event, value) => {
    setCurrentPageDoctorSearch(value);
  };
  const handleRemoveItem = (type) => {
    if (type == "specialties") {
      setSpecialistSearch("");
    } else if (type == "bimeAsli") {
      setBimeAsli("");
    } else if (type == "bimeTakmili") {
      setBimehTakmili("");
    } else {
      console.log(type);
    }
  };
  return (
    <div className=" w-[900px] flex flex-col items-center justify-center gap-10">
      <div className=" w-full bg-gray-500 rounded-xl h-20"></div>

      <div className="  w-[100%] ">
        <div className=" rounded-2xl px-3 items-center justify-center gap-1 flex h-[73px] w-[100%] bg-white ">
          <CiSearch className=" text-[#919191] text-3xl" />

          <input
            onChange={(e) => handleSearchDoctors(e.target.value)}
            className=" text-sm outline-none h-full w-[80%]"
            placeholder="جستجو پزشک،درمانگر،کلینیک..."
          />
          <IoLocationOutline className="  text-lg text-[#005DAD]" />
          <p className=" hidden lg:flex text-[12px] text-[#005DAD] font-medium">
            انتخاب شهر
          </p>
        </div>
      </div>
      <div className=" w-full gap-10 px-10 flex bg-white rounded-2xl h-[62px]">
        <h2 className=" flex  items-center text-[20px]">
          <CgSortAz className=" text-3xl" />
          دسته بندی :
        </h2>
        <button className=" text-[#858585]">پیشفرض</button>
        <button className=" text-[#858585]">محبوب ترین ها</button>
        <button className=" text-[#858585]">نزدیک ترین نوبت</button>
        <button className=" text-[#858585]">کم ترین معطلی در مطب</button>
      </div>
      <div className=" w-full justify-center items-center flex flex-col gap-10">
        <div className=" w-full flex justify-start items-center gap-2">
          {filtredBoxes.map((item, index) => {
            console.log(item.caption);
            return (
              item.caption && (
                <button
                  onClick={() => handleRemoveItem(item.type)}
                  key={index}
                  className="whitespace-nowrap flex items-center gap-1 bg-[rgba(31,113,104,0.08)] border border-[#399086C9] text-[#399086C9] rounded-full text-xs overflow-hidden text-ellipsis p-2"
                >
                  <RxCross2 className="text-[#399086C9]" />
                  {item.caption}
                </button>
              )
            );
          })}
        </div>

        {isSerchDoctorLoading && <LoadingComponent />}
        {doctors.map((item) => {
          return (
            <div
              key={item.id}
              className=" rounded-2xl px-10 gap-6 flex flex-col w-full bg-white pb-2 min-h-[400px]"
            >
              <div className="flex justify-between  border-[#CBCBCB] border-b py-7">
                <div className=" w-1/2  flex items-center justify-start gap-5">
                  <Image
                    width={90}
                    height={90}
                    className=" w-[90px] h-[90px] border-2  border-[#005DAD] rounded-full"
                    src={doctorprof}
                    alt="doctor-prof"
                  />
                  <div className=" flex flex-col gap-5">
                    <h2 className=" text-[22px]">
                      {item.doctorName} {item.doctorFamily}
                    </h2>
                    <h2 className=" text-[#757575]">{item.specialist}</h2>
                  </div>
                </div>
                <div className=" flex flex-col items-start justify-center gap-2 ">
                  <div className=" flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => {
                      return (
                        <div key={index}>
                          <Image width={22} alt="" src={star} />
                        </div>
                      );
                    })}
                  </div>
                  <h2 className="  rounded flex items-center justify-center gap-1 text-[#1F7168]">
                    <AiFillLike className=" text-lg" />
                    {item.recomend}
                  </h2>
                  <SeeDoctorNazaratButt />
                </div>
              </div>
              <h2 className=" text-lg">
                خدمات :<span className=" text-[#7E7E7E]">{item.skills}</span>
              </h2>
              <div className=" flex gap-5 text-lg">
                <h2>روش نوبت دهی : </h2>
                <h2 className=" flex gap-2">
                  <Image width={24} src={monitor} alt="monitor-icon" />
                  ویزیت آنلاین
                </h2>

                <h2 className=" flex gap-2">
                  <Image width={24} src={hospital} alt="monitor-icon" />
                  ویزیت حضوری
                </h2>
              </div>

              <div className=" w-full flex gap-4">
                <MatabShowButt items={item.doctorTreatmentCenterList} />
              </div>

              {/* <div className=" flex gap-3 text-lg pb-5 border-b">
              <Image src={barezvijegi} alt="icon" width={24} />
              <h2> ویژگی های بارز پزشک :</h2>
              {item.charecter.map((item2) => {
                return (
                  <h2 className="text-[#1F7168]" key={item2.id}>
                    {item2.caption}
                  </h2>
                );
              })}
            </div> */}
              <div className=" -mt-3 flex justify-between">
                <EmtyReservButt docDetail={item} />
                <Link
                  href={`/doctors/${item.id}`}
                  className=" flex justify-center p-2 px-4 rounded-md text-white items-center bg-[#005DAD] "
                >
                  نوبت بگیرید
                  <IoIosArrowRoundBack className=" text-2xl" />
                </Link>
              </div>
            </div>
          );
        })}
        <Pagination
          onChange={handleChange}
          page={currentPageDoctorSearch}
          count={totalPages}
          color="primary"
        />
      </div>
    </div>
  );
}

export default DoctorsPaginate;
