import Navbar from "@/components/Navbar";
import UserPanelMenue from "@/container/userPanel/UserPanelMenue";
import Image from "next/image";
import React from "react";
import bahram from "../../../../public/Pics/bahramMirzayi.png";
import personIcon from "../../../../public/Pics/frame.png";
import { AiOutlineLike } from "react-icons/ai";
import startIcon from "../../../../public/Pics/star.png";
function page() {
  return (
    <div dir="rtl" className="bg-[#F6FBFF] w-full">
      <Navbar />
      <div className=" w-full flex">
        <UserPanelMenue />
        <div className=" w-[82%] flex justify-center">
          <div className=" w-[90%]  flex flex-col gap-5 items-center">
            <div className=" gap-5 flex w-full flex-col p-5 bg-white rounded-lg">
              <div className=" flex w-full justify-between ">
                <div className=" flex  justify-center items-center gap-5">
                  <Image
                    src={bahram}
                    className=" rounded-full border border-[#005DAD] "
                    alt="doctor-profile"
                    width={83}
                  />
                  <div className=" justify-center gap-4 flex flex-col">
                    <h2 className=" text-xl">بهرام میرزایی</h2>
                    <p className=" text-sm text-[#757575]">متخصص مغز و اعصاب</p>
                  </div>
                </div>
                <div className=" flex flex-col gap-10">
                  <div className=" flex  gap-10 items-center">
                    <h5 className=" text-[#005DAD] flex justify-center items-center gap24">
                      <Image src={personIcon} alt="icon" width={18} />
                      مراجعه حضوری
                    </h5>
                    <h5 className=" text-sm p-1 px-2 rounded-full border text-[#005DAD] border-[#005DAD]">
                      تائید شده
                    </h5>
                  </div>
                  <div className=" flex justify-center items-center gap-2 text-[#1F7168]">
                    <AiOutlineLike />
                    <p>مراجعه به این پزشک را توصیه میکنم</p>
                    <div className=" flex justify-center gap-1 items-center">
                      <h5>5</h5>
                      <Image
                        className=" -mt-1"
                        width={18}
                        src={startIcon}
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="">
                <span className=" font-semibold">نظر درباره پزشک : </span>
                دکتر بهرام میرزایی دکتری بسیار ماهر و خبره هستند در کارشان و من
                چند سال بیمار بودم ولی متاسفانه هیچ پزشکی نتوانست کمکم کند در
                درمان ولی دکتر بهرامی مرا نجات دادند
              </p>
              <hr className=" mt-5 border" />
              <div className=" w-full flex justify-between items-center">
                <h5>ثبت نظر : 1403/09/23</h5>
                <div className=" flex justify-center items-center gap-2">
                  <AiOutlineLike className=" text-[#414141]" />
                  این نظر برای 10 نفر مفید بود
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
