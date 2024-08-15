import React from "react";
import movaqatti2 from "../../../public/assets/movaqatti2.png";
import Image from "next/image";

function FullBanerSection() {
  return (
    <div className=" fullBanner w-full">
      <Image alt="full banner" src={movaqatti2} />
    </div>
  );
}

export default FullBanerSection;
