import React, { useState } from "react";
import ModalLogo from "../../../public/pics/ModalLogo.png";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { baseUrl } from "@/api/BaseUrl";
import axios from "axios";
import ValidateModal from "./ValidateModal";
import { Eror, success } from "../ToastAlerts";
import { SyncLoader } from "react-spinners";

function SignupModal({ closeModal, setIsValidateModal, isValidateModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const [nationalCode, setNationalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const fetchData = () => { 
    setIsLoading(true)
    axios
      .post(`${baseUrl}Authentication/sign-up`, {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: nationalCode,
        },
        userName: nationalCode,
        password,
        phoneNumber,
        fullname,
      })
      .then((res) => {
        console.log(res);
        success(`کد تایید به شماره ی ${phoneNumber} پیامک شد`);
        setIsValidateModal(true);
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err.response);
        if (
          err.response.data.message.message ===
          "نام کاربری یا شماره تلفن صحیح نمیباشد ."
        ) {
          Eror(err.response.data.message.message);
        } else if (
          err.response.data.message.message ==
          `نام کاربری ${nationalCode} قبلا توسط شخص دیگری انتخاب شده است`
        ) {
          Eror(err.response.data.message.message);
        } else if (err.response.data.code == 500) {
          Eror("گذرواژه باید شامل حروف بزرگ و عدد باشد");
        }
      });
  };

  return (
    <div
      onClick={closeModal}
      className=" z-50 fixed top-0 right-0 w-screen h-screen flex justify-center items-center"
    >
      {isValidateModal ? (
        <ValidateModal
          setIsValidateModal={setIsValidateModal}
          phoneNumber={phoneNumber}
          nationalCode={nationalCode}
          closeModal={closeModal}
        />
      ) : (
        <div
          onClick={(e) => e.stopPropagation()}
          className=" py-2 w-[394px] gap-5     bg-white flex flex-col justify-between rounded"
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
          <h2 className=" flex text-lg justify-center items-center w-full">
            ثبت نام
          </h2>

          <div className=" relative w-full justify-center flex items-center">
            <h2 className=" absolute bg-white mb-12 px-2 right-10 ">کد ملی</h2>
            <input
              value={nationalCode}
              onChange={(e) => setNationalCode(e.target.value)}
              dir="ltr"
              className=" px-3 border-2 border-black rounded h-[48px] w-11/12"
            />
          </div>
          <div className=" relative w-full justify-center flex items-center">
            <h2 className=" absolute bg-white mb-12 px-2 right-10">گذرواژه</h2>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              dir="ltr"
              className=" px-3 border-2 border-black rounded h-[48px] w-11/12"
            />
          </div>
          <div className=" relative w-full justify-center flex items-center">
            <h2 className=" absolute bg-white mb-12 px-2 right-10">
              شماره همراه
            </h2>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              dir="ltr"
              className=" px-3 border-2 border-black rounded h-[48px] w-11/12"
            />
          </div>
          <div className=" relative w-full justify-center flex items-center">
            <h2 className=" absolute bg-white mb-12 px-2 right-10">
              نام و نام خانوادگی
            </h2>
            <input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              dir="ltr"
              className=" px-3 border-2 border-black rounded h-[48px] w-11/12"
            />
          </div>
          <div className=" flex w-full justify-center items-center">
            <button
              onClick={fetchData}
              disabled={!nationalCode && !phoneNumber && !password && !fullname}
              className={
                nationalCode && phoneNumber && password && fullname
                  ? " text-xl w-11/12 h-[48px] bg-[#005DAD] rounded text-white"
                  : " text-xl w-11/12 h-[48px] bg-[#EDEDED] rounded text-[#CBCBCB]"
              }
            >
              {isLoading ? <SyncLoader color="white" size={10} /> : "ادامه"}
            </button>
          </div>
          <h2 className=" w-full flex justify-center items-center text-[12px] gap-1">
            ورود و عضویت در دکتر رزرو به منزله قبول
            <span className=" cursor-pointer text-[#005DAD]">
              قوانین و مقررات
            </span>
            است.
          </h2>
        </div>
      )}
    </div>
  );
}

export default SignupModal;
