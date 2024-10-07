"use client";
import React, { useState } from "react";
import ReservForMe from "./ReservForMe";
import Pay from "./pay";
import { useStore } from "@/store/Store";
import ReservForAnother from "./ReservForAnother";
import { useRouter } from "next/navigation";
import Receipt from "./Receipt";

function Stepper() {
  const router = useRouter();

  const { reservationType } = useStore();

  console.log(reservationType);
  const [steps, setSteps] = useState(1);
  const stepper = (step) => {
    if (step === 1 && reservationType === "reservForMe") {
      return <ReservForMe setSteps={setSteps} />;
    } else if (step === 1 && reservationType === "reservForAnother") {
      return <ReservForAnother setSteps={setSteps} />;
    } else if (step === 2) {
      return <Pay setSteps={setSteps} />;
    } else if (step === 3) {
      return <Receipt />;
    } else {
      router.back();
    }
  };
  return <div className=" w-full">{stepper(3)}</div>;
}

export default Stepper;
