import React from "react";
import { Checkbox } from "@mui/material";

function CostumerForm() {
  return (
    <div className=" w-[90%] flex flex-col mt-20 gap-10">
      <h2 className=" text-[20px] text-[#005DAD]">دریافت نوبت برای دیگری</h2>
      <hr className=" border-dashed border-[#005DAD]" />
      <h2 className=" text-[20px]">اطلاعات بیمار</h2>
      <form className=" flex flex-col gap-5">
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
            <div className=" flex gap-8">
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
              <h5>(پر کردن این فیلد اجباری نیست)</h5>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CostumerForm;
