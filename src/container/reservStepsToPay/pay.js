import Image from "next/image";
import React, { useState } from "react";
import step2pay from "../../../public/Pics/step2pay.png";
import PayDetails from "@/container/reservStepsToPay/PayDetails";
import discountIcon from "../../../public/Pics/discount-shape.png";
import cardIcon from "../../../public/Pics/card.png";
import cardIcon_white from "../../../public/Pics/card-white.png";
import samanBank from "../../../public/Pics/samanBank.png";
import {
  doctorProfileStore,
  reservationStore,
  smeIdStorage,
  userSubmitedArrStore,
} from "@/store/Store";
import { patinet_reservation } from "@/api/ApiCalling";
import { SyncLoader } from "react-spinners";
import { useRouter } from "next/navigation";
function Pay({ setSteps }) {
  const { smeId } = smeIdStorage();
  const router = useRouter();
  const { doctorName } = doctorProfileStore();
  const { patients } = userSubmitedArrStore();
  console.log(smeId);
  const { patientId, reservationId, turnId } = reservationStore();
  console.log(patientId);
  const [isLoading, setIsLoading] = useState(false);
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
      smeProfileId: smeId,
    },
    patientId: patientId || patients[0].id,
    reservationId: reservationId,
    discountCodeId: null,
    turnId: turnId,
  };
  const handleCompleteStep2 = () => {
    setIsLoading(true);
    console.log(data);
    patinet_reservation(data, setIsLoading, router);
    // setSteps(3);
  };
  return (
    <div
      className=" w-full flex flex-col justify-center gap-2 lg:gap-10 items-center"
      dir="rtl"
    >
      <div className=" flex justify-center items-center w-[90%] h-[124px] bg-[rgba(196,226,255,0.37)] rounded-2xl">
        <Image src={step2pay} width={915} alt="step-picture" />
      </div>
      <PayDetails />
      <div className=" bg-[rgba(206,14,30,0.1)] rounded-xl flex  h-[117px] px-5 items-center text-[#CE0E1EF2] w-[90%]">
        <h2 className=" text-sm lg:text-2xl ">
          مبلغ بیعانه : مبلغ بیعانه دکتر {doctorName} 250,000 تومان است که مابقی
          مبلغ در مطب از شما دریافت می شود.
        </h2>
      </div>
      <div className=" lg:flex-row flex-col flex gap-6 w-[90%]">
        <div className=" lg:w-[55%] gap-2 lg:gap-3 flex flex-col justify-center items-center">
          <div className=" px-2 lg:px-5 text-xl items-center h-[88px]  lg:gap-10 w-full flex rounded-xl border-[#005DAD] border">
            <Image
              width={24}
              src={discountIcon}
              alt="icon"
              className=" hidden lg:flex"
            />
            <h2 className=" hidden lg:flex text-xs lg:text-base lg:-mr-5">
              ثبت کد تخفیف
            </h2>
            <input
              placeholder="کد تخفیف"
              className=" outline-none px-4 rounded-lg border-2 lg:w-[320px] h-[40px]"
            />
            <button
              disabled
              className=" disabled:bg-[#CBCBCB] text-xs lg:text-base p-1 text-white rounded-lg lg:p-2 lg:px-4 "
            >
              ثبت کد
            </button>
          </div>
          <div className="border-[#005DAD] rounded-xl lg:px-5 lg:py-2 flex flex-col w-full border h-[165px]">
            <h2 className=" lg:text-xl flex items-center gap-2">
              <Image src={cardIcon} alt="card-icon" width={24} />
              درگاه پرداخت
            </h2>
            <div className=" lg:-mt-5 w-full gap-2 flex flex-col justify-center items-center">
              <div className=" flex gap-3">
                <Image
                  alt="bank"
                  src={samanBank}
                  className=" lg:w-[77px] lg:h-[77px] w-[50px] h-[50px]"
                  width={77}
                />
                <Image
                  alt="bank"
                  src={samanBank}
                  className=" lg:w-[77px] lg:h-[77px] w-[50px] h-[50px]"
                  width={77}
                />
                <Image
                  alt="bank"
                  src={samanBank}
                  className=" lg:w-[77px] lg:h-[77px] w-[50px] h-[50px]"
                  width={77}
                />
              </div>
              <div className=" flex flex-col gap-2">
                <h5 className=" text-sm lg:text-base text-[#717171]">
                  پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌
                </h5>
                <p className="text-[#717171] text-sm flex justify-center items-center">
                  (لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[#005DAD] flex gap-10 flex-col justify-center items-center p-4 rounded-xl border lg:w-[45%]">
          <div className=" pb-5 border-b w-full flex items-center justify-between">
            <h2 className=" lg:text-xl">هزینه رزرو دکتر {doctorName}</h2>
            <h5 className=" text-[#757575]">250,000 تومان</h5>
          </div>
          <div className=" w-full  flex items-center justify-between">
            <h2 className=" lg:text-xl text-[#005DAD]">مبلغ قابل پرداخت</h2>
            <h5 className=" text-[#005DAD]">250,000 تومان</h5>
          </div>
          <button
            onClick={handleCompleteStep2}
            className=" gap-2 px-5 lg:px-0 lg:w-[305px] py-3 rounded-xl flex justify-center items-center lg:text-xl text-white bg-[#005DAD] "
          >
            <Image alt="icon" width={24} src={cardIcon_white} />
            {isLoading ? (
              <SyncLoader color="white" size={10} />
            ) : (
              "تایید و پرداخت"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pay;
