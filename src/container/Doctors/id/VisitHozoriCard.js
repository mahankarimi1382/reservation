import Image from "next/image";
import React, { useState } from "react";
import calenderIcon from "../../../../public/Pics/calendar.png";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { useRouter } from "next/navigation";
import ReservDateAndTimeModal from "@/components/modals/ReservDateAndTimeModal";
import EmptyReservDoctorModal from "@/components/modals/EmptyReservModal";
import { reservationStore } from "@/store/Store";

function VisitHozoriCard({ item, topic }) {
  console.log(item);
  const [isEmtyModal, setIsEmptyModal] = useState(false);
  const [isReservModal, setIsReservModal] = useState(false);
  const [IscardAnimate, setIscardAnimate] = useState(false);
  const [treatmentId, setTreatmentId] = useState("");
  const { setAdress } = reservationStore();
  const handleOpenModal = () => {
    console.log(item);
    setAdress(
      (item.clinic && item.clinic.address) ||
        (item.office && item.office.address)
    );
    setTreatmentId(item.clinicId || item.officeId);
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
      } duration-1000 transition-opacity px-2 lg:px-5 gap-2 p-2 lg:p-5 flex flex-col bg-white shadow-xl rounded-xl`}
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
        {item.clinicName ? (
          <h2 className=" lg:text-xl font-semibold">
            بیمارستان {item.clinicName}
          </h2>
        ) : (
          <h2 className=" lg:text-xl font-semibold">
            {topic == "ویزیت حضوری"
              ? `مطب ${item.officeName}`
              : item.officeName}
          </h2>
        )}

        <h5 className=" lg:text-base text-sm text-[#005DAD]">
          {item.price} تومان
        </h5>
      </div>
      <h2 className=" flex text-sm lg:text-[16px] items-center gap-1 lg:gap-2  text-[#757575]">
        <Image width={24} src={calenderIcon} alt="calender-icon" />
        اولین نوبت خالی ، {item.nearestDate}
      </h2>
      {topic == "ویزیت حضوری" && (
        <h2 className=" flex text-sm lg:text-[16px]  items-center gap-1 lg:gap-2 text-[#757575]">
          <IoLocationOutline className=" text-2xl" />
          {item.office ? item.office.address : item.clinic.address}
        </h2>
      )}
      {topic == "ویزیت حضوری" && (
        <h2 className=" flex text-sm lg:text-[16px] items-center gap-1 lg:gap-2 text-[#757575]">
          <FiPhone className=" text-2xl" />
          {item.clinic ? item.clinic.phone : item.office.phone}
        </h2>
      )}

      <hr className=" font-bold border-[#757575]" />
      <div className=" w-full justify-end flex items-center">
        {/* <button
          onClick={() => setIsEmptyModal(true)}
          className=" p-1 text-sm lg:text-base px-4 border border-[#005DAD] rounded-sm"
        >
          رزر اولین نوبت خالی
        </button> */}
        <button
          onClick={handleOpenModal}
          className="bg-[#005DAD] p-1 px-4 text-sm lg:text-base rounded-sm text-white"
        >
          نوبت بگیرید
        </button>
      </div>
    </div>
  );
}

export default VisitHozoriCard;
