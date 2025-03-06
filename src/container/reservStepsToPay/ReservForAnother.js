import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import step1reservation from "../../../public/Pics/reservationStep1.png";
import { create_sme_profile_for_user } from "@/api/ApiCalling";
import {
  CitySelectInput,
  ProvinceSelectInput,
} from "@/components/Inputs/Input";
import Cookies from "js-cookie";
import { SyncLoader } from "react-spinners";
import { reservationStore, smeIdStorage, userProfileStore } from "@/store/Store";

function ReservForAnother({ setSteps, forme }) {
  const [cities, setCities] = useState([]);
  const daysOfMonth = Array.from({ length: 32 }, (_, i) => i + 1);
  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const token = Cookies.get("token");
  const { patientPhone, setPatientPhone } = reservationStore();
  const { phoneNum } = userProfileStore();

  const { setPatientId } = reservationStore();
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState("");
  const [monthOfBirth, setMonthOfBirth] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAtba, setIsAtba] = useState(false);
  const [cityId, setCityId] = useState("1");
  const data = {
    name,
    familyName,
    nationalCode,
    birthDate: `${yearOfBirth}/${monthOfBirth}/${dayOfBirth}`,
    cityId,
    patientPhone,
  };
  const { setSmeId } = smeIdStorage();
  const handlCompleteStep1 = () => {
    setIsLoading(true);
    create_sme_profile_for_user(
      data,
      token,
      setIsLoading,
      setSteps,
      setPatientId,
      setSmeId,
      phoneNum
    );
  };
  return (
    <div
      className=" flex flex-col justify-center lg:py-10 items-center"
      dir="rtl"
    >
      <div className=" flex justify-center items-center w-[90%] h-[124px] bg-[rgba(196,226,255,0.37)] rounded-2xl">
        <Image src={step1reservation} width={915} alt="step-picture" />
      </div>
      <div className=" w-[90%] flex flex-col lg:mt-20 lg:gap-10">
        <h2 className=" text-[20px] text-[#005DAD]">
          {forme ? "دریافت نوبت برای من" : "دریافت نوبت برای دیگری"}
        </h2>
        <hr className=" border-dashed border-[#005DAD]" />
        <h2 className=" lg:text-[20px]">اطلاعات بیمار</h2>
        <div className=" flex flex-col gap-10">
          <div className=" flex flex-col gap-2">
            <h2 className=" lg:text-[20px]">نام</h2>
            <input
              onChange={(e) => setName(e.target.value)}
              className=" px-4 border-[#005DAD] border rounded-xl lg:w-[652px] h-10 lg:h-[61px]"
              placeholder="لطفا نام خود را وارد کنید"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <h2 className=" lg:text-[20px]">نام خانوادگی</h2>
            <input
              onChange={(e) => setFamilyName(e.target.value)}
              className=" px-4 border-[#005DAD] border rounded-xl lg:w-[652px] h-10 lg:h-[61px]"
              placeholder="لطفا نام خانوادگی خود را وارد کنید"
            />
          </div>{" "}
          <div className=" flex flex-col gap-2">
            {!isAtba && <h2 className=" lg:text-[20px]">کد ملی</h2>}

            {!isAtba && (
              <input
                onChange={(e) => setNationalCode(e.target.value)}
                className=" px-4 border-[#005DAD] border rounded-xl lg:w-[652px] h-10 lg:h-[61px]"
                placeholder="لطفا کد ملی خود را وارد کنید"
              />
            )}

            <div dir="rtl" className=" lg:gap-3 flex  items-center">
              <Checkbox
                onChange={(e) => setIsAtba(e.target.checked)}
                size="medium"
              />
              <h2 className=" text-xs whitespace-nowrap lg:text-[18px]">
                اتباع هستم
              </h2>
              <p className=" text-[#E62333F2] text-[10px] lg:text-sm">
                (اگر اتباع هستید لطفا این گزینه را انتخاب کنید)
              </p>
            </div>
            <div className=" flex flex-col gap-2">
              <h2 className=" lg:text-[18px]">تاریخ تولد</h2>
              <div className=" flex lg:gap-8 lg:justify-start justify-center items-center">
                <select
                  onChange={(e) => setDayOfBirth(e.target.value)}
                  className=" text-slate-400 text-center lg:w-[115px] p-1 lg:py-4 rounded-xl border-[#005DAD] border"
                  name="day"
                >
                  <option>روز</option>
                  {daysOfMonth.map((day, index) => (
                    <option key={day} value={index + 1}>
                      {day}
                    </option>
                  ))}
                </select>
                <select
                  onChange={(e) => setMonthOfBirth(e.target.value)}
                  className=" text-slate-400 text-center lg:w-[115px] p-1 lg:py-4 rounded-xl border-[#005DAD] border"
                  name="month"
                >
                  {persianMonths.map((month, index) => (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>

                <input
                  onChange={(e) => setYearOfBirth(e.target.value)}
                  placeholder="سال"
                  className="text-slate-400 text-center lg:w-[115px] p-1 lg:py-4 rounded-xl border-[#005DAD] border"
                />
                <h5 className=" hidden lg:flex text-sm text-[#E62333F2]">
                  (پر کردن این فیلد اجباری نیست)
                </h5>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              {" "}
              <h2 className=" text-[18px]">جنسیت</h2>
              <div className=" flex gap-5 items-center">
                <FormControl className=" w-full flex ">
                  <RadioGroup>
                    <div className=" flex items-center gap-10">
                      <span className=" flex items-center">
                        <h2>آقا</h2>
                        <FormControlLabel
                          className=" mr-0 "
                          value="male"
                          control={<Radio className=" text-3xl" />}
                        />{" "}
                      </span>
                      <span className=" flex items-center">
                        <h2>خانم</h2>

                        <FormControlLabel
                          className=" mr-0 "
                          value="female"
                          control={<Radio className=" text-3xl" />}
                        />
                      </span>
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className=" flex lg:flex-row flex-col items-center gap-2 lg:gap-8">
              <div className=" flex w-full lg:w-1/2 flex-col gap-2 text-[18px]">
                <div className=" w-full lg:w-[393px]">
                  <ProvinceSelectInput
                    height="h-[61px]"
                    setCities={setCities}
                    borderColor="border-[#005DAD]"
                  />
                </div>
              </div>
              <div className=" w-full flex flex-col gap-2 text-[18px]">
                <div className=" w-full lg:w-[227px]">
                  <CitySelectInput
                    setCityId={setCityId}
                    height="h-[61px]"
                    borderColor="border-[#005DAD]"
                    cities={cities}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <h2 className=" text-[18px]">شماره همراه</h2>
            <input
              onChange={(e) => setPatientPhone(e.target.value)}
              placeholder="لطفا شماره همراه خود را وارد کنید"
              className=" w-[652px] py-4 rounded-xl h-[61px] border-[#005DAD] border"
            />{" "}
          </div>{" "}
          <div className=" flex justify-center items-center">
            <button
              onClick={handlCompleteStep1}
              className=" mt-24 w-[460px] py-4 text-white rounded-xl bg-[#005DAD]"
            >
              {isLoading ? (
                <SyncLoader color="white" size={10} />
              ) : (
                "ثبت اطلاعات"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservForAnother;
