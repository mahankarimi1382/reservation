"use client";
import React, { useEffect, useState } from "react";
import filterIcon from "../../../public/Pics/filter.png";
import Image from "next/image";
import MyLocMap from "../../../public/Pics/myLocMap.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SearchSpecialites from "./SearchSpecialites";
import GenderSelect from "./GenderSelect";
import DatePicker from "./DatePicker";
import { NobatButton } from "@/components/Buttons/Button";
import { SerchDropDowns } from "@/components/Inputs/Input";
import SearchBimehSection from "./SearchBimehSection";
import DatePickerComponent from "@/components/DatePickerComponent";
import { get_specialties } from "@/api/ApiCalling";
import { myStore } from "@/store/Store";
import { RxCross2 } from "react-icons/rx";

// bimehTakmili: "",
// setBimehTakmili: (value) => set(() => ({ bimehTakmili: value })),

// bimeAsli: "",
// setBimeAsli: (value) => set(() => ({ bimeAsli: value })),

// justOnline: "",
// setJustOnline: (value) => set(() => ({ justOnline: value })),

// hasTurn: "",
// setHasTurn: (value) => set(() => ({ hasTurn: value })),

// acceptInsurance: "",
// setAcceptInsurance: (value) => set(() => ({ acceptInsurance: value })),

// gender: "",
// setGender: (value) => set(() => ({ gender: value })),

// sDate: "",
// setSDate: (value) => set(() => ({ sDate: value })),

// eDate: "",
// setEDate: (value) => set(() => ({ eDate: value })),

// onlineTypeId: "",
// setOnlineTypeId: (value) => set(() => ({ onlineTypeId: value })),

// officeOrClinicHozoori: "",
// setOfficeOrClinicHozoori: (value) =>
//   set(() => ({ officeOrClinicHozoori: value })),

function FilterDoctors({ hidden, setIsFilterClickMobile }) {
  const {
    setJustOnline,
    setAcceptInsurance,
    setHasTurn,
    hasTurn,
    setCurrentPageDoctorSearch,
    acceptInsurance,
    justOnline,
  } = myStore();
  return (
    <div
      className={` ${
        hidden && "hidden"
      }  lg:flex w-full flex  flex-col gap-5 lg:gap-[30px] p-2 lg:p-5 xl:w-[411px] lg:w-1/3 rounded-xl transition-all min-h-[1164px] bg-white`}
    >
      <div className=" flex justify-between items-center">
        <h2 className=" flex items-center gap-2 text-sm lg:text-[20px]">
          <Image
            width={28}
            className=" lg:w-[28px] w-[22px]"
            src={filterIcon}
            alt="icon"
          />
          فیلتر پیشرفته
        </h2>
        <RxCross2
          onClick={() => setIsFilterClickMobile(false)}
          className=" flex lg:hidden"
        />
      </div>
      <SerchDropDowns />
      <h2 className=" text-sm lg:text-[16px]">روش ویزیت رو انتخاب کنید</h2>
      <div className="  w-full flex justify-center gap-5 lg:justify-between">
        <NobatButton type="آنلاین" />
        <NobatButton type="حضوری" />
      </div>
      <div className=" shadow-md gap-3 border bg-white rounded-2xl h-[183px] flex flex-col">
        <Image src={MyLocMap} alt="map" />
        <h5 className=" text-lg px-4">انتخاب موقعیت مکانی من :</h5>
      </div>
      <SearchSpecialites />
      <SearchBimehSection />
      <GenderSelect />
      <DatePicker />
      <div className=" flex w-full justify-center items-center">
        <div className=" w-full h-[168px] flex flex-col justify-center px-5 border shadow-md rounded-2xl">
          <FormGroup
            onChange={(e) => {
              if (e.target.value == "justOnline") {
                setJustOnline(!justOnline);
                setCurrentPageDoctorSearch(1);
              } else if (e.target.value == "justHasTurn") {
                // setHasTurn(!hasTurn);
              } else if (e.target.value == "JustAcceptInsurance") {
                setAcceptInsurance(!acceptInsurance);
                setCurrentPageDoctorSearch(1);
              }
            }}
          >
            <div className=" xl:text-base text-sm flex items-center justify-between">
              <h2>فقط پزشکان آنلاین</h2>
              <FormControlLabel value="justOnline" control={<Switch />} />
            </div>
            <div className=" xl:text-base text-sm flex items-center justify-between">
              <h2>فقط پزشکان دارای نوبت باز</h2>
              <FormControlLabel value="justHasTurn" control={<Switch />} />
            </div>
            <div className=" xl:text-base text-sm flex items-center justify-between">
              <h2>فقط پزشکانی که بیمه قبول می کنند</h2>
              <FormControlLabel
                value="JustAcceptInsurance"
                control={<Switch />}
              />
            </div>
          </FormGroup>
        </div>
      </div>
      <button
        onClick={() => setIsFilterClickMobile(false)}
        className=" lg:hidden rounded-lg text-sm p-2 text-white bg-[#005DAD]"
      >
        اعمال فیلتر ها
      </button>
    </div>
  );
}

export default FilterDoctors;
