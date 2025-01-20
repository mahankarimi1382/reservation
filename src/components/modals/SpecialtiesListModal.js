import React, { useEffect, useState } from "react";
import heart from "../../../public/Pics/Specialties/heart-icon.png";
import brain from "../../../public/Pics/Specialties/brain-icon.png";
import dakheli from "../../../public/Pics/Specialties/dakheli-icon.png";
import eye from "../../../public/Pics/Specialties/eye-icon.png";
import zayman from "../../../public/Pics/Specialties/zayman-icon.png";
import kollie from "../../../public/Pics/Specialties/kollie-icon.png";
import dentist from "../../../public/Pics/Specialties/dentist-icon.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { get_specialties } from "@/api/ApiCalling";
import { RxCross2 } from "react-icons/rx";

function SpecialtiesListModal({ setIsSpecialtiesModal }) {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const url = "Specialist/read-specialists";

    const fetchData = async () => {
      const data = await get_specialties(url);
      if (data) {
        setCategorys(data);
      }
    };
    fetchData();
  }, []);

  const handleCloseModal = () => {
    setIsSpecialtiesModal(false);
  };
  return (
    <div className=" w-screen h-screen top-0 justify-center items-center flex z-50 right-0 fixed bg-[rgba(0,0,0,0.6)]">
      <div className=" relative w-[60%] h-[550px] bg-white rounded-xl p-5 gap-5 flex flex-col">
        <RxCross2
          className=" absolute top-1 left-1 cursor-pointer"
          onClick={handleCloseModal}
        />
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
                  <Image alt="icon" width={42} src={heart} />
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

export default SpecialtiesListModal;
