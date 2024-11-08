import Navbar from "@/components/Navbar";
import React from "react";
import koodakan from "../../../public/Pics/Specialties-page-icons/adoption.png";
import brain from "../../../public/Pics/Specialties-page-icons/brain (8).png";
import dakheli from "../../../public/Pics/Specialties-page-icons/colon (1) 1.png";
import poost from "../../../public/Pics/Specialties-page-icons/dermis (2).png";
import eye from "../../../public/Pics/Specialties-page-icons/eye-drop.png";
import heart from "../../../public/Pics/Specialties-page-icons/heart (7).png";
import omoomi from "../../../public/Pics/Specialties-page-icons/lungs (2).png";
import mental_health from "../../../public/Pics/Specialties-page-icons/mental-health.png";
import parents from "../../../public/Pics/Specialties-page-icons/parents.png";
import zayman from "../../../public/Pics/Specialties-page-icons/pelvic-area (1).png";
import ortopedy from "../../../public/Pics/Specialties-page-icons/pelvis (3).png";
import goosh from "../../../public/Pics/Specialties-page-icons/pharynx (1).png";
import bihooshi from "../../../public/Pics/Specialties-page-icons/syringe 1.png";
import tooth from "../../../public/Pics/Specialties-page-icons/tooth (4).png";
import radiology from "../../../public/Pics/Specialties-page-icons/x-ray (1).png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";
const specialties = [
  { id: 1, title: "پزشکی داخلی", icon: dakheli },
  { id: 2, title: "جراحی عمومی", icon: omoomi },
  { id: 3, title: "قلب و عروق", icon: heart },
  { id: 4, title: "اعصاب", icon: brain },
  { id: 5, title: "ارتوپدی", icon: ortopedy },
  { id: 6, title: "گوش ، حلق و بینی", icon: goosh },
  { id: 7, title: "پوست و مو", icon: poost },
  { id: 8, title: "چشم پزشکی", icon: eye },
  { id: 9, title: "زنان و زایمان", icon: zayman },
  { id: 10, title: "کودکان", icon: koodakan },
  { id: 11, title: "روانپرشکی", icon: mental_health },
  { id: 12, title: "رادیولوژی", icon: radiology },
  { id: 13, title: "پزشکی خانواده", icon: parents },
  { id: 14, title: "بیهوشی", icon: bihooshi },
  { id: 15, title: "دندانپزشکی", icon: tooth },
];
function page() {
  return (
    <div
      dir="rtl"
      className="bg-[#f5f5f5] w-full flex flex-col min-h-screen justify-center gap-20 items-center"
    >
      <Navbar />
      <div className=" flex w-[90%] justify-between">
        <div className=" w-[436px] rounded-xl bg-white p-5 gap-2 flex flex-col justify-center items-center">
          {specialties.map((item) => {
            return (
              <div
                key={item.id}
                className=" w-full flex justify-between items-center border rounded-xl"
              >
                <div className=" flex justify-center items-center gap-3 px-5 p-3">
                  <Image src={item.icon} alt="icon" width={32} />
                  <h5>{item.title}</h5>
                </div>
                <IoIosArrowBack className=" text-2xl text-[#005DAD]" />
              </div>
            );
          })}
        </div>
        <div className=" w-[792px] h-[529px] rounded-xl bg-[rgba(219,237,255,0.35)] flex flex-col items-center">
          <h2 className=" text-3xl">لطفا تخصص خود را انتخاب کنید</h2>
          <div className=" flex items-center justify-center max-w-full ">
            <IoIosArrowForward />
            <div className=" flex justify-center max-w-[80%] items-center overflow-auto ">
              {specialties.map((item) => {
                return (
                  <div
                    className=" min-w-[93px] mx-20 flex flex-col justify-center items-center"
                    key={item.id}
                  >
                    <Image src={item.icon} alt="icon" width={74} />
                    <h5>{item.title}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
