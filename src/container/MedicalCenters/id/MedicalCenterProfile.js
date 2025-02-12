"use client";
import Image from "next/image";
import React from "react";
import karenLogo from "../../../../public/Pics/karenLogo.png";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import taminejtemaei from "../../../../public/Pics/taminejtemaei.png";
import gooshiPezeshki from "../../../../public/Pics/gooshiPezeshki.png";
import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

import MapComponent from "@/components/MapComponent";
import LoadingComponent from "@/components/LoadingComponent";
import { AiFillLike } from "react-icons/ai";
import {
  EmtyReservButt,
  MatabShowButt,
  SeeDoctorNazaratButt,
} from "@/components/Buttons/Button";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Pagination } from "@mui/material";

function MedicalCenterProfile() {
  return (
    <div className="flex pt-10 justify-center bg-[#f5f5f5]">
      <div className=" flex flex-col gap-10 w-[90%]">
        <div className=" w-full flex justify-center gap-8 items-center flex-col rounded-xl bg-white h-[620px]">
          <div className=" w-[90%] px-10 py-5 h-[208px] border border-[#005DAD] rounded-2xl">
            <div className=" w-full flex -mb-5 justify-end">
              <h2 className=" flex items-center gap-2 text-[16x] ">
                <CiBookmark className=" text-2xl" />
                ذخیره
                <span className=" text-2xl text-[#757575]">|</span>
                <span className=" text-[#005DAD] flex items-center ">
                  <CiShare2 className=" text-2xl" />
                  اشتراک گذاری
                </span>
              </h2>
            </div>
            <div className=" flex items-center justify-center">
              <Image
                src={karenLogo}
                alt="logo"
                width={140}
                className=" rounded-full border border-[#005DAD]"
              />
              <div className=" flex flex-col gap-8 px-5">
                <h2 className=" text-2xl text-[#005DAD]">کلینیک زیبایی کارن</h2>
                <p>
                  کلینیک زیبایی کارن با بیش از 10 سال سابقه کار در لاین های
                  زیبایی اعم از جراحی پلاستیک بینی ، ترزیق فیلر و ژل، لیفت ابرو
                  و پیشانی و لیزر موهای زائد و لیزر جایه بخیه با بهترین دستگاه
                  آمریکایی هستش.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex w-[90%] gap-5">
            <div className=" w-[40%] justify-between flex flex-col">
              <div className=" w-full h-[151px] justify-center gap-5 px-5 border flex flex-col border-[#005DAD] rounded-2xl">
                <h2 className=" text-xl text-[#005DAD]">اطلاعات تماس</h2>
                <div className=" flex  items-center gap-2">
                  <BsTelephone className=" text-[#005DAD] text-lg" />
                  <h2>شماره تماس: 02122133124 _ 02122987654</h2>
                </div>
                <div className=" flex  items-center gap-2">
                  <BsTelephone className=" text-[#005DAD] text-lg" />
                  <h2>نوبت دهی تلفنی 24 ساعته : ندارد</h2>
                </div>
              </div>
              <div className=" w-full h-[151px] rounded-2xl">
                <div className=" w-full h-[151px] justify-center gap-5 px-5 border flex flex-col border-[#005DAD] rounded-2xl">
                  <h2 className=" text-xl text-[#005DAD]">
                    بیمه های طرف قرارداد کلینیک کارن
                  </h2>
                  <div className=" flex  items-center gap-2">
                    <Image src={taminejtemaei} width={107} alt="icon" />
                    <Image src={taminejtemaei} width={107} alt="icon" />
                    <Image src={taminejtemaei} width={107} alt="icon" />
                    <Image src={taminejtemaei} width={107} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60%] h-[327px] border gap-8 px-5 border-[#005DAD] flex flex-col justify-center rounded-2xl">
              <h2 className=" text-xl text-[#005DAD]">آدرس </h2>
              <div className=" flex items-center">
                <IoLocationOutline className=" text-[#005DAD] text-xl" />
                <h5>
                  تهران: فلکه دوم صادقیه پشت بیمارستان ابن سینا ساختمان پزشکان
                  فدک طبقه اول
                </h5>
              </div>
              <div className=" w-full h-40 flex justify-center items-center">
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-20">
          <div className=" w-[40%] bg-white rounded-2xl py-5 h-[579px]">
            <h2 className=" pb-2 px-5 flex font-semibold items-center">
              <Image width={30} src={gooshiPezeshki} alt="icon" />
              تخصص ها
            </h2>
            <div className=" w-full justify-center items-center gap-5 flex flex-col">
              <input
                className=" px-2 outline-none w-[90%] h-[54px] rounded-xl border shadow-lg"
                placeholder="لطفا تخصص مورد نظر خود را جستجو کنید"
              />
              <div className=" px-2 outline-none items-center gap-3 flex w-[90%] h-[54px] shadow-md rounded-xl border">
                <input className=" w-5 h-5" type="checkbox" />
                <h2>جراحی پلاستیک بینی</h2>
              </div>
              <div className=" px-2 outline-none items-center gap-3 flex w-[90%] h-[54px] rounded-xl border shadow-md">
                <input className=" w-5 h-5" type="checkbox" />
                <h2>جراحی پلاستیک بینی</h2>
              </div>{" "}
              <div className=" px-2 outline-none items-center gap-3 flex w-[90%] h-[54px] rounded-xl border shadow-md">
                <input className=" w-5 h-5" type="checkbox" />
                <h2>جراحی پلاستیک بینی</h2>
              </div>{" "}
              <div className=" px-2 outline-none items-center gap-3 flex w-[90%] h-[54px] rounded-xl border shadow-md">
                <input className=" w-5 h-5" type="checkbox" />
                <h2>جراحی پلاستیک بینی</h2>
              </div>{" "}
              <div className=" px-2 outline-none items-center gap-3 flex w-[90%] h-[54px] rounded-xl border shadow-md">
                <input className=" w-5 h-5" type="checkbox" />
                <h2>جراحی پلاستیک بینی</h2>
              </div>{" "}
              <div className=" px-2 outline-none items-center gap-3 flex w-[90%] h-[54px] rounded-xl border shadow-md">
                <input className=" w-5 h-5" type="checkbox" />
                <h2>جراحی پلاستیک بینی</h2>
              </div>
            </div>
          </div>
          <div className=" w-2/3 mb-10 flex flex-col gap-5">
            <div className=" rounded-2xl px-3 items-center justify-center gap-1 flex h-[60px] w-[100%] bg-white ">
              <CiSearch className=" text-[#919191] text-3xl" />

              <input
                className=" text-sm outline-none h-full w-full"
                placeholder="جستجو پزشک،تخصص..."
              />
            </div>
            <div className=" w-full justify-center items-center flex flex-col gap-10">
              <div className=" w-full">
                {filtredBoxes.map((item) => {
                  return (
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      key={item.id}
                      className="whitespace-nowrap overflow-hidden text-ellipsis min-w-[100px] h-[40px] m-[5px] px-[10px]"
                    >
                      {item.specialties}
                    </button>
                  );
                })}
              </div>
              {isSerchDoctorLoading && <LoadingComponent />}
              {doctors.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" rounded-2xl px-10 gap-6 flex flex-col w-full bg-white pb-2 min-h-[400px]"
                  >
                    <div className="flex justify-between  border-[#CBCBCB] border-b py-7">
                      <div className=" w-1/2  flex items-center justify-start gap-5">
                        <Image
                          width={90}
                          height={90}
                          className=" w-[90px] h-[90px] border-2  border-[#005DAD] rounded-full"
                          src={doctorprof}
                          alt="doctor-prof"
                        />
                        <div className=" flex flex-col gap-5">
                          <h2 className=" text-[22px]">
                            {item.doctorName} {item.doctorFamily}
                          </h2>
                          <h2 className=" text-[#757575]">{item.specialist}</h2>
                        </div>
                      </div>
                      <div className=" flex flex-col items-start justify-center gap-2 ">
                        <div className=" flex gap-1">
                          {Array.from({ length: 5 }).map((_, index) => {
                            return (
                              <div key={index}>
                                <Image width={22} alt="" src={star} />
                              </div>
                            );
                          })}
                        </div>
                        <h2 className="  rounded flex items-center justify-center gap-1 text-[#1F7168]">
                          <AiFillLike className=" text-lg" />
                          {item.recomend}
                        </h2>
                        <SeeDoctorNazaratButt />
                      </div>
                    </div>
                    <h2 className=" text-lg">
                      خدمات :
                      <span className=" text-[#7E7E7E]">{item.skills}</span>
                    </h2>
                    <div className=" flex gap-5 text-lg">
                      <h2>روش نوبت دهی : </h2>
                      <h2 className=" flex gap-2">
                        <Image width={24} src={monitor} alt="monitor-icon" />
                        ویزیت آنلاین
                      </h2>

                      <h2 className=" flex gap-2">
                        <Image width={24} src={hospital} alt="monitor-icon" />
                        ویزیت حضوری
                      </h2>
                    </div>

                    <div className=" w-full flex gap-4">
                      <MatabShowButt items={item.doctorTreatmentCenterList} />
                    </div>

                    {/* <div className=" flex gap-3 text-lg pb-5 border-b">
              <Image src={barezvijegi} alt="icon" width={24} />
              <h2> ویژگی های بارز پزشک :</h2>
              {item.charecter.map((item2) => {
                return (
                  <h2 className="text-[#1F7168]" key={item2.id}>
                    {item2.caption}
                  </h2>
                );
              })}
            </div> */}
                    <div className=" -mt-3 flex justify-between">
                      <EmtyReservButt docDetail={item} />
                      <Link
                        href={`/doctors/${item.id}`}
                        className=" flex justify-center p-2 px-4 rounded-md text-white items-center bg-[#005DAD] "
                      >
                        نوبت بگیرید
                        <IoIosArrowRoundBack className=" text-2xl" />
                      </Link>
                    </div>
                  </div>
                );
              })}
              <Pagination
                onChange={handleChange}
                page={currentPageDoctorSearch}
                count={totalPages}
                color="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalCenterProfile;
