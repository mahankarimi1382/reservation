"use client";
import React, { useState } from "react";
import ReservForMe from "./ReservForMe";
import Pay from "./pay";
import { myStore } from "@/store/Store";
import ReservForAnother from "./ReservForAnother";
import { useRouter } from "next/navigation";
import Receipt from "./Receipt";

function Stepper() {
  const router = useRouter();

  const { reservationType } = myStore();

  console.log(reservationType);
  const [steps, setSteps] = useState(1);
  const stepper = () => {
    if (steps === 1 ) {
      return <ReservForMe setSteps={setSteps} />;
    } else if (steps === 1 && reservationType === "reservForAnother") {
      return <ReservForAnother setSteps={setSteps} />;
    } else if (steps === 2) {
      return <Pay setSteps={setSteps} />;
    } else if (steps === 3) {
      return <Receipt />;
    } else {
      // router.back();
    }
  };
  return <div className=" w-full">{stepper(3)}</div>;
}

export default Stepper;
