import Image from "next/image";
import React from "react";
import pesorasos from "../../../../public/Pics/pesoriasos.png";
import hospital from "../../../../public/Pics/hospital.png";
import monitor from "../../../../public/Pics/monitor-mobbile.png";
import userTag from "../../../../public/Pics/user-tag.png";
import favoriteChart from "../../../../public/Pics/favorite-chart.png";
import star from "../../../../public/Pics/star.png";
import { IoLocationOutline } from "react-icons/io5";
function MedicalCenterSave() {
  const charecter = [
    { id: 1, caption: "صبور" },
    { id: 2, caption: "دلسوز" },
    { id: 3, caption: "خوش برخورد" },
  ];
  return (
    <div className=" flex gap-5">
      <Image src={pesorasos} alt="img" width={155} />
      <div className=" flex justify-between items-start w-full  gap-2">
        <div className=" flex gap-4 flex-col">
          <h5 className=" font-semibold">کلینیک زیبایی کارن</h5>
          <div className=" flex gap-5">
            <h2>روش نوبت دهی :</h2>
            {true && (
              <h2 className=" flex gap-2">
                <Image width={24} src={monitor} alt="monitor-icon" />
                ویزیت آنلاین
              </h2>
            )}
            {true && (
              <h2 className=" flex gap-2">
                <Image width={24} src={hospital} alt="monitor-icon" />
                ویزیت حضوری
              </h2>
            )}
          </div>{" "}
          <div className=" flex justify-center items-center">
            <IoLocationOutline className=" text-[#005DAD]" />
            تهران: فلکه دوم صادقیه پشت بیمارستان ابن سینا ساختمان پزشکان فدک
            طبقه اول
          </div>
          <div className=" flex gap-5">
            <h2 className=" px-2 flex justify-center items-center gap-2 p-1 rounded-full bg-[rgba(69,199,255,0.23)]">
              <Image src={favoriteChart} alt="icon" width={24} />
              {10}
              تخصص
            </h2>
            <h2 className=" px-2 flex justify-center items-center gap-2 p-1 rounded-full bg-[#FBEDD7]">
              <Image src={userTag} alt="icon" width={24} />
              {9}
              دکتر عضو
            </h2>
          </div>
        </div>
        <h5 className=" flex justify-center items-center gap-2">
          <Image src={star} alt="icon" width={18} />
          4.5/5 از (نظر 320)
        </h5>
      </div>
    </div>
  );
}

export default MedicalCenterSave;
