import Image from "next/image";
import logo from "../../public/Pics/logo-doctor.png";
import { BurgerMenuButt, LoginButton } from "./Buttons/Button";
import { NavLinks } from "./Links/Links";

function Navbar() {
  return (
    <div className="vazir  w-full  px-5  flex justify-between items-center">
      <div className=" hidden lg:flex items-center xl:text-[18px] lg:text-sm font-medium gap-5 justify-center xl:gap-10 ">
        <Image className=" xl:w-[150px] lg:w-[100px]" alt="logo" width={150} src={logo} />
        <NavLinks title="خانه" href="/" />
        <NavLinks title="تخصص ها" href="/Specialties" />
        <NavLinks title="مراکز درمانی" href="/medical-centers" />
        <NavLinks title="دندان پزشکی" href="/dentistry" />
        <NavLinks title="روانپزشک" href="/psychiatry" />
        <NavLinks title="مجله درمانی" href="/healthMagezine" />
      </div>
      <div className=" lg:hidden rounded-lg p-[1px] border-2 border-[#005DAD]">
        <BurgerMenuButt/>
      </div>
      <div className=" flex items-center gap-4 justify-center">
        <LoginButton />
      </div>
    </div>
  );
}

export default Navbar;
