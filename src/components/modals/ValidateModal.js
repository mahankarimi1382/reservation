import React, { useEffect, useRef, useState } from "react";
import ModalLogo from "../../../public/Pics/ModalLogo.png";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import Timer from "../Timer";
import { Eror, success } from "../ToastAlerts";
import { SyncLoader } from "react-spinners";
import { activating_registarion, sendCodeAgain } from "@/api/ApiCalling";
import {
  fullNameStorage,
  myStore,
  smeIdStorage,
  userSubmitedArrStore,
} from "@/store/Store";

function ValidateModal({
  closeModal,
  phoneNumber,
  nationalCode,
  setIsValidateModal,
}) {
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const input5Ref = useRef();
  useEffect(() => {
    input1Ref.current.focus();
  }, []);
  const { setSmeId } = smeIdStorage();
  const { setPatients } = userSubmitedArrStore();
  const { setToken } = myStore();
  const { setFullName } = fullNameStorage();
  const [disabled, setDisabled] = useState(false);
  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });
  const [isWrongCode, setIsWrongCode] = useState(false);
  const [isSendAgain, setIsSendAgain] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [activationCode, setActivationCode] = useState(null);
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: nationalCode,
    },
    mobile: phoneNumber,
    activationCode,
  };

  // تابع handleChange
  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });

    if (value.length === 1 && index < 5) {
      const nextInput = document.querySelector(`input[name=input${index + 1}]`);
      if (nextInput) nextInput.focus();
    } else if (value.length === 0 && index > 1) {
      const prevInput = document.querySelector(`input[name=input${index - 1}]`);
      if (prevInput) prevInput.focus();
    }

    if (name === "input5" && value.length === 1) {
      const allInputs = { ...inputs, [name]: value };
      const code = Object.values(allInputs).join("");
      setActivationCode(code);
      activating_registarion(
        code,
        phoneNumber,
        setIsWrongCode,
        setIsLoading,
        closeModal,
        setToken,
        setFullName,
        setSmeId,
        setPatients
      );
    }
  };

  // تابع handleKeyDown
  const handleKeyDown = (event, index) => {
    if (
      event.key === "Backspace" &&
      inputs[`input${index}`].length === 0 &&
      index > 1
    ) {
      const prevInput = document.querySelector(`input[name=input${index - 1}]`);
      if (prevInput) prevInput.focus();
    }
  };

  const changeNumber = () => {
    setIsValidateModal(false);
  };

  const sendAgain = () => {
    setIsSendAgain(true);
    sendCodeAgain(phoneNumber);
    success(`کد تایید مجددا به شماره 
      ${phoneNumber}
      ارسال شد`);
  };

  return (
    <div className="py-4 w-[394px] h-[326px] px-5 bg-white flex flex-col justify-between rounded">
      <div className="w-full flex px-1 justify-end">
        <RxCross2
          onClick={closeModal}
          className="text-[#717171] z-30 cursor-pointer text-2xl"
        />
      </div>
      <div className="w-full flex justify-center items-center -mt-8">
        <Image src={ModalLogo} alt="Logo" width={67} />
      </div>

      <h2 className="flex justify-center items-center w-full">کد تایید</h2>
      <p className="text-[14px] w-full flex justifycenter items-center text-[#717171]">
        کد تایید پنج‌رقمی به شماره
        {phoneNumber}
        ارسال شد.
        <button onClick={changeNumber} className="text-sm text-[#005DAD]">
          ویرایش شماره
        </button>
      </p>
      <div className="w-full gap-4 justify-center flex flex-row-reverse items-center">
        {Object.keys(inputs).map((key, index) => (
          <input
            key={index}
            disabled={disabled}
            ref={
              index === 0
                ? input1Ref
                : index === 1
                ? input2Ref
                : index === 2
                ? input3Ref
                : index === 3
                ? input4Ref
                : input5Ref
            }
            name={key}
            value={inputs[key]}
            onChange={(e) => {
              if (!/^[0-9]*$/.test(e.target.value)) {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }
              handleChange(e, index + 1);
            }}
            onKeyDown={(e) => handleKeyDown(e, index + 1)}
            className={
              isWrongCode
                ? "text-center rounded border p-0 border-[#f53f3f] w-[56px] h-[40px]"
                : "text-center rounded border p-0 border-[#717171] w-[56px] h-[40px]"
            }
          />
        ))}
      </div>
      {isLoading ? (
        <div className="flex w-full justify-center items-center">
          <button className="text-[#005DAD] flex justify-center items-center gap-2 w-10/12 h-[45px] border-2 border-[#005DAD] rounded-lg">
            <SyncLoader color="#005DAD" size={10} />
          </button>
        </div>
      ) : (
        <div className="flex w-full justify-center items-center">
          {isSendAgain ? (
            <button className="text-[#005DAD] flex justify-center items-center gap-2 w-10/12 h-[45px] border-2 border-[#005DAD] rounded-lg">
              <Timer time={2} />
              تا ارسال مجدد کد
            </button>
          ) : (
            <button
              onClick={sendAgain}
              className="w-10/12 h-[45px] bg-[#005DAD] rounded-lg text-white"
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
