"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { myStore } from "@/store/Store";
import { get_province, get_specialties, read_city } from "@/api/ApiCalling";

export const SerchDropDowns = (props) => {
  const Specialties = [
    { id: 1, caption: "جراحی مغز و اعصاب" },
    { id: 2, caption: "خون، سرطان و آنکولوژی" },
    { id: 3, caption: "اطفال، کودکان و نوزادان" },
    { id: 4, caption: "کلیه و مجاری ادراری" },
    { id: 5, caption: "آزمایشگاه و تصویر برداری" },
    { id: 6, caption: "ریه و دستگاه تنفسی" },
    { id: 8, caption: "جراحی مغز و اعصاب" },
    { id: 9, caption: "جراحی مغز و اعصاب" },
    { id: 10, caption: "جراحی مغز و اعصاب" },
    { id: 11, caption: "جراحی مغز و اعصاب" },
    { id: 12, caption: "جراحی مغز و اعصاب" },
    { id: 13, caption: "جراحی مغز و اعصاب" },
    { id: 14, caption: "جراحی مغز و اعصاب" },
  ];
  const [isSearching, setIsSearching] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectOption = (option) => {
    setIsSearching(false);
    setSelectedOption(option);
  };
  return (
    <div className=" flex flex-col gap-3">
      <h2 className=" text-xl">{props.title}</h2>
      <div
        onClick={() => setIsSearching(!isSearching)}
        className=" px-2 border shadow-[0_1px_15px_-5px_rgba(0,0,0,0.3)] flex justify-center items-center  rounded-xl w-full"
      >
        <CiSearch className=" text-4xl text-[#005DAD]" />
        <input
          placeholder={selectedOption ? selectedOption : props.title}
          className=" outline-none h-[54px] w-full rounded-xl"
        />
        <IoIosArrowDown
          className={` ${
            isSearching && "rotate-180"
          } transition-all   duration-300 text-xl text-[#858585]`}
        />
      </div>
      <div className="bg-white shadow-lg rounded-xl">
        {isSearching ? (
          <div className="  mt-6 mr-2  p-2 transition-all duration-500 w-[95%] h-52 overflow-auto customScroll flex flex-col">
            {Specialties.map((item) => {
              return (
                <div className=" border-b mx-2 flex items-center" key={item.id}>
                  <h5 onClick={() => handleSelectOption(item.caption)}>
                    {item.caption}
                  </h5>
                </div>
              );
            })}
          </div>
        ) : (
          <div className=" transition-all mr-2 duration-300  w-[95%] h-0 overflow-auto customScroll flex flex-col">
            {Specialties.map((item) => {
              return (
                <div className=" border-b mx-2 flex items-center" key={item.id}>
                  <h5>{item.caption}</h5>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export const AcountInfoInputs = (props) => {
  const { isEdit } = myStore();

  const [value, setValue] = useState(props.value);
  return (
    <div className=" flex flex-col gap-2">
      <h2>{props.title}</h2>

      <input
        disabled={!isEdit}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-[320px] h-10 rounded-lg border disabled:bg-[rgba(219,215,215,0.44)]"
      />
    </div>
  );
};
export const BirthDayInput = () => {
  const { isEdit } = myStore();

  return (
    <div className=" flex justify-between items-center">
      <input
        disabled={!isEdit}
        className=" w-[86px] h-10 rounded-lg border disabled:bg-[rgba(219,215,215,0.44)]"
      />
      <input
        disabled={!isEdit}
        className=" w-[86px] h-10 rounded-lg border disabled:bg-[rgba(219,215,215,0.44)]"
      />
      <input
        disabled={!isEdit}
        className=" w-[86px] h-10 rounded-lg border disabled:bg-[rgba(219,215,215,0.44)]"
      />
    </div>
  );
};
export const CitySelect = () => {
  const { isEdit } = myStore();

  return (
    <select
      disabled={!isEdit}
      className="w-[320px] h-10 rounded-lg border disabled:bg-[rgba(219,215,215,0.44)]"
    >
      <option></option>
      <option>تهران</option>
      <option>شیراز</option>
      <option>اردبیل</option>
    </select>
  );
};
export const SelectFilter = ({ title }) => {
  return (
    <select className=" w-[200px] text-[#AAAAAA] h-10 rounded-lg border-2 bg-white border-[rgba(219,215,215,0.44)]">
      <option>{title}</option>
      <option>تهران</option>
      <option>شیراز</option>
      <option>اردبیل</option>
    </select>
  );
};
export const CitySelectInput = ({ cities, hiddentitle }) => {
  console.log(cities);
  return (
    <div className="  flex gap-2 flex-col items-start">
      {!hiddentitle && <h5>شهر</h5>}
      <select className=" border w-full border-[#636972] rounded-lg p-2">
        {cities.map((item) => {
          return <option key={item.id}>{item.cityName}</option>;
        })}
      </select>
    </div>
  );
};
export const ProvinceSelectInput = ({ setCities, hiddentitle }) => {
  const [provinces, setProvinces] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await get_province();
      if (data) {
        setProvinces(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" flex gap-2 flex-col items-start">
      {!hiddentitle && <h5>استان</h5>}
      <select
        onChange={(e) => read_city(e.target.value, setCities)}
        className=" border w-full border-[#636972] rounded-lg p-2"
      >
        <option></option>
        {provinces.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export const SpecialtiesSelectInput = ({ specialistId, setSpecialistId }) => {
  const [specialist, setSpecialist] = useState([]);
  console.log(specialist);
  useEffect(() => {
    const fetchData = async () => {
      const url = "Specialist/read-specialists";

      const data = await get_specialties(url);
      if (data) {
        console.log(data);
        setSpecialist(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" w-[40%] flex gap-2 flex-col items-start">
      <h5>تخصص</h5>
      <select
        value={specialistId}
        onChange={(e) => setSpecialistId(e.target.value)}
        className=" border w-full border-[#636972] rounded-lg p-2"
      >
        <option></option>
        {specialist.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export const ClinicSelectInput = ({ setType }) => {
  const [clinicTypes, setClinicTypes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await get_province();
      if (data) {
        setProvinces(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" flex gap-2 flex-col items-start">
      {!hiddentitle && <h5>استان</h5>}
      <select
        onChange={(e) => read_city(e.target.value, setCities)}
        className=" border w-full border-[#636972] rounded-lg p-2"
      >
        <option></option>
        {provinces.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};