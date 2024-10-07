import Image from "next/image";
import logo from "../../public/pics/logo-doctor.png";
import { IoMenuOutline } from "react-icons/io5";
import { LoginButton } from "./Buttons/Button";
import { NavLinks } from "./Links/Links";

function Navbar() {
  return (
    <div className="vazir  w-full mt-5 lg:mt-0  lg:px-20 px-5 h-36 flex justify-between items-center">
      <div className=" hidden lg:flex items-start text-[18px] font-medium  justify-center gap-10 ">
        <Image className=" -mt-7" alt="logo" width={150} src={logo} />
        <NavLinks title="خانه" href="/" />
        <NavLinks title="تخصص ها" href="/specialties" />
        <NavLinks title="مراکز درمانی" href="/medicalCenters" />
        <NavLinks title="دندان پزشکی" href="/dentistry" />
        <NavLinks title="روانپزشک" href="/psychiatry" />
        <NavLinks title="مجله درمانی" href="/healthMagezine" />
      </div>
      <div className=" lg:hidden rounded-lg p-[1px] border-2 border-[#005DAD]">
        <IoMenuOutline className=" text-[#005DAD] text-2xl" />
      </div>
      <div className=" flex items-center gap-4 justify-center">
        <LoginButton />
      </div>
    </div>
  );
}

export default Navbar;
