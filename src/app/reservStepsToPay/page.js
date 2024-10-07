import React from "react";
import ReservForMe from "@/container/reservStepsToPay/ReservForMe";
import Pay from "@/container/reservStepsToPay/pay";
import Stepper from "@/container/reservStepsToPay/Stepper";
function page() {
  return (
    <div
      className=" flex flex-col gap-10 justify-center py-10 items-center"
      dir="rtl"
    >
      <Stepper />
    </div>
  );
}

export default page;
