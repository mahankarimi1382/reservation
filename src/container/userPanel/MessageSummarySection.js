import React from "react";
import takhfif from "../../../public/Pics/discount-shape.png";
import copy from "../../../public/Pics/copy-icon.png";
import Image from "next/image";
import callender from "../../../public/Pics/callender-icon-blue.png";
import reminder from "../../../public/Pics/reminder-icon.png";
function MessageSummarySection() {
  return (
    <div className=" text-sm gap-5 pt-5  w-[284px] flex flex-col">
      <div className=" border-b px-2 border-dashed pb-4 flex flex-col border-[#C4E2FF] ">
        <div className=" flex gap-2 items-center">
          <Image src={takhfif} alt="icon" width={24} />
          <h5>کد تخفیف</h5>
        </div>
        <div className="   w-full p-2 bg-[#D3E9FD] justify-center items-center gap-1 rounded-lg flex">
          <div className=" bg-white rounded-md w-[70%] flex justify-center items-center">
            <h5 className=" font-semibold text-[#7E7E7E]">FGK98MNB3LXZ9Q</h5>
          </div>
          <Image src={copy} alt="icon" width={24} />
          <h5>کپی</h5>
        </div>
      </div>
      <div className=" flex gap-2 border-b px-2 pb-4  border-dashed border-[#C4E2FF] items-center">
        <Image src={callender} alt="icon" width={24} />
        <h5>یک پیام از طرف پزشک</h5>
      </div>
      <div className=" flex gap-2 border-b px-2 pb-4  border-dashed border-[#C4E2FF] items-center">
        <Image src={reminder} alt="icon" width={24} />
        <h5>یادآور روز نوبت شما</h5>
      </div>
    </div>
  );
}

export default MessageSummarySection;
