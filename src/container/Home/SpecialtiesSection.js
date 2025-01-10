import React from "react";
import heart from "../../../public/Pics/Specialties/heart-icon.png";
import brain from "../../../public/Pics/Specialties/brain-icon.png";
import dakheli from "../../../public/Pics/Specialties/dakheli-icon.png";
import eye from "../../../public/Pics/Specialties/eye-icon.png";
import zayman from "../../../public/Pics/Specialties/zayman-icon.png";
import kollie from "../../../public/Pics/Specialties/kollie-icon.png";
import dentist from "../../../public/Pics/Specialties/dentist-icon.png";
import SwipperSection from "../../components/SwipperSection";
import { SpecialtiesSectionButton } from "@/components/Buttons/Button";
function SpecialtiesSection() {
  const categorys = [
    {
      id: 1,
      name: "متخصص قلب و عروق",
      icon: heart,
    },
    {
      id: 2,
      name: "متخصص مغز و اعصاب",
      icon: brain,
    },
    {
      id: 3,
      name: "متخصص زنان و زایمان",
      icon: zayman,
    },
    {
      id: 4,
      name: "دندانپزشکی",
      icon: dentist,
    },
    {
      id: 5,
      name: "متخصص کلیه و مجاری",
      icon: kollie,
    },
    {
      id: 6,
      name: "بینایی سنجی",
      icon: eye,
    },
    {
      id: 8,
      name: "متخصص داخلی",
      icon: dakheli,
    },
    {
      id: 9,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 10,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 11,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 12,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 13,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 14,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
  ];
  return (
    <div className=" w-full flex-col items-center lg:gap-16 mt-5  lg:mt-24 justify-center flex">
      <div className=" w-full items-center justify-center px-4 flex">
        <h2 className=" flex gap-2  lg:text-[32px]">
          <span className=" text-[#005DAD]">تخصص</span>
          های دکتر رزرو
        </h2>
      </div>
      <div className=" pl-3 w-full flex lg:w-[80%] lg:-mr-28 items-center">
        <SwipperSection categorys={categorys} />
        <SpecialtiesSectionButton />
      </div>
    </div>
  );
}

export default SpecialtiesSection;
