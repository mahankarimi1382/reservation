import React, { useRef, useState } from "react";
import ModalLogo from "../../../public/pics/ModalLogo.png";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import Timer from "../Timer";
import { Eror, success } from "../ToastAlerts";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SyncLoader } from "react-spinners";

function ValidateModal({
  closeModal,
  phoneNumber,
  nationalCode,
  setIsValidateModal,
}) {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });

    if (name === "input5") {
      const allInputs = { ...inputs, [name]: value };
      const activationCode = Object.values(allInputs).join("");
      fetchData(activationCode);
    }
  };

  const fetchData = (activationCode) => {
    setIsLoading(true);
    console.log(activationCode);

    axios
      .post(
        "http://84.47.224.220:8040/api/v1/Authentication/activating-registration",
        {
          metadata: {
            userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            userName: nationalCode,
          },
          mobile: phoneNumber,
          activationCode,
        }
      )
      .then((res) => {
        console.log(res);
        success("ورود موفق");
        closeModal();
      })
      .catch((err) => {
        setIsLoading(false);
        Eror("کد وارد شده صحیح نمی باشد");
        setIsWrongCode(true);

        console.log(err.response.data.message);
      });
  };
  const changeNumber = () => {
    setIsValidateModal(false);
  };
  const [isWrongCode, setIsWrongCode] = useState(false);
  const [isSendAgain, setIsSendAgain] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
        {phoneNumber}
        ارسال شد.
        <button onClick={changeNumber} className=" text-sm text-[#005DAD]">
          ویرایش شماره
        </button>
      </p>
      <div className=" w-full gap-4 justify-center flex flex-row-reverse items-center">
        <input
          name="input1"
          value={inputs.input1}
          onChange={(e) => {
            handleChange(e);
            focusOnInput(e, input2Ref);
          }}
          className={
            isWrongCode
              ? " text-center rounded border p-0 border-[#f53f3f]  w-[56px] h-[40px]"
              : " text-center rounded border p-0 border-[#717171] w-[56px] h-[40px]"
          }
        />
        <input
          name="input2"
          value={inputs.input2}
          ref={input2Ref}
          onChange={(e) => {
            handleChange(e);
            focusOnInput(e, input3Ref);
          }}
          className={
            isWrongCode
              ? " text-center rounded border p-0 border-[#f53f3f] w-[56px] h-[40px]"
              : " text-center rounded border p-0 border-[#717171] w-[56px] h-[40px]"
          }
        />
        <input
          name="input3"
          value={inputs.input3}
          ref={input3Ref}
          onChange={(e) => {
            handleChange(e);
            focusOnInput(e, input4Ref);
          }}
          className={
            isWrongCode
              ? " text-center rounded border p-0 border-[#f53f3f] w-[56px] h-[40px]"
              : " text-center rounded border p-0 border-[#717171] w-[56px] h-[40px]"
          }
        />
        <input
          name="input4"
          value={inputs.input4}
          ref={input4Ref}
          onChange={(e) => {
            handleChange(e);
            focusOnInput(e, input5Ref);
          }}
          className={
            isWrongCode
              ? " text-center rounded border p-0 border-[#f53f3f] w-[56px] h-[40px]"
              : " text-center rounded border p-0 border-[#717171] w-[56px] h-[40px]"
          }
        />
        <input
          name="input5"
          value={inputs.input5}
          ref={input5Ref}
          onChange={(e) => {
            handleChange(e);
          }}
          className={
            isWrongCode
              ? " text-center rounded border p-0 border-[#f53f3f] w-[56px] h-[40px]"
              : " text-center rounded border p-0 border-[#717171] w-[56px] h-[40px]"
          }
        />
      </div>
      {isLoading ? (
        <div className=" flex w-full justify-center items-center">
          <button className=" text-[#005DAD] flex justify-center items-center gap-2 w-10/12 h-[45px] border-2 border-[#005DAD] rounded-lg">
            <SyncLoader color="#005DAD" size={10} />
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default ValidateModal;
