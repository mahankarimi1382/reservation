"use client";
import React, { useState } from "react";
import ReservForMe from "./ReservForMe";
import Pay from "./pay";
import { myStore, reservationTypeStore, smeIdStorage } from "@/store/Store";
import ReservForAnother from "./ReservForAnother";
import { useRouter } from "next/navigation";
import Receipt from "./Receipt";
import Cookies from "js-cookie";
import { Eror } from "@/components/ToastAlerts";

function Stepper() {
  const router = useRouter();
  const { smeId } = smeIdStorage();
  const token = Cookies.get("token");

  const { reservationType } = reservationTypeStore();

  console.log(reservationType);
  const [steps, setSteps] = useState(1);
  const stepper = () => {
    if (!token) {
      router.push("/");
      Eror("لطفا ابتدا لاگین کنید");
    } else if (steps === 1 && reservationType === "reservForMe" && smeId) {
      return <ReservForMe setSteps={setSteps} />;
    } else if (steps === 1 && reservationType === "reservForMe" && !smeId) {
      return <ReservForAnother forme setSteps={setSteps} />;
    } else if (steps === 1 && reservationType === "reservForAnother") {
      return <ReservForAnother setSteps={setSteps} />;
    } else if (steps === 2) {
      return <Pay setSteps={setSteps} />;
    } else if (steps === 3) {
      return <Receipt />;
    }
  };
  return <div className=" w-full">{stepper(3)}</div>;
}

export default Stepper;
