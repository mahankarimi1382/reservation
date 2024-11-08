import Navbar from "@/components/Navbar";
import UserPanelMenue from "@/container/userPanel/UserPanelMenue";
import Image from "next/image";
import React from "react";
import gooshiPezeshkiBlack from "../../../../public/Pics/gooshiPezeshki-black.png";
import hospitalIconBlack from "../../../../public/Pics/hospital-black.png";
import bookIconBlack from "../../../../public/Pics/book-black.png";
import SavedCardContainer from "@/container/userPanel/saves/SavedCardContainer";
import MagezineSave from "@/container/userPanel/saves/MagezineSave";
import DoctorSave from "@/container/userPanel/saves/DoctorSave";
import MedicalCenterSave from "@/container/userPanel/saves/MedicalCenterSave";
function page() {
  return (
    <div dir="rtl" className=" bg-[#F6FBFF] w-full">
      <Navbar />
      <div className=" flex w-full">
        <UserPanelMenue />
        <div className=" flex justify-center w-[82%]">
          <div className=" w-[80%] h-14 flex flex-col gap-8">
            <div className=" border-b-2 pb-5 flex items-center gap-5">
              <h5 className=" font-semibold">ذخیره شده ها :</h5>
              <button className=" text-[#005DAD] bg-[#D3E9FD] px-3 p-1 rounded-md">
                همه
              </button>
              <button className=" flex justify-center items-center gap-2 bg-[rgba(206,206,206,0.17)] px-3 p-1 rounded-md">
                <Image src={gooshiPezeshkiBlack} alt="icon" width={24} />
                دکتر
              </button>
              <button className=" flex justify-center items-center gap-2 bg-[rgba(206,206,206,0.17)] px-3 p-1 rounded-md">
                <Image src={hospitalIconBlack} alt="icon" width={24} />
                مراکز درمانی
              </button>
              <button className=" flex justify-center items-center gap-2 bg-[rgba(206,206,206,0.17)] px-3 p-1 rounded-md">
                <Image src={bookIconBlack} alt="icon" width={24} />
                مجله سلامت
              </button>
            </div>
            <div className=" flex flex-col gap-4">
              <SavedCardContainer>
                <MagezineSave />
              </SavedCardContainer>
              <SavedCardContainer>
                <DoctorSave />
              </SavedCardContainer>
              <SavedCardContainer>
                <MedicalCenterSave />
              </SavedCardContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
