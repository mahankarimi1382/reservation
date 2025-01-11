import React from "react";
import ModalLogo from "../../../public/Pics/ModalLogo.png";

import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { myStore } from "@/store/Store";
function SelfOrAnotherModal({ setModal }) {
  const { setReservationType } = myStore();
  const router = useRouter();
  const handleReservationType = (type) => {
    setReservationType(type);
    router.push("/reservStepsToPay");
  };
  const closeModal = () => {
    setModal(false);
    
  };
  return (
    <div
      onClick={closeModal}
      className=" z-20  w-screen h-screen top-0 justify-center items-center flex right-0 fixed bg-[rgba(0,0,0,0.6)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" py-2 w-[450px] h-[224px] rounded-xl bg-white flex flex-col gap-3 "
      >
        <div className=" w-full flex px-1 justify-end">
          <RxCross2
            onClick={closeModal}
            className=" text-[#717171] z-30 cursor-pointer text-2xl"
          />
        </div>
        <div className=" w-full flex justify-center items-center -mt-8">
          <Image src={ModalLogo} alt="Logo" width={67} />
        </div>
        <h2 className=" flex justify-center items-center w-full">
          لطفا انتخاب کنید
        </h2>
        <p className=" w-full flex justify-center items-center text-[14px] text-[#717171]">
          می خواهید برای چه کسی نوبت رزرو کنید؟{" "}
        </p>

        <div className=" flex w-full justify-center gap-5 items-center">
          <button
            onClick={() => handleReservationType("reservForMe")}
            className=" text-[#005DAD] border-[#005DAD] border text-lg p-2 rounded-lg"
          >
            {" "}
            نوبت برای خودم
          </button>
          <button
            onClick={() => handleReservationType("reservForAnother")}
            className=" text-[#005DAD] border-[#005DAD] border text-lg p-2 rounded-lg"
          >
            {" "}
            نوبت برای دیگری
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelfOrAnotherModal;
