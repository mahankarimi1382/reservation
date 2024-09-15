"use client";
import React, { useState } from "react";
import Image from "next/image";
import doctorprof from "../../../public/assets/abbas.png";
import star from "../../../public/assets/star.png";
import hospital from "../../../public/assets/hospital.png";
import monitor from "../../../public/assets/monitor-mobbile.png";
import { AiFillLike } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import barezvijegi from "../../../public/assets/barezvijegi.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import EmptyReservDoctorModal from "./EmptyReservDoctorModal";
import { useRouter } from "next/navigation";
const allDoctors = [
  {
    id: 1,
    name: "بهرام میرزایی",
    mainskill: "متخصص مغز و اعصاب",
    rate: "4.5/5 از (نظر 320)",
    recomend: "97% پیشنهاد کابران دکتر رزرو",
    skills: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
    isOnline: true,
    ishozori: true,
    loc: [
      { id: 1, loc: "مطب ونک" },
      { id: 2, loc: "بیمارستان کسری" },
    ],
    charecter: [
      { id: 1, caption: "صبور" },
      { id: 2, caption: "دلسوز" },
      { id: 3, caption: "خوش برخورد" },
    ],
  },
  {
    id: 2,
    name: "بهرام میرزایی",
    mainskill: "متخصص مغز و اعصاب",
    rate: "4.5/5 از (نظر 320)",
    recomend: "97% پیشنهاد کابران دکتر رزرو",
    skills: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
    isOnline: true,
    ishozori: true,
    loc: [
      { id: 1, loc: "مطب ونک" },
      { id: 2, loc: "بیمارستان کسری" },
    ],
    charecter: [
      { id: 1, caption: "صبور" },
      { id: 2, caption: "دلسوز" },
      { id: 3, caption: "خوش برخورد" },
    ],
  },
  {
    id: 3,
    name: "بهرام میرزایی",
    mainskill: "متخصص مغز و اعصاب",
    rate: "4.5/5 از (نظر 320)",
    recomend: "97% پیشنهاد کابران دکتر رزرو",
    skills: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
    isOnline: true,
    ishozori: true,
    loc: [
      { id: 1, loc: "مطب ونک" },
      { id: 2, loc: "بیمارستان کسری" },
    ],
    charecter: [
      { id: 1, caption: "صبور" },
      { id: 2, caption: "دلسوز" },
      { id: 3, caption: "خوش برخورد" },
    ],
  },
];
function AllDoctorsCard({ loc=true }) {
  const router = useRouter();
  const [isMatadShow, setIsMatadShow] = useState(false);
  const [unicId, setUnicId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState();
  const handleOpenModal = (item) => {
    setSelectedDoctor(item);
    setIsModalOpen(true);
  };
  const handleSeeMatab = (id) => {
    console.log(id);
    setUnicId(id);
    setIsMatadShow(!isMatadShow);
  };
  return (
    <div className=" w-full flex flex-col gap-10">
      {isModalOpen && (
        <EmptyReservDoctorModal
          setIsModalOpen={setIsModalOpen}
          selectedDoctor={selectedDoctor}
        />
      )}
      {allDoctors.map((item) => {
        return (
          <div
            key={item.id}
            className=" rounded-2xl px-10 gap-6 flex flex-col w-full bg-white pb-2 min-h-[400px]"
          >
            <div className="flex justify-between  border-[#CBCBCB] border-b py-7">
              <div className=" w-1/2  flex items-center justify-start gap-5">
                <Image
                  width={90}
                  height={90}
                  className=" w-[90px] h-[90px] border-2  border-[#005DAD] rounded-full"
                  src={doctorprof}
                  alt="doctor-prof"
                />
                <div className=" flex flex-col gap-5">
                  <h2 className=" text-[22px]">{item.name}</h2>
                  <h2 className=" text-[#757575]">{item.mainskill}</h2>
                </div>
              </div>
              <div className=" flex flex-col items-start justify-center gap-5 ">
                <h2 className=" text-[12px] rounded p-1 flex items-center justify-center gap-1 bg-[#F0F0F0] text-[#1F7168]">
                  <AiFillLike className=" text-lg" />
                  {item.recomend}
                </h2>
                <h2 className=" flex items-center justify-center gap-1">
                  <Image src={star} alt="star" width={18} />
                  {item.rate}
                </h2>
              </div>
            </div>
            <h2 className=" text-lg">
              خدمات :<span className=" text-[#7E7E7E]">{item.skills}</span>
            </h2>
            <div className=" flex gap-5 text-lg">
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
            {loc && (
              <div className=" flex gap-4">
                <h2 className=" text-[18px] flex items-center">نشانی :</h2>
                <button
                  onClick={() => handleSeeMatab(item.id)}
                  className={
                    isMatadShow && item.id === unicId
                      ? "gap-1 p-2 flex items-center border transition-colors text-[#005dad] bg-[rgba(176,218,255,0.2)] rounded-xl"
                      : "gap-1 p-2 flex items-center border transition-colors rounded-xl"
                  }
                >
                  مطب ونک
                  <IoIosArrowDown
                    className={` ${
                      isMatadShow && item.id === unicId
                        ? "rotate-180 text-[#005dad] "
                        : "text-[#757575]"
                    } transition-all    duration-300 text-xl `}
                  />
                </button>
                <button className=" gap-1 p-2 flex border items-center rounded-xl">
                  بیمارستان کسری
                  <IoIosArrowDown />
                </button>
              </div>
            )}

            <h2
              className={`${
                isMatadShow && item.id === unicId
                  ? " opacity-100"
                  : " opacity-0 -mt-10"
              } transition-all  text-[#005DAD]`}
            >
              نشانی مطب ونک: میدان ونک,خیابان صانعیو, ساختمان پزشکان,طبقه اول
            </h2>

            <div className=" flex gap-3 text-lg pb-5 border-b">
              <Image src={barezvijegi} alt="icon" width={24} />
              <h2> ویژگی های بارز پزشک :</h2>
              {item.charecter.map((item2) => {
                return (
                  <h2 className="text-[#1F7168]" key={item2.id}>
                    {item2.caption}
                  </h2>
                );
              })}
            </div>
            <div className=" -mt-3 flex justify-between">
              <button
                onClick={() => handleOpenModal(item)}
                className=" rounded-md p-2 px-4 border text-[#005DAD] border-[#005DAD] "
              >
                اولین نوبت آزاد
              </button>
              <button
                onClick={() => router.push(`Doctors/${item.id}`)}
                className=" flex justify-center p-2 px-4 rounded-md text-white items-center bg-[#005DAD] "
              >
                نوبت بگیرید
                <IoIosArrowRoundBack className=" text-2xl" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllDoctorsCard;
