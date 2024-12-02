import React from "react";
import heart from "../../../public/pics/Specialties/heart-icon.png";
import brain from "../../../public/pics/Specialties/brain-icon.png";
import dakheli from "../../../public/pics/Specialties/dakheli-icon.png";
import eye from "../../../public/pics/Specialties/eye-icon.png";
import zayman from "../../../public/pics/Specialties/zayman-icon.png";
import kollie from "../../../public/pics/Specialties/kollie-icon.png";
import dentist from "../../../public/pics/Specialties/dentist-icon.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

function SpecialtiesModal({ setIsSpecialtiesModal }) {
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
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
    {
      id: 15,
      name: "متخصص قلب و عروق",
      icon: dakheli,
    },
  ];
  const handleCloseModal = () => {
    setIsSpecialtiesModal(false);
  };
  return (
    <div
      onClick={handleCloseModal}
      className=" w-screen h-screen top-0 justify-center items-center flex z-50 right-0 fixed bg-[rgba(0,0,0,0.6)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" w-[60%] h-[550px] bg-white rounded-xl p-5 gap-5 flex flex-col"
      >
        <div className=" flex h-[96px] bg-white items-center border rounded-lg px-10 border-[#005DAD]">
          <CiSearch className=" text-[#C0C0C0] text-3xl" />
          <input
            placeholder="جستجو تخصص از بین 120 تخصص"
            className=" outline-none bg-white  text-xl  "
          />
        </div>
        <div className=" rounded-xl  flex flex-wrap gap-8 justify-center pt-3 items-center customScroll rounded-r-xl overflow-auto">
          {categorys.map((item) => {
            return (
              <div
                key={item.id}
                className="  group cursor-pointer  hover:shadow-lg w-[123px] h-[123px]  hover:-mt-3 transition-all shadow-red-600  hover:shadow-[#6991b4] lg:w-[123px] lg:h-[123px] flex flex-col justify-evenly items-center rounded-xl border border-[#DBD7D7]"
              >
                <div className=" bg-[#eaeaea] transition-all group-hover:bg-[#6eb6f6] rounded-full w-[55px] h-[55px] flex justify-center items-center ">
                  <Image alt="icon" width={42} src={item.icon} />
                </div>
                <h2 className=" text-[10px] font-semibold lg:font-medium lg:text-[12px]">
                  {item.name}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SpecialtiesModal;
