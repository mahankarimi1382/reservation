import React from "react";
import doctorprof from "../../../public/pics/abbas.png";
import star from "../../../public/pics/star.png";
import hospital from "../../../public/pics/hospital.png";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import Image from "next/image";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import tasviri from "../../../public/pics/tasviri.png";
import monitor from "../../../public/pics/monitor-mobbile.png";
import matni from "../../../public/pics/matniIcon.png";
import callenderIcon from "../../../public/pics/callenderIcon.png";
import telefoniIcon from "../../../public/pics/telefoniIcon.png";
function EmptyReservModal({setIsEmptyModal}) {
  
  const handleCloseModal = () => {
    setIsEmptyModal(false);
  };
  return (
    <div
      onClick={handleCloseModal}
      className=" w-screen h-screen top-0 justify-center items-center z-20 flex right-0 fixed bg-[rgba(0,0,0,0.6)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" w-[82%] flex justify-center items-center border-2 h-[95vh] bg-white rounded-3xl shadow-lg"
      >
        <div className="  w-[99%]  gap-10 py-10 justify-start flex h-[98%] rounded-3xl  customScroll flex-col  items-center overflow-auto  ">
          <div className=" w-[90%] rounded-2xl bg-white flex justify-between px-5 shadow-md min-h-[188px]">
            <div className=" w-2/3  flex items-center justify-start gap-5">
              <Image
                width={145}
                height={145}
                className=" w-[145px] h-[145px] border-2  border-[#005DAD] rounded-full"
                src={doctorprof}
                alt="doctor-prof"
              />
              <div className=" flex flex-col  gap-5">
                <h2 className=" text-[22px]">بهرام میزایی</h2>
                <h2 className=" text-[#757575]">زنان زایمان</h2>
                <h2 className=" text-red-600 flex justify-center gap-2 items-center">
                  <RiErrorWarningLine className=" text-xl" />
                  لطفا اولین نوبت خالی خود را باتوجه به نوع و مکان نوبت دهی
                  انتخاب کنید.
                </h2>
              </div>
            </div>
            <div className=" flex flex-col items-start justify-center gap-5 ">
              <h2 className=" text-[12px] rounded p-1 flex items-center justify-center gap-1 bg-[#F0F0F0] text-[#1F7168]">
                <AiFillLike className=" text-lg" />
                پیشنهاد میکنم
              </h2>
              <h2 className=" flex items-center justify-center gap-1">
                <Image src={star} alt="star" width={18} />
                5
              </h2>
            </div>
          </div>
          <div className=" w-[90%] flex justify-between">
            <div className=" gap-2 flex justify-normal items-center ">
              <Image width={32} alt="icon" src={hospital} />
              <h2 className=" text-xl">اولین نوبت خالی حضوری</h2>
            </div>
            <button className=" text-[#005DAD] flex justify-center items-center">
              مشاهده همه
              <IoIosArrowDown />
            </button>
          </div>
          <div className=" w-[90%] justify-between flex">
            <div className=" w-[508px] flex flex-col justify-center items-start px-5 gap-5 border h-[200px] rounded-2xl bg-white shadow-md ">
              <h2 className=" text-[#005DAD]">مطب ونک</h2>
              <h2 className=" flex justify-center items-center">
                <Image width={24} src={callenderIcon} alt="callender-icon" />
                اولین نوبت خالی مطب ونک: 3 شهریور1403 ساعت 10:30
              </h2>
              <h2 className=" flex text-[#757575] justify-center items-center">
                <IoLocationOutline className="text-[#757575] text-2xl" />
                آدرس مطب ونک:گاندی شمالی برادران شریفی پلاک 55 واحد 11
              </h2>
              <div className=" w-full flex justify-center items-center">
                <button className=" text-[#005DAD] border-[#005DAD] border rounded-xl p-2">
                  رزرو اولین نوبت خالی
                </button>
              </div>
            </div>
            <div className=" w-[508px] flex flex-col justify-center items-start px-5 gap-5 border h-[200px] rounded-2xl bg-white shadow-md ">
              <h2 className=" text-[#005DAD]">مطب ونک</h2>
              <h2 className="  flex justify-center items-center">
                <Image width={24} src={callenderIcon} alt="callender-icon" />
                اولین نوبت خالی مطب ونک: 3 شهریور1403 ساعت 10:30
              </h2>
              <h2 className=" flex text-[#757575] justify-center items-center">
                <IoLocationOutline className="text-[#757575] text-2xl" />
                آدرس مطب ونک:گاندی شمالی برادران شریفی پلاک 55 واحد 11
              </h2>
              <div className=" w-full flex justify-center items-center">
                <button className=" text-[#005DAD] border-[#005DAD] border rounded-xl p-2">
                  رزرو اولین نوبت خالی
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[90%] flex justify-between">
            <div className=" gap-2 flex justify-normal items-center ">
              <Image width={32} alt="icon" src={monitor} />
              <h2 className=" text-xl">اولین نوبت خالی آنلاین</h2>
            </div>
            <button className=" text-[#005DAD] flex justify-center items-center">
              مشاهده همه
              <IoIosArrowDown />
            </button>
          </div>
          <div className=" w-[90%] flex items-center justify-between">
            <div className=" flex px-4 flex-col justify-center items-center gap-5 w-[300px] h-[270px] bg-white rounded-xl shadow-md border">
              <Image width={90} src={tasviri} alt="icon" />
              <h2 className="  flex justify-center items-center">
                <Image width={24} src={callenderIcon} alt="callender-icon" />
                اولین نوبت خالی ویزیت آنلاین تصویری: 3 شهریور1403 ساعت 10:30{" "}
              </h2>
              <button className=" text-[#005DAD] border-[#005DAD] border rounded-xl p-2">
                رزرو اولین نوبت خالی
              </button>
            </div>
            <div className=" flex px-4 flex-col justify-center items-center gap-5 w-[300px] h-[270px] bg-white rounded-xl shadow-md border">
              <Image width={90} src={matni} alt="icon" />
              <h2 className="  flex justify-center items-center">
                <Image width={24} src={callenderIcon} alt="callender-icon" />
                اولین نوبت خالی ویزیت آنلاین متنی: 3 شهریور1403 ساعت 10:30{" "}
              </h2>
              <button className=" text-[#005DAD] border-[#005DAD] border rounded-xl p-2">
                رزرو اولین نوبت خالی
              </button>
            </div>
            <div className=" flex px-4 flex-col justify-center items-center gap-5 w-[300px] h-[270px] bg-white rounded-xl shadow-md border">
              <Image width={90} src={telefoniIcon} alt="icon" />
              <h2 className="  flex justify-center items-center">
                <Image width={24} src={callenderIcon} alt="callender-icon" />
                اولین نوبت خالی ویزیت آنلاین متنی: 3 شهریور1403 ساعت 10:30{" "}
              </h2>
              <button className=" text-[#005DAD] border-[#005DAD] border rounded-xl p-2">
                رزرو اولین نوبت خالی
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyReservModal;
