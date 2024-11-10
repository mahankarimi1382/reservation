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

import Image from "next/image";
import SpecialtiesSwipper from "@/container/Specialties/SpecialtiesSwipper";
import SpecialtiesMenu from "@/container/Specialties/SpecialtiesMenu";
const specialties = [
  { id: 1, title: "پزشکی داخلی", icon: dakheli, isselected: false },
  { id: 2, title: "جراحی عمومی", icon: omoomi, isselected: false },
  { id: 3, title: "قلب و عروق", icon: heart, isselected: false },
  { id: 4, title: "اعصاب", icon: brain, isselected: false },
  { id: 5, title: "ارتوپدی", icon: ortopedy, isselected: false },
  { id: 6, title: "گوش ، حلق و بینی", icon: goosh, isselected: false },
  { id: 7, title: "پوست و مو", icon: poost, isselected: false },
  { id: 8, title: "چشم پزشکی", icon: eye, isselected: false },
  { id: 9, title: "زنان و زایمان", icon: zayman, isselected: false },
  { id: 10, title: "کودکان", icon: koodakan, isselected: false },
  { id: 11, title: "روانپرشکی", icon: mental_health, isselected: false },
  { id: 12, title: "رادیولوژی", icon: radiology, isselected: false },
  { id: 13, title: "پزشکی خانواده", icon: parents, isselected: false },
  { id: 14, title: "بیهوشی", icon: bihooshi, isselected: false },
  { id: 15, title: "دندانپزشکی", icon: tooth, isselected: false },
];
 function  page() {

  return (
    <div
      dir="rtl"
      className="bg-[#f5f5f5] w-full flex flex-col min-h-screen justify-center gap-20 items-center"
    >
      <Navbar />
      <div className=" flex w-[90%] justify-between">
        <SpecialtiesMenu specialties={specialties} />
        <div className=" w-[792px] py-10 px-5 h-[529px] rounded-xl bg-[rgba(219,237,255,0.35)] flex flex-col items-center">
          <h2 className=" text-3xl">لطفا تخصص خود را انتخاب کنید</h2>
          <SpecialtiesSwipper Specialties={specialties} />
        </div>
      </div>
    </div>
  );
}

export default page;
