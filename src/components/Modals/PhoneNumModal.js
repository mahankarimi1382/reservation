import React, { useRef } from "react";
import ModalLogo from "../../../public/assets/ModalLogo.png";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { Eror } from "../helpers/ToastAlerts";
function PhoneNumModal({ closeModal, setModal2, phoneNum, setPhoneNum }) {
  const buttRef = useRef();
  const handleinputChange = (num) => {
    setPhoneNum(num);
    if (num.length === 11) {
      buttRef.current.focus();
    }
  };
  const submitPhoneNum = () => {
    if (phoneNum.length !== 11) {
      Eror("شماره تلفن باید 11 رقم باشد");
    } else if (phoneNum[0] !== "0") {
      Eror("شماره تلفن باید با 0 شروع شود");
    } else {
      setModal2(true);
    }
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className=" py-2 w-[394px] h-[302px] bg-white flex flex-col justify-between rounded"
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
        ورود / ثبت نام
      </h2>
      <p className=" w-full flex justify-center items-center text-[14px] text-[#717171]">
        با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
      </p>
      <div className=" w-full justify-center flex items-center">
        <h2 className=" absolute bg-white mb-12 px-2 ml-60">شماره همراه</h2>
        <input
          placeholder="برای مثال 09121315584"
          value={phoneNum}
          onChange={(e) => handleinputChange(e.target.value)}
          dir="ltr"
          className=" px-3 border-2 border-black rounded h-[48px] w-11/12"
        />
      </div>
      <div className=" flex w-full justify-center items-center">
        <button
          ref={buttRef}
          onClick={submitPhoneNum}
          disabled={!phoneNum}
          className={
            phoneNum
              ? " text-xl w-11/12 h-[48px] bg-[#005DAD] rounded text-white"
              : " text-xl w-11/12 h-[48px] bg-[#EDEDED] rounded text-[#CBCBCB]"
          }
        >
          ادامه
        </button>
      </div>
      <h2 className=" w-full flex justify-center items-center text-[12px] gap-1">
        ورود و عضویت در دکتر رزرو به منزله قبول
        <span className=" cursor-pointer text-[#005DAD]">قوانین و مقررات</span>
        است.
      </h2>
    </div>
  );
}

export default PhoneNumModal;
