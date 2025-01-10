import React from "react";
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

const Specialties = [
  { id: 1, caption: "جراحی مغز و اعصاب" },
  { id: 2, caption: "خون، سرطان و آنکولوژی" },
  { id: 3, caption: "اطفال، کودکان و نوزادان" },
  { id: 4, caption: "کلیه و مجاری ادراری" },
  { id: 5, caption: "آزمایشگاه و تصویر برداری" },
  { id: 6, caption: "ریه و دستگاه تنفسی" },
  { id: 7, caption: "جراحی مغز و اعصاب" },
  { id: 8, caption: "جراحی مغز و اعصاب" },
  { id: 9, caption: "جراحی مغز و اعصاب" },
  { id: 10, caption: "جراحی مغز و اعصاب" },
  { id: 11, caption: "جراحی مغز و اعصاب" },
  { id: 12, caption: "جراحی مغز و اعصاب" },
  { id: 13, caption: "جراحی مغز و اعصاب" },
];
function FilterDoctors() {
  return (
    <div className=" flex flex-col gap-[30px] p-5 w-[411px] rounded-xl transition-all min-h-[1164px] bg-white">
      <h2 className=" flex items-center gap-2 text-[20px]">
        <Image width={28} src={filterIcon} alt="icon" />
        فیلتر پیشرفته
      </h2>
      <SerchDropDowns details={Specialties} title="نام بیماری را جستجو کنید" />
      <h2 className=" text-[16px]">روش نوبت گیری رو انتخاب کنید</h2>
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
