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
import filterIcon from "../../../public/Pics/filter.png";

import {
  CitySelectButtSearchingDoctors,
  EmtyReservButt,
  MatabShowButt,
  SeeDoctorNazaratButt,
} from "@/components/Buttons/Button";
import Link from "next/link";
import { Pagination } from "@mui/material";
import { search_doctors } from "@/api/ApiCalling";
import { myStore } from "@/store/Store";
import { RxCross2 } from "react-icons/rx";
import FilterDoctors from "./FilterDoctors";
function DoctorsPaginate() {
  const { isSerchDoctorLoading, setIsSerchDoctorLoading } = myStore();
  const [isFilterClickMobile, setIsFilterClickMobile] = useState(false);
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
    provinceId,
    cityId,
    setProvinceId,
    setCityId,
  } = myStore();
  const {
    currentPageDoctorSearch,
    setCurrentPageDoctorSearch,
    setFiltredBoxes,
    multiSpecialtiesBoxes,
    setMultiSpecialtiesBoxes,
    specialistNames,
  } = myStore();
  const [name, setName] = useState("");
  console.log(multiSpecialtiesBoxes);
  const [totalPages, setTotalPages] = useState("");
  const [doctors, setDoctors] = useState([]);
  const onlineTypeFn = (id) => {
    if (id == 2) {
      return "تصویری";
    } else if (id == 3) {
      return "تلفنی";
    } else if (id == 4) {
      return "پیامرسان";
    } else if (id == 1) {
      return "مطب ها";
    }
  };

  let boxItems = [
    {
      id: 1,
      caption: bimeAsli,
      type: "bimeAsli",
    },
    {
      id: 2,
      caption: bimehTakmili,
      type: "bimeTakmili",
    },
    {
      id: 3,
      caption: onlineTypeFn(onlineTypeId),
      type: "onlineTypeId",
    },
    {
      id: 4,
      caption: gender,
      type: "gender",
    },
    {
      id: 5,
      caption: provinceId.label,
      type: "province",
    },
    {
      id: 6,
      caption: cityId.label,
      type: "city",
    },
    {
      id: 7,
      caption: justOnline && "فقط پزشکان آنلاین",
      type: "justOnline",
    },
    {
      id: 8,
      caption: acceptInsurance && "فقط پزشکانی که بیمه قبول میکنند",
      type: "acceptInsurance",
    },
  ];

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
    console.log("first");

    setFiltredBoxes(boxItems);
  };
  const genderFn = (gender) => {
    if (gender == "آقایان") {
      return true;
    } else if (gender == "خانم ها") {
      return false;
    } else {
      return "";
    }
  };
  const getDoctors = async (name) => {
    let data = {
      name: name || "",
      pagesize: 3,
      currentPage: currentPageDoctorSearch || "",
      specialistId: specialistSearch|| "",
      provinceId: provinceId.id || "",
      cityId: cityId.id || "",
      BimehTakmili: bimehTakmili || "",
      BimeAsli: bimeAsli || "",
      JustOnline: justOnline || "",
      HasTurn: hasTurn || "",
      AcceptInsurance: acceptInsurance || "",
      Gender: genderFn(gender) || "",
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
    provinceId,
    cityId,
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
    } else if (type == "onlineTypeId") {
      setOnlineTypeId("");
    } else if (type == "province") {
      setProvinceId("");
    } else if (type == "city") {
      setCityId("");
    } else if (type == "justOnline") {
      setJustOnline("");
    } else if (type == "gender") {
      setGender("");
    } else if (type == "acceptInsurance") {
      setAcceptInsurance("");
    } else {
      console.log(type);
    }
  };
  return !isFilterClickMobile ? (
    <div className=" lg:w-[900px] w-[97%] flex flex-col items-center justify-center gap-2 lg:gap-10">
      <div className=" w-full bg-gray-500 rounded-xl h-20"></div>

      <div className="  w-[100%] ">
        <div className=" rounded-2xl lg:px-3 px-1 items-center justify-center lg:text-base text-[sm] lg:gap-1 flex h-[40px] lg:h-[73px] w-[100%] bg-white ">
          <CiSearch className=" text-[#919191] text-xl lg:text-3xl" />

          <input
            onChange={(e) => handleSearchDoctors(e.target.value)}
            className=" text-xs lg:text-sm outline-none h-full w-[80%]"
            placeholder="جستجو پزشک،درمانگر،کلینیک..."
          />
          <CitySelectButtSearchingDoctors />
        </div>
      </div>
      <div className=" w-full flex items-center justify-start">
        <h2
          onClick={() => setIsFilterClickMobile(true)}
          className=" lg:hidden flex items-center gap-2 text-[12px]"
        >
          <Image width={20} src={filterIcon} alt="icon" />
          فیلتر کردن
        </h2>
      </div>
      <div className=" w-full xl:gap-10 lg:gap-5 justify-between xl:text-base text-[9px] lg:text-sm px-3 xl:px-10 flex bg-white rounded-2xl h-11 lg:h-[62px]">
        <h2 className=" hidden lg:flex  items-center text-[20px]">
          <CgSortAz className=" xl:text-3xl" />
          دسته بندی :
        </h2>
        <button className=" text-[#858585]">پیشفرض</button>
        <button className=" text-[#858585]">محبوب ترین ها</button>
        <button className=" text-[#858585]">نزدیک ترین نوبت</button>
        <button className=" text-[#858585]">کم ترین معطلی در مطب</button>
      </div>
      <div className=" w-full justify-center items-center flex flex-col gap-2 lg:gap-10">
        {isSerchDoctorLoading && <LoadingComponent />}
        {doctors.map((item) => {
          return (
            <div
              key={item.id}
              className=" rounded-2xl xl:px-10 px-2 lg:px-5 lg:gap-6 gap-2 flex flex-col w-full bg-white text-xs lg:text-base pb-2 lg:min-h-[400px]"
            >
              <div className="flex justify-between lg:items-center items-start  border-[#CBCBCB] border-b py-3 lg:py-7">
                <div className=" lg:w-1/2  flex items-start lg:items-center justify-start gap-2 lg:gap-5">
                  <Image
                    width={90}
                    height={90}
                    className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] border-2  border-[#005DAD] rounded-full"
                    src={doctorprof}
                    alt="doctor-prof"
                  />
                  <div className=" flex flex-col gap-2 lg:gap-5">
                    <h2 className=" text-sm lg:text-[22px]">
                      {item.doctorName} {item.doctorFamily}
                    </h2>
                    <h2 className=" text-[12px] lg:text-base text-[#757575]">
                      {item.specialist}
                    </h2>
                  </div>
                </div>
                <div className=" flex flex-col items-end lg:items-start justify-center gap-2 ">
                  <div className=" flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => {
                      return (
                        <div key={index}>
                          <Image
                            width={22}
                            className=" w-[15px] lg:w-[22px]"
                            alt=""
                            src={star}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <h2 className="  rounded flex text-xs lg:text-base items-center justify-center gap-1 text-[#1F7168]">
                    <AiFillLike className=" lg:text-lg" />
                    {item.recomend}
                  </h2>
                  <SeeDoctorNazaratButt />
                </div>
              </div>
              <h2 className=" text-sm lg:text-lg">
                خدمات :<span className=" text-[#7E7E7E]">{item.skills}</span>
              </h2>
              <div className=" text-xs gap-1 flex lg:gap-5 lg:text-lg">
                <h2>روش نوبت دهی : </h2>
                <h2 className=" flex gap-1 lg:gap-2">
                  <Image
                    className=" lg:w-[24px] w-[20px] "
                    width={24}
                    src={monitor}
                    alt="monitor-icon"
                  />
                  ویزیت آنلاین
                </h2>

                <h2 className=" flex gap-1 lg:gap-2">
                  <Image
                    width={24}
                    className=" lg:w-[24px] w-[20px] "
                    src={hospital}
                    alt="monitor-icon"
                  />
                  ویزیت حضوری
                </h2>
              </div>

              <div className=" w-full flex">
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
              <div className=" mt-5 lg:-mt-3 flex justify-between">
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
          size="small"
          onChange={handleChange}
          page={currentPageDoctorSearch}
          count={totalPages}
          color="primary"
        />
      </div>
    </div>
  ) : (
    <FilterDoctors
      hidden={false}
      setIsFilterClickMobile={setIsFilterClickMobile}
    />
  );
}

export default DoctorsPaginate;
