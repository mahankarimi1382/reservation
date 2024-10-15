import Image from "next/image";
import React from "react";
import bahram from "../../../../public/Pics/bahramMirzayi.png";
import { RateCounter } from "@/utils/RateCounter";
import { AiOutlineLike } from "react-icons/ai";

function OpinnionsSummarySection() {
  return (
    <div className=" text-sm w-[402px] flex flex-col">
      <div className=" border-b border-dashed border-[#D3E9FD] flex gap-2 p-2 items-center">
        <Image
          src={bahram}
          width={40}
          alt="profile"
          className=" rounded-full border border-[#005DAD]"
        />
        <div className=" flex w-full flex-col">
          <div className=" justify-between flex">
            <div className=" gap-2 flex">
              <h5>بهرام میرزایی</h5>|
              <h5 className=" text-[#757575]">متخصص مغز و اعصاب</h5>
            </div>
            <RateCounter width={14} rate={5} />
          </div>
          <div className=" flex justify-between">
            <div className=" text-[#1F7168] text-xs flex justify-center items-center">
              <AiOutlineLike />
              <h5>مراجعه به این پزشک را توصیه میکنم</h5>
            </div>
            <button className=" px-2 p-1 rounded-full text-[#005DAD] border border-[#005DAD]">
              تائید شده
            </button>
          </div>
        </div>
      </div>
      <div className=" flex gap-2 p-2 items-center">
        <Image
          src={bahram}
          width={40}
          alt="profile"
          className=" rounded-full border border-[#005DAD]"
        />
        <div className=" flex w-full flex-col">
          <div className=" justify-between flex">
            <div className=" gap-2 flex">
              <h5>بهرام میرزایی</h5>|
              <h5 className=" text-[#757575]">متخصص مغز و اعصاب</h5>
            </div>
            <RateCounter width={14} rate={5} />
          </div>
          <div className=" flex justify-between">
            <div className=" text-[#1F7168] text-xs flex justify-center items-center">
              <AiOutlineLike />
              <h5>مراجعه به این پزشک را توصیه میکنم</h5>
            </div>
            <button className=" px-2 p-1 rounded-full text-[#005DAD] border border-[#005DAD]">
              تائید شده
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpinnionsSummarySection;
