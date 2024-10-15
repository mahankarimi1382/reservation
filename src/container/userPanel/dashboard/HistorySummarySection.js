import React from "react";
import bahram from "../../../../public/Pics/bahramMirzayi.png";
import Image from "next/image";

function HistorySummarySection() {
  return (
    <div className=" gap-[10px] flex flex-col justify-center items-center pt-5">
      <div className=" w-[500px] justify-center items-center flex border-b border-dashed border-[#D3E9FD] pb-5 gap-3">
        <Image
          src={bahram}
          width={68}
          alt="profile"
          className=" rounded-full border border-[#005DAD]"
        />
        <div className=" flex flex-col gap-2">
          <div className=" flex gap-10 text-sm">
            <div className=" flex-col gap-2 flex">
              <h5>بهرام میرزایی</h5>
              <h5 className=" text-[#757575]">متخصص مغز و اعصاب</h5>
            </div>
            <div className=" flex-col flex">
              <div className="flex">
                <h5>روش نوبت دهی :</h5>
                <p className=" text-[#005DAD]"> حضوری </p>
              </div>
              <div className="flex">
                <h5>تاریخ وساعت : </h5>
                <p className=" text-[#005DAD]">1403/06/28 ساعت 14:30</p>
              </div>
            </div>
          </div>
          <div className=" flex text-sm">
            <h5>محل ویزیت :</h5>
            <p className=" text-[#005DAD]">
              گاندی شمالی برادران شریفی پلاک 55 واحد 11
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[500px] justify-center items-center flex border-b border-dashed border-[#D3E9FD] pb-5 gap-3">
        <Image
          src={bahram}
          width={68}
          alt="profile"
          className=" rounded-full border border-[#005DAD]"
        />
        <div className=" flex flex-col gap-2">
          <div className=" flex gap-10 text-sm">
            <div className=" flex-col gap-2 flex">
              <h5>بهرام میرزایی</h5>
              <h5 className=" text-[#757575]">متخصص مغز و اعصاب</h5>
            </div>
            <div className=" flex-col flex">
              <div className="flex">
                <h5>روش نوبت دهی :</h5>
                <p className=" text-[#005DAD]"> حضوری </p>
              </div>
              <div className="flex">
                <h5>تاریخ وساعت : </h5>
                <p className=" text-[#005DAD]">1403/06/28 ساعت 14:30</p>
              </div>
            </div>
          </div>
          <div className=" flex text-sm">
            <h5>محل ویزیت :</h5>
            <p className=" text-[#005DAD]">
              گاندی شمالی برادران شریفی پلاک 55 واحد 11
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HistorySummarySection;
