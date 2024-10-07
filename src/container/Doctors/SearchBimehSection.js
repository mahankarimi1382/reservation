import { SerchDropDowns } from "@/components/Inputs/Input";
import React from "react";

function SearchBimehSection() {
  const Specialties = [
    { id: 1, caption: "جراحی مغز و اعصاب" },
    { id: 2, caption: "خون، سرطان و آنکولوژی" },
    { id: 3, caption: "اطفال، کودکان و نوزادان" },
    { id: 4, caption: "کلیه و مجاری ادراری" },
    { id: 5, caption: "آزمایشگاه و تصویر برداری" },
    { id: 6, caption: "ریه و دستگاه تنفسی" },
    { id: 7, caption: "جراحی مغز و اعصاب" },
    { id: 7, caption: "جراحی مغز و اعصاب" },
    { id: 7, caption: "جراحی مغز و اعصاب" },
    { id: 7, caption: "جراحی مغز و اعصاب" },
    { id: 7, caption: "جراحی مغز و اعصاب" },
    { id: 7, caption: "جراحی مغز و اعصاب" },
    { id: 7, caption: "جراحی مغز و اعصاب" },
  ];
  return (
    <div className=" min-h-[261px] p-2 py-5 rounded-xl bg-white border shadow-md">
      <h2 className=" text-xl">بیمه :</h2>
      <SerchDropDowns
        details={Specialties}
        title="بیمه تکمیلی :"
        placeholder="جستجو بیمه تکمیلی"
      />
      <SerchDropDowns
        details={Specialties}
        title="بیمه پایه :"
        placeholder="جستجو بیمه پایه"
      />
    </div>
  );
}

export default SearchBimehSection;
