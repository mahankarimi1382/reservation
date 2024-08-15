import Image from "next/image";
import logo from "../../../public/assets/logo-doctor.png";
import { CiLogin } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="vazir w-full mt-5 lg:mt-0  lg:px-20 px-5 h-36 flex justify-between items-center">
      <div className=" hidden lg:flex items-start text-[18px] font-medium  justify-center gap-8 ">
        <Image className=" -mt-7" alt="logo" width={150} src={logo} />
        <div className=" flex flex-col justify-center items-center">
          <button className=" text-[#004D8F]">خانه</button>
          <hr className=" w-4 rounded-2xl text-2xl h-1 bg-[#004D8F]" />
        </div>

        <button className=" hover:text-[#004D8F] transition-all">
          نوبت دهی
        </button>
        <button className=" hover:text-[#004D8F] transition-all">
          مشاوره تلفنی
        </button>
        <button className=" hover:text-[#004D8F] transition-all">
          تخصص ها
        </button>
        <button className=" hover:text-[#004D8F] transition-all">
          مراکز درمانی
        </button>
        <button className=" hover:text-[#004D8F] transition-all">
          مجله درمانی
        </button>
      </div>
      <div className=" lg:hidden rounded-lg p-[1px] border-2 border-[#005DAD]">
        <IoMenuOutline className=" text-[#005DAD] text-2xl" />
      </div>
      <button className=" lg:-mt-12 bg-white shadow-xl text-[12px] lg:text-[16px] lg:p-2 p-1 px-2 lg:px-4 flex justify-center items-center gap-1 text-[#004D8F] rounded-lg border border-[#004D8F]">
        <CiLogin className=" hidden lg:flex text-2xl" />
        ثبت نام | ورود
      </button>
    </div>
  );
}

export default Navbar;
