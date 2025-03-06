import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import PatientsSection from "@/container/adminPanel/Patinets/PatientsSection";
import React from "react";

function page() {
  const fakeData = [
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
    {
      id: 1,
      name: "ایمان سالارکیا",
      time: "1403/0402 ساعت 10:30",
      code: "0024567980",
      phone: "09129804556",
    },
  ];
  return (
    <div dir="rtl" className="flex bg-[#F6FBFF] justify-start">
      <AdminPanelMenu />
      <PatientsSection />
      {/* <div className=" gap-10 mt-20 w-full flex flex-col items-center ">
        <div className=" flex w-[80%]  gap-5 items-center">
          <DatePickerComponent title="از تاریخ" />
          <DatePickerComponent title="تا تاریخ" />
          <SelectFilter title="نوع ویزیت" />
          <SelectFilter title="محل ویزیت" />
          <SelectFilter title="ساعت" />
        </div>
        <div className=" gap-2 flex justify-end w-[80%] items-center">
          <button className=" border rounded-lg px-3 p-1 gap-2 text-[#185B37] border-[#185B37] flex">
            <Image src={excel_icon} alt=" icon" width={24} />
            خروجی اکسل
          </button>
          <button className=" border rounded-lg px-3 p-1 gap-2 text-[#3F444D] border-[#3F444D] flex">
            <Image src={printer} alt=" icon" width={24} />
            چاپ اطلاعات{" "}
          </button>
        </div>
        <div className=" gap-3 flex flex-col w-[80%] rounded-lg border shadow-md p-4 bg-white">
          <div className=" py-2 w-full flex rounded-lg bg-[#F4F4F4]">
            <h4 className=" gap-2 text-[#005DAD] font-semibold w-[12%] flex justify-center  items-center text-lg">
              <input className=" border-[#005DAD] border" type="checkbox" />
              همه
            </h4>
            <h4 className=" w-[11%] flex justify-center  items-center text-[#3F444D] ">
              کدملی <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[11%] flex justify-center items-center text-[#3F444D] ">
              نام بیمار <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[11%] flex justify-center items-center text-[#3F444D] ">
              کد رهگیری <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[11%] flex justify-center items-center text-[#3F444D] ">
              پرداخت شده
              <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[11%] flex justify-center items-center text-[#3F444D] ">
              تاریخ ویزیت <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[11%] flex justify-center items-center text-[#3F444D] ">
              ساعت ویزیت <TiArrowSortedDown />
            </h4>
            <h4 className=" w-[11%] flex justify-center items-center text-[#3F444D]">
              وضعیت <TiArrowSortedDown />
            </h4>
          </div>
          {fakeData.map((item) => {
            return (
              <div
                className=" border flex py-3 rounded-lg bg-white shadow-md"
                key={item.id}
              >
                <div className=" w-[11%] flex justify-center items-center">
                  <input className="border-[#005DAD] border" type="checkbox" />
                </div>
                <h4 className=" w-[11%] flex justify-center items-center text-[#3F444D] ">
                  0024175748{" "}
                </h4>
                <h4 className=" w-[11%] flex justify-center items-center text-[#3F444D] ">
                  ایمان سالارکیا
                </h4>
                <h4 className=" w-[11%] flex justify-center items-center text-[#3F444D] ">
                  549730
                </h4>
                <h4 className=" w-[11%] flex justify-center items-center text-[#3F444D] ">
                  200,000 تومان{" "}
                </h4>
                <h4 className=" w-[11%] flex justify-center items-center text-[#3F444D] ">
                  1403/04/02{" "}
                </h4>
                <h4 className=" w-[11%] flex justify-center items-center text-[#3F444D] ">
                  ساعت 14:30{" "}
                </h4>
                <h4 className=" text-green-600 w-[11%] flex justify-center items-center ">
                  ثبت شده{" "}
                </h4>
                <button className=" text-sm w-[11%] bg-[#DBEDFF] text-[#005DAD] border border-[#005DAD] p-2 rounded-lg">
                  مشاهده جزئیات
                </button>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}

export default page;
