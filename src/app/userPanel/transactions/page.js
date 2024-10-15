import Navbar from "@/components/Navbar";
import UserPanelMenue from "@/container/userPanel/UserPanelMenue";
import React from "react";
import tick from "../../../../public/Pics/tick-circle.png";
import cross from "../../../../public/Pics/close-circle.png";
import Image from "next/image";
function page() {
  const transActions = [
    {
      id: 1,
      isSucsec: true,
      caption:
        " مبلغ 15,000 تومان بابت سفارش 349871259 در تاریخ 1403/06/12 ساعت 19:49:32 از کیف پول کاهش یافت.",
    },
    {
      id: 2,
      isSucsec: true,
      caption:
        " مبلغ 15,000 تومان بابت سفارش 349871259 در تاریخ 1403/06/12 ساعت 19:49:32 از کیف پول کاهش یافت.",
    },
    {
      id: 3,
      isSucsec: false,
      caption:
        " مبلغ 15,000 تومان بابت سفارش 349871259 در تاریخ 1403/06/12 ساعت 19:49:32 از کیف پول کاهش یافت.",
    },
    {
      id: 4,
      isSucsec: true,
      caption:
        " مبلغ 15,000 تومان بابت سفارش 349871259 در تاریخ 1403/06/12 ساعت 19:49:32 از کیف پول کاهش یافت.",
    },
    {
      id: 5,
      isSucsec: true,
      caption:
        " مبلغ 15,000 تومان بابت سفارش 349871259 در تاریخ 1403/06/12 ساعت 19:49:32 از کیف پول کاهش یافت.",
    },
  ];
  return (
    <div dir="rtl" className=" bg-[#F6FBFF] w-full">
      <Navbar />
      <div className=" flex w-full items-start">
        <UserPanelMenue />
        <div className="  w-[82%] flex justify-center">
          <div className=" flex flex-col shadow-lg bg-white rounded-lg w-[91%] p-2 px-5">
            {transActions.map((item) => {
              return (
                <div
                  className=" py-5 border-green-600 text-lg items-center gap-2 first-line:bg-black border-b-2 border-dashed last:border-none flex"
                  key={item.id}
                >
                  <Image
                    src={item.isSucsec ? tick : cross}
                    alt="icon"
                    width={32}
                  />
                  {item.isSucsec ? (
                    <h2 className=" text-green-600">تراکنش موفق:</h2>
                  ) : (
                    <h2 className=" text-red-600">تراکنش نا موفق:</h2>
                  )}
                  <p
                    className={
                      item.isSucsec ? "text-green-600" : "text-red-600"
                    }
                  >
                    {item.caption}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
