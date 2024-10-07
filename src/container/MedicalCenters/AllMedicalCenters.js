import React from "react";
import Image from "next/image";
import karenLogo from "../../../public/pics/karenLogo.png";
import star from "../../../public/pics/star.png";
import hospital from "../../../public/pics/hospital.png";
import monitor from "../../../public/pics/monitor-mobbile.png";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";

import userTag from "../../../public/pics/user-tag.png";
import favoriteChart from "../../../public/pics/favorite-chart.png";
import Link from "next/link";
const allCenters = [
  {
    id: 1,
    name: "کلینیک زیبایی کارن",
    mainskill: "متخصص مغز و اعصاب",
    rate: "4.5/5 از (نظر 320)",
    skills: 9,
    doctors: 10,
    isOnline: true,
    ishozori: true,
    loc: "تهران: فلکه دوم صادقیه پشت بیمارستان ابن سینا ساختمان پزشکان فدک طبقه اول",
  },
  {
    id: 2,
    name: "کلینیک زیبایی کارن",
    mainskill: "متخصص مغز و اعصاب",
    rate: "4.5/5 از (نظر 320)",
    skills: 9,
    doctors: 10,
    isOnline: true,
    ishozori: true,
    loc: "تهران: فلکه دوم صادقیه پشت بیمارستان ابن سینا ساختمان پزشکان فدک طبقه اول",
  },
  {
    id: 3,
    name: "کلینیک زیبایی کارن",
    mainskill: "متخصص مغز و اعصاب",
    rate: "4.5/5 از (نظر 320)",
    skills: 9,
    doctors: 10,
    isOnline: true,
    ishozori: true,
    loc: "تهران: فلکه دوم صادقیه پشت بیمارستان ابن سینا ساختمان پزشکان فدک طبقه اول",
  },
];
function AllMedicalCenters() {
  return (
    <div className=" w-full flex flex-col gap-10">
      {allCenters.map((item) => {
        return (
          <div
            key={item.id}
            className=" w-[810px] h-[308px] justify-center gap-5 px-5 rounded-xl flex flex-col bg-white"
          >
            <div className=" flex items-center">
              <Image src={karenLogo} alt="logo" width={154} />
              <div className=" w-full gap-6 pr-2 flex flex-col">
                <div className=" w-full  flex justify-between">
                  <h2 className=" text-xl">{item.name}</h2>
                  <div className=" text-sm flex items-center justify-center gap-1">
                    <Image src={star} alt="star" width={18} />
                    {item.rate}
                  </div>
                </div>
                <div className=" flex gap-5 text-base">
                  <h2>روش نوبت دهی : </h2>
                  {item.isOnline && (
                    <h2 className=" flex gap-2">
                      <Image width={24} src={monitor} alt="monitor-icon" />
                      ویزیت آنلاین
                    </h2>
                  )}
                  {item.ishozori && (
                    <h2 className=" flex gap-2">
                      <Image width={24} src={hospital} alt="monitor-icon" />
                      ویزیت حضوری
                    </h2>
                  )}
                </div>
                <h2 className=" flex items-center">
                  <IoLocationOutline className=" text-xl text-[#005DAD]" />
                  {item.loc}
                </h2>
                <div className=" flex gap-5">
                  <h2 className=" px-2 flex justify-center items-center gap-2 p-1 rounded-full bg-[rgba(69,199,255,0.23)]">
                    <Image src={favoriteChart} alt="icon" width={24} />
                    {item.skills}
                    تخصص
                  </h2>
                  <h2 className=" px-2 flex justify-center items-center gap-2 p-1 rounded-full bg-[#FBEDD7]">
                    <Image src={userTag} alt="icon" width={24} />
                    {item.doctors}
                    دکتر عضو
                  </h2>
                </div>
              </div>
            </div>
            <hr className=" mx-5" />
            <div className=" w-full justify-end  flex">
              <Link href="medicalCenters/1" className=" text-white flex rounded-xl justify-center items-center bg-[#005DAD] p-2">
                نوبت بگیرید
                <IoIosArrowRoundBack className=" text-2xl" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllMedicalCenters;
