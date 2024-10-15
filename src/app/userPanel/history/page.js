import DatePickerComponent from "@/components/DatePickerComponent";
import { SelectFilter } from "@/components/Inputs/Input";
import Navbar from "@/components/Navbar";
import UserPanelMenue from "@/container/userPanel/UserPanelMenue";
import React from "react";
import hozoriIcon from "../../../../public/Pics/people.png";
import onlineIcon from "../../../../public/Pics/monitor-mobbile-black.png";
import hozoriIcon_blue from "../../../../public/Pics/hozori-blue.png";
import bahram from "../../../../public/Pics/bahramMirzayi.png";
import Image from "next/image";
function page() {
  const cards = [
    {
      id: 1,
      profile: bahram,
      name: "بهرام میرزایی",
      skill: "متخصص مغز و اعصاب",
      loc: "گاندی شمالی برادران شریفی پلاک 55 واحد 11",
      tel: "02122877889",
      type: "حضوری",
      date: "1403/06/28 ساعت 14:30",
      code: "16120784",
      price: "50,000 تومان",
    },
    {
      id: 2,
      profile: bahram,
      name: "بهرام میرزایی",
      skill: "متخصص مغز و اعصاب",
      loc: "گاندی شمالی برادران شریفی پلاک 55 واحد 11",
      tel: "02122877889",
      type: "حضوری",
      date: "1403/06/28 ساعت 14:30",
      code: "16120784",
      price: "50,000 تومان",
    },
    {
      id: 3,
      profile: bahram,
      name: "بهرام میرزایی",
      skill: "متخصص مغز و اعصاب",
      loc: "گاندی شمالی برادران شریفی پلاک 55 واحد 11",
      tel: "02122877889",
      type: "حضوری",
      date: "1403/06/28 ساعت 14:30",
      code: "16120784",
      price: "50,000 تومان",
    },
    {
      id: 4,
      profile: bahram,
      name: "بهرام میرزایی",
      skill: "متخصص مغز و اعصاب",
      loc: "گاندی شمالی برادران شریفی پلاک 55 واحد 11",
      tel: "02122877889",
      type: "حضوری",
      date: "1403/06/28 ساعت 14:30",
      code: "16120784",
      price: "50,000 تومان",
    },
  ];
  const VistitTypeFilters = [
    { id: 1, type: "همه", isSelect: true, icon: null },
    { id: 1, type: "آنلاین", isSelect: true, icon: onlineIcon },
    { id: 1, type: "حضوری", isSelect: true, icon: hozoriIcon },
  ];
  return (
    <div dir="rtl" className=" bg-[#F6FBFF] w-full">
      <Navbar />
      <div className=" flex w-full">
        <UserPanelMenue />
        <div className=" w-[82%] flex flex-col gap-10 items-center pb-10">
          <div className=" w-[90%] flex justify-between">
            <DatePickerComponent title="از تاریخ" />
            <DatePickerComponent title="تا تاریخ" />
            <SelectFilter title="نام پزشک" />
            <SelectFilter title="محل ویزیت" />
            <SelectFilter title="تخصص" />
          </div>
          <div className=" px-10 py-5 w-[90%] flex flex-col  bg-white rounded-xl gap-10 shadow-md border ">
            <div className=" border-b pb-5 w-full flex items-center gap-5">
              <h5>نوع نوبت:</h5>
              {VistitTypeFilters.map((item) => {
                return (
                  <button
                    key={item.id}
                    className=" flex justify-center w-20 items-center p-2 gap-1 bg-[rgba(203,203,203,0.17)] rounded-md"
                  >
                    {item.icon && (
                      <Image src={item.icon} alt="icon" width={24} />
                    )}
                    {item.type}
                  </button>
                );
              })}
            </div>
            <div className=" flex flex-col gap-5 items-center justify-center">
              {cards.map((item) => {
                return (
                  <div
                    className=" w-full p-3 flex flex-col border-2 rounded-lg"
                    key={item.id}
                  >
                    <div className=" flex items-start justify-start gap-5 pb-5 border-b border-dashed">
                      <Image
                        src={item.profile}
                        width={83}
                        alt="profile"
                        className=" rounded-full border border-[#005DAD]"
                      />
                      <div className=" flex justify-between items-center w-full">
                        <div className=" flex gap-5 flex-col">
                          <div className=" flex flex-col justify-center">
                            <h5>{item.name}</h5>
                            <p className=" text-sm text-[#757575]">
                              {item.skill}
                            </p>
                          </div>
                          <div className=" flex">
                            <h5>محل ویزیت :</h5>
                            <p className=" text-[#005DAD]">{item.loc}</p>
                          </div>
                          <div className=" flex">
                            <h5>شماره تماس:</h5>
                            <p className=" text-[#005DAD]">{item.tel}</p>
                          </div>
                        </div>
                        <div className=" flex gap-5 flex-col">
                          <div className=" flex items-center">
                            <h5>روش نوبت دهی : </h5>
                            <h5 className=" text-[#005DAD] flex justify-center items-center">
                              <Image
                                src={hozoriIcon_blue}
                                width={24}
                                alt="icon"
                              />
                              حضوری
                            </h5>
                          </div>
                          <div className=" flex">
                            <h5>تاریخ و ساعت :</h5>
                            <p className=" text-[#005DAD]">{item.date}</p>
                          </div>
                          <div className=" flex">
                            <h5>کد رهگیری:</h5>
                            <p className=" text-[#005DAD]">{item.code}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" pt-10 pb-3 flex justify-between pr-[100px] items-center">
                      <div className=" flex">
                        <h5>پرداختی:</h5>
                        <h5 className=" text-[#005DAD]">{item.price}</h5>
                      </div>
                      <button className=" w-32 p-1 text-[#00BA00] border border-[#00BA00] rounded-lg bg-[rgba(183,240,183,0.55)]">
                        ثبت نظر
                      </button>
                    </div>
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
