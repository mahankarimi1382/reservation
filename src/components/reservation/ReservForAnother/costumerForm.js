import React from "react";
import { Checkbox } from "@mui/material";

function CostumerForm() {
  return (
    <div className=" w-[90%] flex flex-col mt-20 gap-10">
      <h2 className=" text-[20px] text-[#005DAD]">دریافت نوبت برای دیگری</h2>
      <hr className=" border-dashed border-[#005DAD]" />
      <h2 className=" text-[20px]">اطلاعات بیمار</h2>
      <form className=" flex flex-col gap-10">
        <div className=" flex flex-col gap-2">
          <h2 className=" text-[20px]">نام</h2>
          <input
            className=" px-4 border-[#005DAD] border rounded-xl w-[652px] h-[61px]"
            placeholder="لطفا نام خود را وارد کنید"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <h2 className=" text-[20px]">نام خانوادگی</h2>
          <input
            className=" px-4 border-[#005DAD] border rounded-xl w-[652px] h-[61px]"
            placeholder="لطفا نام خود را وارد کنید"
          />
        </div>{" "}
        <div className=" flex flex-col gap-2">
          <h2 className=" text-[20px]">کد ملی</h2>
          <input
            className=" px-4 border-[#005DAD] border rounded-xl w-[652px] h-[61px]"
            placeholder="لطفا نام خود را وارد کنید"
          />
          <div dir="rtl" className=" gap-3 flex  items-center">
            <Checkbox size="medium" />
            <h2 className=" text-[18px]">اتباع هستم</h2>
            <p className=" text-[#E62333F2] text-sm">
              (اگر اتباع هستید لطفا این گزینه را انتخاب کنید)
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <h2 className=" text-[18px]">تاریخ تولد</h2>
            <div className=" flex gap-8 items-center">
              <input
                placeholder="روز"
                className=" text-center w-[115px] py-4 rounded-xl border-[#005DAD] border"
              />
              <input
                placeholder="ماه"
                className=" text-center w-[115px] py-4 rounded-xl border-[#005DAD] border"
              />
              <input
                placeholder="سال"
                className=" text-center w-[115px] py-4 rounded-xl border-[#005DAD] border"
              />
              <h5 className=" text-sm text-[#E62333F2]">
                (پر کردن این فیلد اجباری نیست)
              </h5>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            {" "}
            <h2 className=" text-[18px]">جنسیت</h2>
            <div className=" flex gap-5 items-center">
              <span className=" flex items-center">
                <Checkbox />
                <h2>خانم</h2>
              </span>
              <span className=" flex items-center">
                <Checkbox />
                <h2>آقا</h2>
              </span>
            </div>
          </div>
          <div className=" flex items-center gap-8">
            <div className=" flex flex-col gap-2 text-[18px]">
              <h2 className=" text-[18px]">استان</h2>
              <input className=" w-[393px] py-4 rounded-xl h-[61px] border-[#005DAD] border" />{" "}
            </div>
            <div className=" flex flex-col gap-2 text-[18px]">
              <h2 className=" text-[18px]">شهر</h2>
              <input className=" w-[227px] py-4 rounded-xl h-[61px] border-[#005DAD] border" />{" "}
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h2 className=" text-[18px]">شماره همراه</h2>
          <input
            placeholder="لطفا شماره همراه خود را وارد کنید"
            className=" w-[652px] py-4 rounded-xl h-[61px] border-[#005DAD] border"
          />{" "}
        </div>{" "}
        <div className=" flex justify-center items-center">
          <button className=" mt-24 w-[460px] py-4 text-white rounded-xl bg-[#005DAD]">
            ثبت اطلاعات
          </button>
        </div>
      </form>
    </div>
  );
}

export default CostumerForm;
