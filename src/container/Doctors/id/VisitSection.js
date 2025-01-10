
import React from "react";
import hospitalIcon from "../../../../public/Pics/hospital.png";
import monitorIcon from "../../../../public/Pics/monitor-mobbile.png";
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
