"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import hospitalIcon from "../../../public/assets/hospital.png";
import monitorIcon from "../../../public/assets/monitor-mobbile.png";
import VisitSectionBoxes from "./VisitSectionBoxes";
function VisitSection() {
  return (
    <div className=" w-full min-h-[505px] py-5 flex-col gap-5 bg-white rounded-xl flex justify-center items-center">
      <VisitSectionBoxes topic="ویزیت حضوری" icon={hospitalIcon} />
      <VisitSectionBoxes topic="ویزیت آنلاین" icon={monitorIcon} />
    </div>
  );
}

export default VisitSection;
