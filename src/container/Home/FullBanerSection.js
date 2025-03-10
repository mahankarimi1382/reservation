import React from "react";
import fullBanner from "../../../public/Pics/fullBaner.png";
import Image from "next/image";
import hospitalIcon from "../../../public/Pics/FullBannerIcons/hospital.png";
import group from "../../../public/Pics/FullBannerIcons/group.png";
import doctor from "../../../public/Pics/FullBannerIcons/doctor.png";
import telephone from "../../../public/Pics/FullBannerIcons/telephone.png";

function FullBanerSection() {
  return (
    <div className=" w-full bg-blue-300 lg:h-full h-[150px] relative flex justify-center items-center">
      <Image alt="full banner" className=" h-full" src={fullBanner} />
      <div className=" flex-wrap lg:flex-row w-full lg:w-[80%] absolute flex justify-between">
        <div className="  w-1/2 lg:w-1/4 text-[10px] lg:text-base flex text-white pl-4 lg:pl-0  justify-center items-center flex-col">
          <Image
            width={110}
            className=" xs:w-8 w-5 sm:w-10 md:w-[40%] "
            src={hospitalIcon}
            alt="hospital-icon"
          />
          <h5 className=" mt-2">+456</h5>
          <p>بیمارستان های طرف قرارداد</p>
        </div>
        <div className=" pr-4 lg:pr-0 w-1/2 lg:w-1/4 text-[10px] lg:text-base flex text-white justify-center items-center flex-col">
          <Image
            width={110}
            className=" xs:w-8 w-5 sm:w-10 md:w-[40%]"
            src={doctor}
            alt="hospital-icon"
          />
          <h5 className=" mt-2">+456</h5>
          <p>بیمارستان های طرف قرارداد</p>
        </div>
        <div className=" pl-4 lg:pl-0 w-1/2 lg:w-1/4 text-[10px] lg:text-base flex text-white justify-center items-center flex-col">
          <Image
            className=" xs:w-8 w-5 sm:w-10 md:w-[40%]"
            width={110}
            src={telephone}
            alt="hospital-icon"
          />
          <h5 className=" mt-2">+456</h5>
          <p>بیمارستان های طرف قرارداد</p>
        </div>
        <div className=" pr-4 lg:pr-0 w-1/2 lg:w-1/4 text-[10px] lg:text-base flex text-white justify-center items-center flex-col">
          <Image
            className=" xs:w-8 w-5 sm:w-10 md:w-[40%]"
            width={110}
            src={group}
            alt="hospital-icon"
          />
          <h5 className=" mt-2">+456</h5>
          <p>بیمارستان های طرف قرارداد</p>
        </div>
      </div>
    </div>
  );
}

export default FullBanerSection;
