import Image from "next/image";
import React from "react";
import step1reservation from "../../../../public/assets/reservationStep1.png";
import CostumerForm from "@/components/reservation/ReservForAnother/costumerForm";

function page() {
  return (
    <div className=" flex flex-col justify-center items-center" dir="rtl">
      <div className=" flex justify-center items-center w-[90%] h-[124px] bg-[rgba(196,226,255,0.37)] rounded-2xl">
        <Image src={step1reservation} width={915} alt="step-picture" />
      </div>
      <CostumerForm />
    </div>
  );
}

export default page;
