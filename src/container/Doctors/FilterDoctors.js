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

function FilterDoctors() {
  const { setBimehTakmili } = myStore();
  return (
    <div className=" flex flex-col gap-[30px] p-5 w-[411px] rounded-xl transition-all min-h-[1164px] bg-white">
      <h2 className=" flex items-center gap-2 text-[20px]">
        <Image width={28} src={filterIcon} alt="icon" />
        فیلتر پیشرفته
      </h2>
      <SerchDropDowns />
      <h2 className=" text-[16px]">روش ویزیت رو انتخاب کنید</h2>
      <div className=" flex justify-between">
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
          <FormGroup>
            <div className=" flex items-center justify-between">
              <h2>فقط پزشکان آنلاین</h2>
              <FormControlLabel control={<Switch />} />
            </div>
            <div className=" flex items-center justify-between">
              <h2>فقط پزشکان دارای نوبت باز</h2>
              <FormControlLabel control={<Switch />} />
            </div>
            <div className=" flex items-center justify-between">
              <h2>فقط پزشکانی که بیمه قبول می کنند</h2>
              <FormControlLabel control={<Switch />} />
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
}

export default FilterDoctors;
