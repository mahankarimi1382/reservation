import Image from "next/image";
import React from "react";
import logo from "../../public/Pics/logo-doctor.png";
import home from "../../public/Pics/BurgerMenuIcons/house 1.png";
import Special from "../../public/Pics/BurgerMenuIcons/equipment 1.png";
import medicalCenter from "../../public/Pics/BurgerMenuIcons/hospital (4) 1.png";
import dentistry from "../../public/Pics/BurgerMenuIcons/tooth (4) 1.png";
import psychiatry from "../../public/Pics/BurgerMenuIcons/research 1.png";
import healthMagezine from "../../public/Pics/BurgerMenuIcons/book (5) 1.png";
import medicalCentersLogin from "../../public/Pics/BurgerMenuIcons/ambulance 1.png";
import doctorLogin from "../../public/Pics/BurgerMenuIcons/doctor (4) 1.png";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

function BurgerMenu() {
  const links = [
    { id: 1, name: "خانه", link: "/", img: home },
    { id: 2, name: "تخصص", link: "/Specialties", img: Special },
    {
      id: 3,
      name: "مراکز درمانی",
      link: "/medicalCenters",
      img: medicalCenter,
    },
    { id: 4, name: "دندانپزشکی", link: "/dentistry", img: dentistry },
    { id: 5, name: "روانپزشک", link: "/psychiatry", img: psychiatry },
    {
      id: 6,
      name: "مجله درمانی",
      link: "/healthMagezine",
      img: healthMagezine,
    },
    {
      id: 7,
      name: "ورود مرکز درمانی",
      link: "/medicalCentersLogin",
      img: medicalCentersLogin,
    },
    { id: 8, name: "ورود پزشک", link: "/doctor-login", img: doctorLogin },
  ];
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="  flex flex-col  items-center p-5 h-full w-2/3 bg-white"
    >
      <Image src={logo} alt="logo" width={75} />
      {links.map((item) => {
        return (
          <div
            key={item.id}
            className=" py-4 last:border-none border-b w-full flex justify-between items-center"
          >
            <div className=" flex justify-center items-center gap-2">
              <Image src={item.img} alt="img" width={24} />
              <Link href={item.link}>{item.name}</Link>
            </div>
            <IoIosArrowBack />
          </div>
        );
      })}
    </div>
  );
}

export default BurgerMenu;
