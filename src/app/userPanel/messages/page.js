import Navbar from "@/components/Navbar";
import UserPanelMenue from "@/container/userPanel/UserPanelMenue";
import Image from "next/image";
import React from "react";
import reminderIcon from "../../../../public/Pics/reminder-icon-black.png";
import disCountShapeBlack from "../../../../public/Pics/discount-shape-black.png";
import reminderIconBlue from "../../../../public/Pics/reminder-icon.png";
function page() {
  const messageTypeFilters = [
    { id: 1, type: "همه", isSelect: true, icon: null },
    { id: 1, type: "اطلاع رسانی", isSelect: true, icon: reminderIcon },
    { id: 1, type: "کد تخفیف", isSelect: true, icon: disCountShapeBlack },
  ];
  const messages = [
    {
      id: 1,
      title: "یادآوری",
      icon: reminderIconBlue,
      caption:
        "کاربر گرامی ایمان خسروی شما در روز پنجشنبه 1403/06/12  ساعت 14:00  با دکتر بهرام میرزایی وقت دارید.",
    },
    {
      id: 2,
      title: "یادآوری",
      icon: reminderIconBlue,
      caption:
        "کاربر گرامی ایمان خسروی شما در روز پنجشنبه 1403/06/12  ساعت 14:00  با دکتر بهرام میرزایی وقت دارید.",
    },
    {
      id: 3,
      title: "یادآوری",
      icon: reminderIconBlue,
      caption:
        "کاربر گرامی ایمان خسروی شما در روز پنجشنبه 1403/06/12  ساعت 14:00  با دکتر بهرام میرزایی وقت دارید.",
    },
  ];
  return (
    <div dir="rtl" className=" bg-[#F6FBFF] w-full">
      <Navbar />
      <div className=" w-full flex">
        <UserPanelMenue />
        <div className=" flex w-[82%] flex-col items-center">
          <div className=" w-[80%]">
            <div className=" border-b pb-5 w-full flex items-center gap-5">
              <h5>نوع نوبت:</h5>
              {messageTypeFilters.map((item) => {
                return (
                  <button
                    key={item.id}
                    className=" flex justify-center items-center p-2 gap-1 bg-[rgba(203,203,203,0.17)] rounded-md"
                  >
                    {item.icon && (
                      <Image src={item.icon} alt="icon" width={24} />
                    )}
                    {item.type}
                  </button>
                );
              })}
            </div>
            <div className=" flex flex-col justify-center mt-5 items-center gap-5">
              {messages.map((item) => {
                return (
                  <div
                    className=" border p-4 w-full relative shadow-md flex flex-col rounded-lg"
                    key={item.id}
                  >
                    <h5 className=" bg-[#B7F0B7] px-2 rounded-b-md top-0 left-5 text-[#00BA00] absolute">
                      جدید
                    </h5>
                    <div className=" flex items-center gap-2">
                      <Image width={32} src={reminderIconBlue} alt="icon" />
                      <h5>{item.title}</h5>
                    </div>
                    <p className=" text-sm text-[#737373]">{item.caption}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
