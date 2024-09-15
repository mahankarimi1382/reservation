import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import doctorProfileImg from "../../../public/assets/user-profile.png";
import RatingStars from "./RatingStars";
import { BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

function NazarModal({ setNazarModal, setSuccessModal }) {
  const handleSuccessModal = () => {
    setNazarModal(false);
    setSuccessModal(true);
  };
  const closeModal = () => {
    setNazarModal(false);
  };
  return (
    <div
      onClick={closeModal}
      className="   w-screen h-screen top-0 justify-center items-center flex right-0 fixed bg-[rgba(0,0,0,0.6)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="  w-[1200px] h-[97%] rounded-xl bg-white border flex justify-center gap-4 px-2 items-center flex-col shadow-md"
      >
        <div className=" -mt-5 w-full flex justify-end">
          <RxCross2
            onClick={closeModal}
            className=" cursor-pointer text-xl text-[#353535]"
          />
        </div>
        <Image
          className=" -mt-8 border border-[#005DAD] rounded-full"
          src={doctorProfileImg}
          alt="profile"
        />
        <h2 className=" text-[28px]">بهرام میرزایی</h2>
        <h5 className=" text-[#757575] ">متخصص مغز و اعصاب</h5>
        <h5 className=" text-[#757575] ">
          کاربر گرامی ضمن آرزوی سلامتی برای شما ؛ لطفا امتیاز خود را نسبت به
          خدمات دکتر بهرام میرزایی ثبت کنید
        </h5>
        <RatingStars />
        <div className=" flex gap-8">
          <div className=" border-2  rounded-xl text-[16px] p-3 py-5 justify-center items-center flex text-[#757575]">
            <BiSolidLike className=" text-[#757575] text-2xl" />
            <h2>این پزشک را به دیگران پیشنهاد می کنم</h2>
          </div>
          <div className=" border-2  rounded-xl text-[16px] p-3 py-5 flex justify-center items-center text-[#757575]">
            <BiDislike className=" text-[#757575] text-2xl" />
            <h2>این پزشک را به دیگران پیشنهاد نمی کنم</h2>
          </div>{" "}
        </div>
        <h5 className=" text-[#757575]">
          شما با ثبت نظر صادقانه خود به کاربران دیگر در انتخاب این پزشک کمک
          بسیاری خواهید کرد.
        </h5>
        <textarea
          placeholder="لطفا نظر خود را وارد کنید ..."
          className=" p-2 rounded-xl w-[730px] h-[120px] resize-none border-2 "
        />
        <button
          onClick={handleSuccessModal}
          className=" -mb-4 px-32 text-white p-2 bg-[#005DAD] rounded-lg"
        >
          ثبت نظر
        </button>
      </div>
    </div>
  );
}

export default NazarModal;
