import Image from "next/image";
import React from "react";
import pesorasos from "../../../../public/Pics/pesoriasos.png";
import hospital from "../../../../public/Pics/hospital.png";
import monitor from "../../../../public/Pics/monitor-mobbile.png";
import barezvijegi from "../../../../public/Pics/barezvijegi.png";
import { AiFillLike } from "react-icons/ai";
import star from "../../../../public/Pics/star.png";
function DoctorSave() {
  const charecter = [
    { id: 1, caption: "صبور" },
    { id: 2, caption: "دلسوز" },
    { id: 3, caption: "خوش برخورد" },
  ];
  return (
    <div className=" flex gap-5">
      <Image src={pesorasos} alt="img" width={155} />
      <div className=" flex justify-between items-start w-full  gap-2">
        <div className=" flex gap-2 flex-col">
          <h5 className=" font-semibold">دکتر حلما محمدی</h5>
          <h5 className=" text-[#757575]">متخصص مغز و اعصاب</h5>
          <div className=" flex justify-center items-center gap-2">
            <h5>خدمات :</h5>
            <p className=" text-[#757575]">
              جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات
            </p>
          </div>
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
          <div className=" flex gap-3">
            <Image src={barezvijegi} alt="icon" width={24} />
            <h2> ویژگی های بارز پزشک :</h2>
            {charecter.map((item2) => {
              return (
                <h2 className="text-[#1F7168]" key={item2.id}>
                  {item2.caption}
                </h2>
              );
            })}
          </div>
        </div>
        <div className=" flex gap-5 flex-col items-end justify-center">
          <h5 className=" text-sm p-1 px-2 bg-[#F0F0F0]  rounded flex items-center justify-center gap-1 text-[#1F7168]">
            <AiFillLike />
            97% پیشنهاد کابران دکتر رزرو
          </h5>
          <h5 className=" flex justify-center items-center gap-2">
            <Image src={star} alt="icon" width={18} />
            4.5/5 از (نظر 320)
          </h5>
        </div>
      </div>
    </div>
  );
}

export default DoctorSave;
