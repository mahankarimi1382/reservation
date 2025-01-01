import React, { useRef, useState } from "react";
import ModalLogo from "../../../public/pics/ModalLogo.png";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { Eror, success } from "../ToastAlerts";
import { baseUrl } from "@/api/BaseUrl";
import { useRouter } from "next/navigation";
import { SyncLoader } from "react-spinners";
import axios from "axios";
import { myStore, StorageStore } from "@/store/Store";
import Cookies from "js-cookie";
import { axiosConfig } from "@/api/axiosConfig";
function PhoneNumModal({ closeModal, setIsPhoneNuumModal, setIsSignupModal }) {
  const { setToken } = myStore();
  const { setFullName } = StorageStore();
  const [isLoading, setIsLoading] = useState(false);
  const [nationalCode, setNationalCode] = useState("");
  const [password, setPassword] = useState("");
  const fetchData = () => {
    setIsLoading(true);
    axiosConfig
      .put("Authentication/sign-in", {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: nationalCode,
        },
        userName: nationalCode,
        password,
        isPersistent: true,
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        console.log(res.data);
        let Name = res.data.result.userFullname;
        let token = res.data.result.token;
        setToken(token);
        setFullName(Name);
        success(`${Name} خوش آمدید`);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);

        Eror("نام کاربری یا کلمه عبور اشتباه است !");
      });

  };

  const buttRef = useRef();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className=" py-2 w-[394px] gap-5 bg-white flex flex-col justify-between rounded"
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
      <h2 className=" flex justify-center items-center w-full">ورود</h2>

      <div className=" w-full justify-center flex items-center">
        <h2 className=" absolute bg-white mb-12 px-2 ml-60">کد ملی</h2>
        <input
          value={nationalCode}
          onChange={(e) => setNationalCode(e.target.value)}
          className=" px-3 border-2 border-black rounded h-[48px] w-11/12"
        />
      </div>
      <div className=" w-full justify-center flex items-center">
        <h2 className=" absolute bg-white mb-12 px-2 ml-60">رمز عبور</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" px-3 border-2 border-black rounded h-[48px] w-11/12"
        />
      </div>
      <div className=" flex w-full justify-center items-center">
        <button
          ref={buttRef}
          onClick={fetchData}
          disabled={!nationalCode || !password}
          className=" text-xl w-11/12 h-[48px] rounded bg-[#005DAD] text-white disabled:bg-[#EDEDED] disabled:text-[#CBCBCB]"
        >
          {isLoading ? <SyncLoader color="white" size={10} /> : "ادامه"}
        </button>
      </div>
      <h2 className=" w-full flex justify-center items-center text-[12px] gap-1">
        ورود و عضویت در دکتر رزرو به منزله قبول
        <span className=" cursor-pointer text-[#005DAD]">قوانین و مقررات</span>
        است.
      </h2>
      <h5 className=" text-xs gap-1 flex w-full justify-center items-center">
        حساب کاربری ندارید؟
        <button
          onClick={() => {
            setIsPhoneNuumModal(false);
            setIsSignupModal(true);
          }}
          className="text-[#005DAD]"
        >
          ثبت نام کنید
        </button>
      </h5>
    </div>
  );
}

export default PhoneNumModal;
