import React from "react";
import fullBanner from "../../../public/assets/fullBaner.png";
import Image from "next/image";

function FullBanerSection() {
  return (
    <div className=" fullBanner w-full">
      <Image alt="full banner" src={fullBanner} />
    </div>
  );
}

export default FullBanerSection;
