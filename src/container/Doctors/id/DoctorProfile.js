import Image from "next/image";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import doctorProfileImg from "../../../../public/pics/user-profile.png";
import { IoLocationOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import map from "../../../../public/pics/map.png";
import { AiFillLike } from "react-icons/ai";
import star from "../../../../public/pics/star.png";
import personFrame from "../../../../public/pics/frame.png";
import doctorSkillFrame from "../../../../public/pics/doctor-skill-frame.png";
import experinceFrame from "../../../../public/pics/experience-frame.png";
import imanKhosravi from "../../../../public/pics/ImanKhosravi.png";
import smmile from "../../../../public/pics/Smile vector.png";
import clock from "../../../../public/pics/clock.png";
import maqalepic from "../../../../public/pics/ocdMaqale.png";
import bookIcon from "../../../../public/pics/book.png";
import AcordinDoctorpanel from "../../../components/AcordinDoctorpanel";
import VisitSection from "./VisitSection";

import { SabteNazarButton } from "@/components/Buttons/Button";
function DoctorProfile() {
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
      <div className=" pt-10 min-h-[1582px]  flex w-full items-start justify-between px-20 ">
        <div className=" flex flex-col  items-center w-[57%] bg-white rounded-xl">
          <div className="w-[90%] flex py-10 flex-col gap-10">
            <div className=" w-full px-4 gap-4 flex items-center bg-white shadow-lg h-[150px] rounded-2xl">
              <Image
                width={113}
                className=" w-[113px] border border-[#005DAD] rounded-full h-[113px]"
                alt="doctor-profile"
                src={doctorProfileImg}
              />
              <div className=" flex w-72 flex-col justify-center gap-2">
                <h2 className=" text-[22px]">بهرام میرزایی</h2>
                <p className=" text-[14px] text-[#757575]">متخصص مغز و اعصاب</p>
                <p className="flex items-center gap-1">
                  <IoLocationOutline />
                  تهران
                </p>
              </div>
              <div className=" flex flex-col items-end justify-center gap-2">
                <h2 className=" flex items-center gap-2 text-[16x] ">
                  <CiBookmark className=" text-2xl" />
                  ذخیره
                  <span className=" text-2xl text-[#757575]">|</span>
                  <span className=" text-[#005DAD] flex items-center ">
                    <CiShare2 className=" text-2xl" />
                    اشتراک گذاری
                  </span>
                </h2>
                <p className=" rounded flex justify-center p-1 bg-[#F0F0F0] text-[#1F7168] text-[12px] items-center">
                  <AiFillLike className=" text-xl" />
                  97% پیشنهاد کابران دکتر رزرو
                </p>
                <p className="flex items-center gap-1">
                  <Image width={22} src={star} alt="star" />
                  4.5/5 از (نظر 320)
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <h2 className=" text-[16px] flex items-center">
                <Image width={24} src={personFrame} alt="person-frame" />
                درباره پزشک
              </h2>
              <p className=" text-[#757575]">
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
                جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات
              </p>
            </div>
            <div className=" flex flex-col gap-5 border-b-2 pb-10">
              <div className=" flex gap-4">
                <h2 className=" text-[16px] flex items-center">
                  <IoLocationOutline className=" text-xl text-[#005DAD]" />
                  نشانی :
                </h2>
                <button className=" gap-1 p-2 flex items-center border rounded-xl">
                  مطب ونک
                  <IoIosArrowDown />
                </button>
                <button className=" gap-1 p-2 flex border items-center rounded-xl">
                  بیمارستان کسری
                  <IoIosArrowDown />
                </button>
              </div>
              <Image src={map} alt="map" />
            </div>
            <div>
              <div className=" flex items-center">
                <Image width={28} src={experinceFrame} alt="" />
                <h2>تجربیات کابران: </h2>
              </div>
              <p className=" text-[#7E7E7E]">
                در ادامه می‌توانید تجربه مراجعه‌ی کاربران دیگر به دکتر بهرام
                میرزایی را بخوانید.در صورتی که شما هم از بیماران دکتر بهرام
                میرزایی بوده‌اید می‌توانید نظر خود را ثبت کنید.
              </p>
              <div className=" w-full flex items-end justify-end">
                <SabteNazarButton />
              </div>
            </div>
            <div className=" flex flex-col gap-8">
              {usersExperineces.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" rounded-xl flex-col flex py-2  items-center w-full h-[208px] shadow-[0_2px_15px_-5px_rgba(0,0,0,0.3)]"
                  >
                    <div className=" flex flex-col gap-5">
                      <div className="flex gap-10 px-10 items-center">
                        <Image src={imanKhosravi} alt="userpic" width={80} />
                        <div className=" w-72 flex gap-4 flex-col">
                          <h2 className=" text-[20px]">{item.name}</h2>
                          <p className=" text-[14px] text-[#757575]">
                            {item.date}
                          </p>
                        </div>
                        <div className=" flex gap-4 flex-col">
                          <div className=" flex gap-2">
                            {Array.from({ length: item.rate }).map(
                              (_, index) => {
                                return (
                                  <div className="" key={index}>
                                    <Image width={24} alt="" src={star} />
                                  </div>
                                );
                              }
                            )}
                          </div>
                          <p className=" text-[#005DAD] text-[14px]">
                            {item.visit}
                          </p>
                        </div>
                      </div>
                      <p className="  px-10 text-[#757575]">{item.caption}</p>
                      <div className=" border-t py-5 mx-10 flex justify-between">
                        <h2 className=" text-[#005DAD] flex items-center gap-1">
                          <Image width={16} alt="icon" src={smmile} />
                          این پزشک را پیشنهاد می‌کنم
                        </h2>
                        <h2 className=" text-[#757575] text-[14px] flex items-center gap-1">
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
        <div className=" w-[41%] gap-5 mb-10  flex flex-col">
          <VisitSection />

          <div className=" flex flex-col gap-4 py-5  items-center justify-center w-full bg-white rounded-xl ">
            <h2 className=" text-[20px]">مقالات پزشک</h2>
            <div className=" items-center justify-center flex flex-col gap-7">
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
      <div className=" w-[90%] bg-white flex  items-center flex-col rounded-xl min-h-[507px]">
        <div className=" flex  flex-col gap-10 py-10 justify-center w-[90%]">
          <h2 className=" text-[26px] flex  items-center gap-2">
            <Image width={32} src={bookIcon} alt="book-icon" />
            راهنمای نوبت گیری از دکتر بهرام میرزایی
          </h2>
          <AcordinDoctorpanel />
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
