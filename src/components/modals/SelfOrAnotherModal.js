import React, { useState } from "react";
import ModalLogo from "../../../public/Pics/ModalLogo.png";

import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { myStore, reservationTypeStore } from "@/store/Store";
import Cookies from "js-cookie";
import LoginModal from "./LoginModal";
import { Eror } from "../ToastAlerts";
function SelfOrAnotherModal({ setModal }) {
  const { setReservationType } = reservationTypeStore();
  const [isLoginModal, setIsLoginModal] = useState(false);
  const router = useRouter();
  const token = Cookies.get("token");

  const handleReservationType = (type) => {
    if (token) {
      setReservationType(type);
      router.push("/reservStepsToPay");
    } else {
      setIsLoginModal(true);
      Eror("ابتدا لاگین کنید")
    }
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className=" z-20  w-screen h-screen top-0 justify-center items-center flex right-0 fixed bg-[rgba(0,0,0,0.6)]">
      <div className=" py-2 w-[450px] h-[224px] rounded-xl bg-white flex flex-col gap-3 ">
        {isLoginModal && <LoginModal setIsModal={setIsLoginModal} />}
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
