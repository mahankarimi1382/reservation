import Image from "next/image";
import React, { useState } from "react";
import calenderIcon from "../../../../public/Pics/calendar.png";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { useRouter } from "next/navigation";
import ReservDateAndTimeModal from "@/components/modals/ReservDateAndTimeModal";
import EmptyReservDoctorModal from "@/components/modals/EmptyReservModal";

function VisitHozoriCard({ item }) {
  console.log(item);
  const [isEmtyModal, setIsEmptyModal] = useState(false);
  const [isReservModal, setIsReservModal] = useState(false);
  const [IscardAnimate, setIscardAnimate] = useState(false);
  const [treatmentId, setTreatmentId] = useState("");
  const handleOpenModal = () => {
    setTreatmentId(item.clinicId);
    setIsReservModal(true);
  };
  setTimeout(() => {
    setIscardAnimate(true);
  }, 250);
  const router = useRouter();
  return (
    <div
      className={`w-[90%] h-[45%] ${
        IscardAnimate ? "opacity-100" : "opacity-0"
      } duration-1000 transition-opacity px-5 gap-2 p-5 flex flex-col bg-white shadow-xl rounded-xl`}
    >
      {isEmtyModal && (
        <EmptyReservDoctorModal setIsEmptyModal={setIsEmptyModal} />
      )}
      {isReservModal && (
        <ReservDateAndTimeModal
          treatmentId={treatmentId}
          name={item.clinicName}
          setIsReservModal={setIsReservModal}
        />
      )}
      <div className=" w-full  justify-between flex">
        <h2 className=" text-xl font-semibold">بیمارستان {item.clinicName}</h2>
        <h5 className=" text-[#005DAD]">250,000 تومن</h5>
      </div>
      <h2 className=" flex text-[16px] items-center gap-2  text-[#757575]">
        <Image width={24} src={calenderIcon} alt="calender-icon" />
        اولین نوبت خالی ، دوشنبه 3 آذر (14:30)
      </h2>
      <h2 className=" flex text-[16px]  items-center gap-2 text-[#757575]">
        <IoLocationOutline className=" text-2xl" />
        تهران-میدان شهدا-خیابان فلان
      </h2>
      <h2 className=" flex text-[16px] items-center gap-2 text-[#757575]">
        <FiPhone className=" text-2xl" />
        77188185
      </h2>
      <hr className=" font-bold border-[#757575]" />
      <div className=" w-full justify-between flex items-center">
        <button
          onClick={() => setIsEmptyModal(true)}
          className=" p-1 px-4 border border-[#005DAD] rounded-sm"
        >
          رزر اولین نوبت خالی
        </button>
        <button
          onClick={handleOpenModal}
          className="bg-[#005DAD] p-1 px-4 rounded-sm text-white"
        >
          نوبت بگیرید
        </button>
      </div>
    </div>
  );
}

export default VisitHozoriCard;
