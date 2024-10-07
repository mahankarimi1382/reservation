import React from "react";
import fullBanner from "../../../public/pics/fullBaner.png";
import Image from "next/image";
import hospitalIcon from "../../../public/Pics/FullBannerIcons/hospital.png";
import group from "../../../public/Pics/FullBannerIcons/group.png";
import doctor from "../../../public/Pics/FullBannerIcons/doctor.png";
import telephone from "../../../public/Pics/FullBannerIcons/telephone.png";

function FullBanerSection() {
  return (
    <div className=" w-full relative flex justify-center items-center">
      <Image alt="full banner" src={fullBanner} />
      <div className=" w-[80%] absolute flex justify-between">
        <div className=" flex text-white justify-center items-center flex-col">
          <Image width={110} src={hospitalIcon} alt="hospital-icon" />
          <h5 className=" mt-2 text-3xl">+456</h5>
          <p>بیمارستان های طرف قرارداد</p>
        </div>
        <div className=" flex text-white justify-center items-center flex-col">
          <Image width={110} src={doctor} alt="hospital-icon" />
          <h5 className=" mt-2 text-3xl">+456</h5>
          <p>بیمارستان های طرف قرارداد</p>
        </div>
        <div className=" flex text-white justify-center items-center flex-col">
          <Image width={110} src={telephone} alt="hospital-icon" />
          <h5 className=" mt-2 text-3xl">+456</h5>
          <p>بیمارستان های طرف قرارداد</p>
        </div>
        <div className=" flex text-white justify-center items-center flex-col">
          <Image width={110} src={group} alt="hospital-icon" />
          <h5 className=" mt-2 text-3xl">+456</h5>
          <p>بیمارستان های طرف قرارداد</p>
        </div>
      </div>
    </div>
  );
}

export default FullBanerSection;
