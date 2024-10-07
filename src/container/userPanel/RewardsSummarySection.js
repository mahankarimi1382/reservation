import Image from "next/image";
import React from "react";
import coins from "../../../public/Pics/coins-icon.png";
import ticket from "../../../public/Pics/ticket-icon.png";
import eye from "../../../public/Pics/Specialties/eye-icon.png";
function RewardsSummarySection() {
  return (
    <div className=" gap-5 pt-5 text-sm w-[190px] flex flex-col">
      <div className=" flex border-b border-dashed border-[#C4E2FF] pb-5 flex-col justify-center items-center">
        <div className=" flex gap-2">
          <Image width={24} src={coins} alt="icon" />
          <h5>مجموع امتیازات شما :</h5>{" "}
        </div>
        <p>123,000 امتیاز</p>
      </div>
      <div className=" gap-2 flex border-b border-dashed border-[#C4E2FF] pb-5 flex-col justify-center items-center">
        <div className=" flex gap-2">
          <Image width={24} src={ticket} alt="icon" />
          <h5>جایزه های دریافتی</h5>{" "}
        </div>
        <div className=" flex gap-1  text-xs">
          <span className=" flex justify-center items-center border rounded-lg  p-1">
            <Image width={20} src={eye} alt="icon" />
            <h5>چشم پزشکی</h5>
          </span>
          <span className=" flex justify-center items-center border rounded-lg  p-1">
            <Image width={20} src={eye} alt="icon" />
            <h5>چشم پزشکی</h5>
          </span>
        </div>
        <div className=" flex gap-1  text-xs">
          <span className=" flex justify-center items-center border rounded-lg  p-1">
            <Image width={20} src={eye} alt="icon" />
            <h5>چشم پزشکی</h5>
          </span>
          <span className=" flex justify-center items-center border rounded-lg  p-1">
            <Image width={20} src={eye} alt="icon" />
            <h5>چشم پزشکی</h5>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RewardsSummarySection;
