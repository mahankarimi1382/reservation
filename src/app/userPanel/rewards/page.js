import Navbar from "@/components/Navbar";
import UserPanelMenue from "@/container/userPanel/UserPanelMenue";
import Image from "next/image";
import React from "react";
import coins from "../../../../public/Pics/coins.png";
import giftBox from "../../../../public/Pics/RewardsIcon/gift-box.png";
import document from "../../../../public/Pics/RewardsIcon/document.png";
import questionMarks from "../../../../public/Pics/RewardsIcon/question-marks.png";
import eye from "../../../../public/Pics/Specialties/eye-icon.png";
import rewardImg from "../../../../public/Pics/rewardImage.png";
import coinIcon from "../../../../public/Pics/coinIcon.png";
function page() {
  return (
    <div dir="rtl" className=" bg-[#F6FBFF] w-full">
      <Navbar />
      <div className=" w-full flex">
        <UserPanelMenue />
        <div className=" w-[82%] flex justify-center ">
          <div className=" min-w-1/2 gap-5 absolute flex flex-col items-center justify-center ">
            <div className=" justify-between p-10 items-center  flex h-[170px] w-full rounded-lg bg-gradient-to-r from-[#DBEDFF] to-[#B0DAFF]">
              <Image
                src={coins}
                className=" mt-5"
                alt="coins-Image"
                width={282}
              />
              <h4 className=" text-[#005DAD] text-xl">
                مجموع امتیازات شما : 12300 امتیاز
              </h4>
            </div>
            <div className=" border-b-2 pb-5 flex justify-between w-full items-center">
              <button className=" border border-[#005DAD] text-[#005DAD] flex justify-center items-center px-3 p-1 rounded-lg">
                <Image src={giftBox} alt="icon" width={40} />
                جایزه های دریافتی
              </button>
              <button className=" border border-[#005DAD] text-[#005DAD] flex justify-center items-center px-3 p-1 rounded-lg">
                <Image src={document} alt="icon" width={40} />
                تاریخچه امتیازها
              </button>
              <button className=" border border-[#005DAD] text-[#005DAD] flex justify-center items-center px-3 p-1 rounded-lg">
                <Image src={questionMarks} alt="icon" width={40} />
                پرسش های پرتکرار
              </button>
            </div>
            <div className=" flex justify-between w-full items-center">
              <button className=" p-2 bg-[rgba(211,233,253,0.79)] rounded-lg px-4 text-[#005DAD]">
                همه
              </button>
              <button className=" bg-[rgba(206,206,206,0.17)] p-2 rounded-lg px-4 flex justify-center items-center gap-2">
                <Image width={20} src={eye} alt="icon" />
                چشم پزشکی
              </button>
              <button className=" bg-[rgba(206,206,206,0.17)] p-2 rounded-lg px-4 flex justify-center items-center gap-2">
                <Image width={20} src={eye} alt="icon" />
                چشم پزشکی
              </button>
              <button className=" bg-[rgba(206,206,206,0.17)] p-2 rounded-lg px-4 flex justify-center items-center gap-2">
                <Image width={20} src={eye} alt="icon" />
                چشم پزشکی
              </button>
              <button className=" bg-[rgba(206,206,206,0.17)] p-2 rounded-lg px-4 flex justify-center items-center gap-2">
                <Image width={20} src={eye} alt="icon" />
                چشم پزشکی
              </button>
            </div>
            <div className=" w-full flex flex-col justify-center items-center gap-2">
              <div className=" shadow-md flex flex-col w-full pb-5 bg-white rounded-lg">
                <div className=" flex w-full justify-start p-3 gap-5">
                  <Image src={rewardImg} alt="img" width={261} />
                  <div className=" flex flex-col">
                    <h5>120,000 تومان تخفیف برای خدمات چشم پزشکی</h5>
                    <h5 className=" flex gap-2 items-center text-[#FF9923]">
                      <Image width={32} src={coinIcon} alt="coin-icon" />
                      11,000 امتیاز مورد نیاز
                    </h5>
                  </div>
                </div>
                <div className=" flex justify-center items-center">
                  <span className=" -mr-5 w-8 rounded-full h-8 bg-[#F4FAFF]"></span>
                  <hr className=" border-[#D3E9FD] border-dashed w-full" />
                  <span className=" -ml-5 w-8 rounded-full h-8 bg-[#F4FAFF]"></span>
                </div>
                <div className=" px-5 flex w-full justify-between items-center">
                  <button className=" border border-[#005DAD] rounded-lg p-1 px-10 text-[مشاهده] ">
                    مشاهده
                  </button>
                  <button className=" border w-48 bg-[#005DAD] rounded-lg text-white p-1">
                    دریافت جایزه
                  </button>
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
