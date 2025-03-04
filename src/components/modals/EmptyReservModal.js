import React, { useEffect, useState } from "react";
import doctorprof from "../../../public/Pics/abbas.png";
import star from "../../../public/Pics/star.png";
import hospital from "../../../public/Pics/hospital.png";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import Image from "next/image";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import tasviri from "../../../public/Pics/tasviri.png";
import monitor from "../../../public/Pics/monitor-mobbile.png";
import matni from "../../../public/Pics/matniIcon.png";
import callenderIcon from "../../../public/Pics/callenderIcon.png";
import telefoniIcon from "../../../public/Pics/telefoniIcon.png";
import doctorIcon from "../../../public/Pics/doctor-icon.jpg";

import { RxCross2 } from "react-icons/rx";
import { get_4first_doctor_turns } from "@/api/ApiCalling";
import { doctorProfileStore, reservationStore } from "@/store/Store";
import { useRouter } from "next/navigation";
import SelfOrAnotherModal from "./SelfOrAnotherModal";
import LoadingComponent from "../LoadingComponent";
function EmptyReservModal({ setIsModalOpen, selectedDoctor }) {
  const { setAdress, setTurnId, setDateAndTime } = reservationStore();
  const { setDoctorId, setDoctorName } = doctorProfileStore();
  console.log(selectedDoctor);
  const [isSelfOrAnother, setIsSelfOrAnother] = useState(false);
  const [firstTurnsHozoori, setFirstTurnsHozoori] = useState([]);
  console.log(firstTurnsHozoori);
  const [isLoading, setIsLoading] = useState(true);
  const get4FirtsTurns = async () => {
    const result = await get_4first_doctor_turns();
    if (result) {
      console.log(result);
      setFirstTurnsHozoori(
        result.filter((item) => item.reservationType == "حضوری")
      );
      setIsLoading(false);
    }
  };
  useEffect(() => {
    get4FirtsTurns();
  }, []);
  console.log(selectedDoctor);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const router = useRouter();
  return (
    <div className=" w-screen h-screen top-0 justify-center items-center z-20 flex right-0 fixed bg-[rgba(0,0,0,0.6)]">
      {isLoading && <LoadingComponent />}
      {isSelfOrAnother && <SelfOrAnotherModal setModal={setIsSelfOrAnother} />}

      <div className=" w-[82%] relative flex justify-center items-center border-2 h-[95vh] bg-white rounded-3xl shadow-lg">
        <RxCross2
          onClick={handleCloseModal}
          className=" cursor-pointer absolute top-4 left-6"
        />
        <div className="  w-[99%]  gap-10 py-10 justify-start flex h-[98%] rounded-3xl  customScroll flex-col  items-center overflow-auto  ">
          <div className=" w-[90%] rounded-2xl bg-white flex justify-between px-5 shadow-md min-h-[188px]">
            <div className=" w-2/3  flex items-center justify-start gap-5">
              <div className=" relative justify-center items-center flex">
                <Image
                  width={145}
                  height={145}
                  className=" w-[145px] h-[145px] border-2  border-[#005DAD] rounded-full"
                  src={doctorIcon}
                  alt="doctor-prof"
                />{" "}
              </div>

              <div className=" flex flex-col  gap-5">
                <h2 className=" text-[22px]">
                  {selectedDoctor.doctorName} {selectedDoctor.doctorFamily}
                </h2>
                <h2 className=" text-[#757575]">{selectedDoctor.specialist}</h2>
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
                97% پیشنهاد کابران دکتر رزرو{" "}
              </h2>
              <h2 className=" flex items-center justify-center gap-1">
                <Image src={star} alt="star" width={18} />
                4.5/5 از (نظر 320)
              </h2>
            </div>
          </div>
          <div className=" w-[90%] flex justify-between">
            <div className=" gap-2 flex justify-normal items-center ">
              <Image width={32} alt="icon" src={hospital} />
              <h2 className=" text-xl">اولین نوبت خالی حضوری</h2>
            </div>
            <button
              onClick={() => {
                setDoctorName(
                  selectedDoctor.doctorName + " " + selectedDoctor.doctorFamily
                );
                setDoctorId(selectedDoctor.id);
                router.push("/doctors/doctor-profile");
              }}
              className=" text-[#005DAD] flex justify-center items-center"
            >
              مشاهده همه
              <IoIosArrowDown />
            </button>
          </div>
          <div className=" w-[90%] justify-between flex">
            {firstTurnsHozoori.map((item) => {
              return (
                <div
                  key={item.turnId}
                  className=" w-[508px] flex flex-col justify-center items-start px-5 gap-5 border h-[200px] rounded-2xl bg-white shadow-md "
                >
                  <h2 className=" text-[#005DAD]">
                    {item.treatmentCenterName}
                  </h2>
                  <h2 className=" flex justify-center items-center">
                    <Image
                      width={24}
                      src={callenderIcon}
                      alt="callender-icon"
                    />
                    اولین نوبت خالی مطب ونک:{item.reservationDateFull} ساعت
                    {item.reservationTime}
                  </h2>
                  <h2 className=" flex text-[#757575] justify-center items-center">
                    <IoLocationOutline className="text-[#757575] text-2xl" />
                    آدرس {item.treatmentCenterName}:
                    {item.treatmentCenterAddress}
                  </h2>
                  <div className=" w-full flex justify-center items-center">
                    <button
                      onClick={() => {
                        setDateAndTime(item.reservationDateFull);
                        setTurnId(item.turnId);
                        setAdress(item.treatmentCenterAddress);
                        setIsSelfOrAnother(true);
                      }}
                      className=" text-[#005DAD] border-[#005DAD] border rounded-xl p-2"
                    >
                      رزرو اولین نوبت خالی
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" w-[90%] flex justify-between">
            <div className=" gap-2 flex justify-normal items-center ">
              <Image width={32} alt="icon" src={monitor} />
              <h2 className=" text-xl">اولین نوبت خالی آنلاین</h2>
            </div>
            <button
              onClick={() => {
                setDoctorName(
                  selectedDoctor.doctorName + " " + selectedDoctor.doctorFamily
                );
                setDoctorId(selectedDoctor.id);
                router.push("/doctors/doctor-profile");
              }}
              className=" text-[#005DAD] flex justify-center items-center"
            >
              مشاهده همه
              <IoIosArrowDown />
            </button>
          </div>
          {/* <div className=" w-[90%] flex items-center justify-between">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default EmptyReservModal;
