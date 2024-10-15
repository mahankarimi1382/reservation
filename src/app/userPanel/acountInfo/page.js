import {
  ApllyEditButt,
  EditUserInfoButt,
  ManOrWomanButt,
} from "@/components/Buttons/Button";
import {
  AcountInfoInputs,
  BirthDayInput,
  CitySelect,
} from "@/components/Inputs/Input";
import Navbar from "@/components/Navbar";
import UserPanelMenue from "@/container/userPanel/UserPanelMenue";
import React from "react";

function page() {
  return (
    <div dir="rtl" className=" bg-[#F6FBFF] w-full">
      <Navbar />
      <div className=" flex w-full">
        <UserPanelMenue />
        <div className=" w-[82%] flex justify-center h-screen">
          <div className=" w-[70%] h-[610px] flex flex-col bg-white rounded-xl gap-10 shadow-md border ">
            <span className=" items-center w-full justify-end p-5  flex">
              <EditUserInfoButt />
            </span>
            <div className=" flex justify-center gap-14">
              <div className=" flex flex-col">
                <AcountInfoInputs title="نام" />
                <AcountInfoInputs title="آدرس ایمیل" />
                <AcountInfoInputs title="کد ملی" />
                <div className=" flex flex-col gap-2">
                  <h2>جنسیت</h2>
                  <div className=" flex justify-between items-center">
                    <ManOrWomanButt gender="آقا" />
                    <ManOrWomanButt gender="خانم" />
                  </div>
                </div>
                <div className=" flex flex-col gap-2">
                  <h2>شهر</h2>
                  <CitySelect />
                </div>
              </div>
              <div className=" flex flex-col">
                <AcountInfoInputs title="نام خانوادگی" />
                <AcountInfoInputs title="شماره تماس" />
                <div className=" flex flex-col gap-2">
                  <h2>تاریخ تولد</h2>
                  <BirthDayInput />
                </div>
                <div className=" flex flex-col gap-2">
                  <h2>بیمه</h2>
                  <CitySelect />
                </div>
                <div className=" flex flex-col gap-2">
                  <h2>استان</h2>
                  <CitySelect />
                </div>
              </div>
            </div>
            <div className=" w-full justify-center flex px-5">
              <ApllyEditButt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
