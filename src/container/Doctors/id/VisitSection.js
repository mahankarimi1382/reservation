"use client";
import React, { useEffect, useState } from "react";
import hospitalIcon from "../../../../public/Pics/hospital.png";
import monitorIcon from "../../../../public/Pics/monitor-mobbile.png";
import VisitSectionBoxes from "./VisitSectionBoxes";
import { get_doctor_treatmentCenter } from "@/api/ApiCalling";
function VisitSection({ id }) {
  const [clinics, setClinics] = useState([]);
  const getTreatment = async () => {
    const data = await get_doctor_treatmentCenter(id);
    if (data) {
      let clinics = data.filter((item) => item.clinicId);
      console.log(clinics);
      setClinics(clinics);
      console.log(data);
    }
  };

  useEffect(() => {
    {
      id && getTreatment();
    }
  }, [id]);
  return (
    <div className=" w-full min-h-[505px] py-5 flex-col gap-5 bg-white rounded-xl flex justify-center items-center">
      <VisitSectionBoxes
        list={clinics}
        topic="ویزیت حضوری"
        icon={hospitalIcon}
      />
      <VisitSectionBoxes topic="ویزیت آنلاین" icon={monitorIcon} />
    </div>
  );
}

export default VisitSection;
