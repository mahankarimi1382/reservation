"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import doctorProfileImg from "../../../../public/Pics/user-profile.png";
import { IoLocationOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import map from "../../../../public/Pics/map.png";
import { AiFillLike } from "react-icons/ai";
import star from "../../../../public/Pics/star.png";
import personFrame from "../../../../public/Pics/frame.png";
import doctorSkillFrame from "../../../../public/Pics/doctor-skill-frame.png";
import experinceFrame from "../../../../public/Pics/experience-frame.png";
import imanKhosravi from "../../../../public/Pics/ImanKhosravi.png";
import smmile from "../../../../public/Pics/Smile vector.png";
import clock from "../../../../public/Pics/clock.png";
import maqalepic from "../../../../public/Pics/ocdMaqale.png";
import bookIcon from "../../../../public/Pics/book.png";
import AcordinDoctorpanel from "../../../components/AcordinDoctorpanel";
import VisitSection from "./VisitSection";

import { MatabShowButt, SabteNazarButton } from "@/components/Buttons/Button";
import { get_doctor_profile_by_id } from "@/api/ApiCalling";
import { doctorProfileStore, reservationStore } from "@/store/Store";
import LoadingComponent from "@/components/LoadingComponent";
import { RateCounter } from "@/utils/RateCounter";
function DoctorProfile() {
  const { setDoctorNezamCode } = reservationStore();
  const { doctorId } = doctorProfileStore();
  console.log(doctorId);
  const [doctorDetails, setDoctorDetails] = useState();
  const [doctorTreatmentCenters, setDoctorTreatmentCenters] = useState([]);
  const { setDoctorSpecialties } = reservationStore();
  console.log(doctorTreatmentCenters);
  console.log(doctorDetails);
  const [isLoading, setIsLoading] = useState(true);
  const getDoctor = async () => {
    const data = await get_doctor_profile_by_id(doctorId);
    if (data) {
      setDoctorDetails(data);
      setDoctorTreatmentCenters(
        data.smeProfile.doctors[0].doctorTreatmentCenters
      );
      setDoctorSpecialties(data.smeProfile.doctors[0].specialist.name)
      setDoctorNezamCode(data.smeProfile.doctors[0].codeNezam);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (doctorId) {
      getDoctor();
    }
  }, [doctorId]);
  const usersExperineces = [
    {
      id: 1,
      name: "ایمان خسروی",
      date: "1402/10/12",
      rate: 5,
      visit: "ویزیت شده در مطب ونک",
      caption: "تشخیص دکتر و تجویز دارو فوق العاده هستش سپاس فراوان",
      time: 15,
    },
    {
      id: 2,
      name: "ایمان خسروی",
      date: "1402/10/12",
      rate: 5,
      visit: "ویزیت شده در مطب ونک",
      caption: "تشخیص دکتر و تجویز دارو فوق العاده هستش سپاس فراوان",
      time: 15,
    },
  ];
  const maqalat = [
    {
      id: 1,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
    {
      id: 2,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
    {
      id: 3,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
    {
      id: 4,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
    {
      id: 5,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
    {
      id: 6,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
    {
      id: 7,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
    {
      id: 8,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
    {
      id: 9,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
    {
      id: 10,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
    {
      id: 11,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
    {
      id: 12,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
    {
      id: 13,
      topic: "اختلال وسواس فکری چیست؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و.....",
    },
  ];
  return (
    <div className=" pb-20  min-h-[2150px] flex flex-col w-full justify-between items-center bg-[#f5f5f5]">
      {isLoading && <LoadingComponent />}
      <div className=" pt-10 min-h-[1582px]  flex-col lg:flex-row   flex w-full items-center lg:items-start   lg:justify-between lg:px-20 ">
        <div className=" flex flex-col  items-center w-[95%] lg:w-[57%] bg-white rounded-xl">
          <div className="w-[90%] flex py-10 flex-col gap-4 lg:gap-10">
            <div className=" w-full px-1 gap-1 lg:px-4 lg:gap-4 text-sm xl:text-base flex items-center bg-white shadow-lg h-[111px] lg:h-[150px] rounded-2xl">
              <Image
                width={113}
                className=" w-[50px] h-[50px] lg:w-[113px] border border-[#005DAD] rounded-full lg:h-[113px]"
                alt="doctor-profile"
                src={doctorProfileImg}
              />
              <div className=" flex w-72 flex-col justify-center gap-2">
                <h2 className=" text-sm lg:text-[22px]">
                  {doctorDetails && doctorDetails.doctorName}{" "}
                  {doctorDetails && doctorDetails.doctorFamily}
                </h2>
                <p className=" text-xs lg:text-[14px] text-[#757575]">
                  {doctorDetails &&
                    doctorDetails.smeProfile.doctors[0].specialist.name}
                </p>
                <p className="flex items-center gap-1">
                  <IoLocationOutline />
                  تهران
                </p>
              </div>
              <div className=" flex flex-col items-end justify-center gap-2">
                <h2 className=" flex items-center lg:gap-2 gap-1 text-xs lg:text-[16x] ">
                  <CiBookmark className=" text-2xl" />
                  ذخیره
                  <span className=" text-2xl text-[#757575]">|</span>
                  <span className=" text-[#005DAD] lg:text-base text-xs flex items-center ">
                    <CiShare2 className=" text-2xl" />
                    اشتراک گذاری
                  </span>
                </h2>
                <p className=" rounded flex justify-center p-1 lg:bg-[#F0F0F0] text-[#1F7168] text-[12px] items-center">
                  <AiFillLike className=" text-xs lg:text-xl" />
                  97% پیشنهاد کابران
                </p>
                <div className=" flex lg:hidden">
                  <RateCounter rate={5} width={16} />
                </div>
                <p className="lg:flex hidden items-center gap-1">
                  <Image width={22} src={star} alt="star" />
                  4.5/5 از (نظر 320)
                </p>
              </div>
            </div>
            <div className=" w-full flex lg:hidden">
              <VisitSection id={doctorId} />
            </div>
            <div className="  flex flex-col gap-2">
              <h2 className=" lg:text-[16px] flex items-center">
                <Image width={24} src={personFrame} alt="person-frame" />
                درباره پزشک
              </h2>
              <p className=" lg:text-base text-sm text-[#757575]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگره ا و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان لازم است، و برای شرایط فعلی تکنولوژی
                مورد نیاز و کاربرد های متنوع با هدف بهبود ابزارهای کاربردی می
                باشد، کتابهای زیادی در شصت.لورم ایپسوم متن ساختگی با تولید سادگی
                نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                و متونبلکه روزنامه و مجله در ستون و سطرآنچنان لازم است، و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                ابزارها کاربردی می باشد.
              </p>
            </div>
            <div className=" flex items-center border-y-2 py-5   gap-1">
              <Image width={28} src={doctorSkillFrame} alt="" />
              <h2>تخصص پزشک: </h2>
              <p className=" text-[#7E7E7E]">
                {doctorDetails &&
                  doctorDetails.smeProfile.doctors[0].specialist.name}
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center gap-5 border-b-2 pb-10">
              <div className=" flex gap-4 w-full">
                {/* <h2 className=" text-[16px] flex items-center">
                  <IoLocationOutline className=" text-xl text-[#005DAD]" />
                  نشانی :
                </h2> */}

                <MatabShowButt items={doctorTreatmentCenters} />
              </div>
              <Image src={map} alt="map" />
            </div>
            <div>
              <div className=" flex lg:hidden flex-col gap-4 py-5  items-center justify-center w-full bg-white rounded-xl ">
                <h2 className=" text-[20px]">مقالات پزشک</h2>
                <div className=" items-center xl:text-base text-sm justify-center flex flex-col gap-7">
                  {maqalat.slice(0, 4).map((item) => {
                    return (
                      <div
                        key={item.id}
                        className=" border rounded-xl shadow-md items-center justify-center gap-2 px-2 w-[95%] p-2 lg:p-0 lg:h-[169px] flex"
                      >
                        <Image src={maqalepic} width={110} alt="pic" />
                        <div className=" lg:text-base text-sm flex flex-col gap-2 lg:gap-5">
                          <h2>{item.topic}</h2>
                          <p className=" text-[#757575] text-[12px]">
                            {item.caption}
                          </p>
                          <div className=" w-[90%] flex justify-end">
                            <button className=" text-[#005DAD] lg:text-base text-xs flex justify-center items-center">
                              خواندن مقاله
                              <IoIosArrowRoundBack className=" lg:text-xl" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className=" w-[90%] flex justify-end">
                  <button className=" text-[#005DAD] rounded-xl border border-[#005DAD] p-2">
                    مشاهده همه مقالات
                  </button>
                </div>
              </div>
              <div className=" flex items-center">
                <Image width={28} src={experinceFrame} alt="" />
                <h2>تجربیات کابران: </h2>
              </div>
              <p className=" text-sm lg:text-base text-[#7E7E7E]">
                در ادامه می‌توانید تجربه مراجعه‌ی کاربران دیگر به دکتر بهرام
                میرزایی را بخوانید.در صورتی که شما هم از بیماران دکتر بهرام
                میرزایی بوده‌اید می‌توانید نظر خود را ثبت کنید.
              </p>
              <div className=" w-full flex items-end justify-end">
                <SabteNazarButton />
              </div>
            </div>
            <div className=" flex justify-center flex-col gap-2 lg:gap-8">
              {usersExperineces.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" rounded-xl  flex-col flex lg:py-2  items-center w-full lg:h-[208px] shadow-[0_2px_15px_-5px_rgba(0,0,0,0.3)]"
                  >
                    <div className=" flex w-full flex-col lg:gap-5">
                      <div className="flex justify-between px-2 lg:px-10 items-center">
                        <div className=" gap-2 flex lg:gap-10 items-center">
                          <Image
                            src={imanKhosravi}
                            alt="userpic"
                            className=" w-[44px] lg:w-[80px]  "
                            width={80}
                          />
                          <div className=" lg:w-72 flex lg:gap-4 gap-2 flex-col">
                            <h2 className=" lg:text-[20px]">{item.name}</h2>
                            <p className="text-[14px] text-[#757575]">
                              {item.date}
                            </p>
                          </div>
                        </div>
                        <div className=" flex lg:items-start items-end gap-4 flex-col">
                          <div className=" flex gap-1 lg:gap-2">
                            {Array.from({ length: item.rate }).map(
                              (_, index) => {
                                return (
                                  <div className="" key={index}>
                                    <Image
                                      className=" w-[12px] lg:w-[24px]"
                                      width={24}
                                      alt=""
                                      src={star}
                                    />
                                  </div>
                                );
                              }
                            )}
                          </div>
                          <p className=" text-[#005DAD] text-xs lg:text-[14px]">
                            {item.visit}
                          </p>
                        </div>
                      </div>
                      <p className="  px-2 text-xs lg:text-base lg:px-10 text-[#757575]">
                        {item.caption}
                      </p>
                      <div className=" px-2 lg:px-0 py-1 border-t lg:py-5 lg:mx-10 flex justify-between">
                        <h2 className=" text-[#005DAD] text-[10px] lg:text-base flex items-center gap-1">
                          <Image
                            width={16}
                            className=" w-[12px] lg:w-[16px]"
                            alt="icon"
                            src={smmile}
                          />
                          این پزشک را پیشنهاد می‌کنم
                        </h2>
                        <h2 className=" text-[#757575] text-[10px] lg:text-[14px] flex items-center gap-1">
                          <Image width={16} src={clock} alt="icon" />
                          زمان انتظار : {item.time} دقیقه
                        </h2>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="  lg:w-[41%] gap-5 mb-10  flex flex-col">
          <div className=" hidden w-full lg:flex">
            <VisitSection id={doctorId} />
          </div>
          <div className=" hidden lg:flex flex-col gap-4 py-5  items-center justify-center w-full bg-white rounded-xl ">
            <h2 className=" text-[20px]">مقالات پزشک</h2>
            <div className=" items-center xl:text-base text-sm justify-center flex flex-col gap-7">
              {maqalat.slice(0, 4).map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" border rounded-xl shadow-md items-center justify-center gap-2 px-2 w-[95%] h-[169px] flex"
                  >
                    <Image src={maqalepic} width={147} alt="pic" />
                    <div className=" flex flex-col gap-5">
                      <h2>{item.topic}</h2>
                      <p className=" text-[#757575] text-[12px]">
                        {item.caption}
                      </p>
                      <div className=" w-[90%] flex justify-end">
                        <button className=" text-[#005DAD] flex justify-center items-center">
                          خواندن مقاله
                          <IoIosArrowRoundBack className=" text-xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" w-[90%] flex justify-end">
              <button className=" text-[#005DAD] rounded-xl border border-[#005DAD] p-2">
                مشاهده همه مقالات
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" w-[90%] bg-white flex  items-center flex-col rounded-xl min-h-[507px]">
        <div className=" flex  flex-col gap-10 py-10 justify-center w-[90%]">
          <h2 className=" text-[26px] flex  items-center gap-2">
            <Image width={32} src={bookIcon} alt="book-icon" />
            راهنمای نوبت گیری از دکتر بهرام میرزایی
          </h2>
          <AcordinDoctorpanel />
        </div>
      </div> */}
    </div>
  );
}

export default DoctorProfile;
