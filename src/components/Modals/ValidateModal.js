import React, { useRef, useState } from "react";
import ModalLogo from "../../../public/assets/ModalLogo.png";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import Timer from "../helpers/Timer";
import { Eror, success } from "../helpers/ToastAlerts";

function ValidateModal({ closeModal, phoneNum, setModal2 }) {
  const changeNumber = () => {
    setModal2(false);
  };
  const [isWrongCode, setIsWrongCode] = useState(false);
  const [isSendAgain, setIsSendAgain] = useState(false);
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const input5Ref = useRef();

  const focusOnInput = (e, inputRef) => {
    if (e.target.value.length === 1) {
      inputRef.current.focus();
    }
  };
  const sendAgain = () => {
    setIsSendAgain(true);
    success(`کد تایید مجددا به شماره 
      ${phoneNum}
      ارسال شد`);
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className=" py-4 w-[394px] h-[326px] bg-white flex flex-col justify-between rounded"
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

      <h2 className=" flex justify-center items-center  w-full">کد تایید</h2>
      <p className=" text-[14px] w-full flex justify-center items-center text-[#717171]">
        کد تایید پنج‌رقمی به شماره
        {phoneNum}
        ارسال شد.
        <button onClick={changeNumber} className=" text-sm text-[#005DAD]">
          ویرایش شماره
        </button>
      </p>
      <div className=" w-full gap-4 justify-center flex flex-row-reverse items-center">
        <input
          onChange={(e) => {
            focusOnInput(e, input2Ref);
          }}
          className={
            isWrongCode
              ? " text-center rounded border border-[#f53f3f]  w-[56px] h-[40px]"
              : " text-center rounded border border-[#717171] w-[56px] h-[40px]"
          }
        />
        <input
          ref={input2Ref}
          onChange={(e) => {
            focusOnInput(e, input3Ref);
          }}
          className={
            isWrongCode
              ? " text-center rounded border border-[#f53f3f] w-[56px] h-[40px]"
              : " text-center rounded border border-[#717171] w-[56px] h-[40px]"
          }
        />
        <input
          ref={input3Ref}
          onChange={(e) => {
            focusOnInput(e, input4Ref);
          }}
          className={
            isWrongCode
              ? " text-center rounded border border-[#f53f3f] w-[56px] h-[40px]"
              : " text-center rounded border border-[#717171] w-[56px] h-[40px]"
          }
        />
        <input
          ref={input4Ref}
          onChange={(e) => {
            focusOnInput(e, input5Ref);
          }}
          className={
            isWrongCode
              ? " text-center rounded border border-[#f53f3f] w-[56px] h-[40px]"
              : " text-center rounded border border-[#717171] w-[56px] h-[40px]"
          }
        />
        <input
          ref={input5Ref}
          onChange={(e) => {
            Eror("کد وارد شده صحیح نمی باشد");
            setIsWrongCode(true);
          }}
          className={
            isWrongCode
              ? " text-center rounded border border-[#f53f3f] w-[56px] h-[40px]"
              : " text-center rounded border border-[#717171] w-[56px] h-[40px]"
          }
        />
      </div>
      <div className=" flex w-full justify-center items-center">
        {isSendAgain ? (
          <button className=" text-[#005DAD] flex justify-center items-center gap-2 w-10/12 h-[45px] border-2 border-[#005DAD] rounded-lg">
            <Timer time={2} />
            تا ارسال مجدد کد
          </button>
        ) : (
          <button
            onClick={sendAgain}
            className=" w-10/12 h-[45px] bg-[#005DAD] rounded-lg text-white"
          >
            ارسال مجدد کد
          </button>
        )}
      </div>
    </div>
  );
}

export default ValidateModal;
