import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import certicicate1 from "../../public/Pics/cetificate.png";
import certicicate2 from "../../public/Pics/cetificate2.png";
import certicicate3 from "../../public/Pics/cetificate3.png";
import certicicate4 from "../../public/Pics/cetificate4.png";
import { SiLinkedin } from "react-icons/si";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Image from "next/image";
import FooterAcordion from "./FooterAcordion";
import PhoneIcon from "../../public/Pics/footerIcons/phone-footer-icon.png";
import mailIcon from "../../public/Pics/footerIcons/mail-footer-icon.png";
import addressIcon from "../../public/Pics/footerIcons/address-footer-icon.png";

function Footer() {
  return (
    <div className=" mb-32 mt-36 lg:mb-0 lg:mt-28 w-full h-[595px] gap-10 flex justify-center items-center flex-col lg:border-t-4 ">
      <FooterAcordion />
      <div className="  hidden xl:flex flex-col w-full h-1/2">
        <div className=" hidden text-[22px]  lg:flex px-32 p-10 text-[#414141]">
          <h2 className=" w-44 ">دکتر سریع</h2>
          <h2 className=" w-44 ">خدمات</h2>
          <h2 className=" w-44 ">نیکو کاری</h2>
          <h2 className=" w-44 ">پشتیبانی</h2>
        </div>
        <div className=" hidden text-[16px] font-medium px-32 w-full lg:flex">
          <div className=" w-44 gap-5  text-[#757575] flex flex-col">
            <h2>سوالات متداول</h2>
            <h2>تماس با ما</h2>
            <h2>درباره ما</h2>
          </div>
          <div className=" w-44 gap-5  text-[#757575] flex flex-col">
            <h2>خدمات پزشکی در منزل</h2>
            <h2>مشاوره غیر حضوری</h2>
            <h2>مراکز درمانی</h2>
            <h2>نوبت دهی </h2>
          </div>

          <div className=" w-44 gap-5  text-[#757575] flex flex-col">
            <h2>درمانگر داوطلب</h2>
            <h2>بیشتر بدانید</h2>
            <h2>کمک مالی</h2>
          </div>
          <div className=" w-44 gap-5  text-[#757575] flex flex-col">
            <h2>شبکه های اجتماعی</h2>
            <h2>واحد انفورماتیک</h2>
            <h2>حریم شخصی</h2>
            <h2>تماس با ما</h2>
          </div>
          <div className=" mr-10 -mt-[75px] gap-3 flex flex-col">
            <h2 className=" text-[#414141] text-[18px] font-semibold">
              خبرنامه
            </h2>
            <p className=" text-[#757575] text-[14px]">
              برای اینکه از جدیدترین اخبار دکتر سریع جا نمونید...
            </p>
            <div className=" flex gap-5 ">
              <input
                placeholder="ایمیل خودرا اینجا واردکنید"
                className=" px-4 w-[336px] h-[48px] border rounded-xl border-[#919191]"
              />
              <button className=" text-white text-[16px] gap-2 flex justify-center items-center bg-[#005DAD] rounded-lg w-[100px]">
                ارسال
                <FiArrowLeftCircle />
              </button>
            </div>
            <p className=" text-[14px] text-[#919191]">
              تلاش ما ارائه بهترین خدمات ممکن به شما همراهان دکتر سریع است.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex-col lg:flex-row w-full lg:h-1/2 flex justify-between lg:px-32">
        <div className=" lg:hidden px-1 lg:mr-10 lg:-mt-[75px] gap-3 justify-center items-center flex flex-col">
          <h2 className=" w-11/12 text-[#414141] lg:text-[18px] font-semibold">
            خبرنامه
          </h2>
          <p className=" w-11/12 text-[#757575] text-[14px]">
            برای اینکه از جدیدترین اخبار دکتر سریع جا نمونید...
          </p>
          <div className=" w-full  justify-center flex gap-5 ">
            <input
              placeholder="ایمیل خودرا اینجا واردکنید"
              className=" lg:px-4 px-2 lg:w-[336px] w-[242px] h-[38px] text-xs lg:text-base lg:h-[48px] border rounded-xl border-[#919191]"
            />
            <button className=" text-white text-[14px] lg:text-[16px] gap-2 flex justify-center items-center bg-[#005DAD] rounded-lg w-[78px] lg:w-[100px]">
              ارسال
              <FiArrowLeftCircle />
            </button>
          </div>
          <p className=" text-[14px] text-[#919191]">
            تلاش ما ارائه بهترین خدمات ممکن به شما همراهان دکتر سریع است.
          </p>
        </div>
        <div className=" text-[#414141] flex flex-col gap-8 items-start mr-5">
          <span className="flex justify-center gap-3 items-start">
            <Image width={24} src={PhoneIcon} />
            <h2>
              تماس با پشتیبانی:
              <br />
              021-1111111 | 021-2222222
            </h2>
          </span>
          <span className="flex  justify-center gap-3 items-center">
            <Image width={24} src={mailIcon} />
            <h2> نشانی پست الکترونیک:example@gmail.com</h2>
          </span>
          <span className="flex justify-center gap-3 items-center">
            <Image width={24} src={addressIcon} />

            <h2>نشانی: تهران</h2>
          </span>
        </div>
        <div className=" flex flex-col items-center justify-center gap-5">
          <div className=" flex">
            <Image alt="" width={80} src={certicicate1} />
            <Image alt="" width={80} src={certicicate2} />
            <Image alt="" width={80} src={certicicate3} />
            <Image alt="" width={80} src={certicicate4} />
          </div>
        </div>
      </div>

      <div className=" flex flex-col w-[85%] justify-between">
        <div className=" justify-center items-center flex gap-10">
          <SiLinkedin className=" text-[#5F5F5F] text-4xl" />
          <PiInstagramLogoFill className=" text-[#5F5F5F] text-4xl" />
          <FaTelegramPlane className=" text-[#5F5F5F] text-4xl" />
          <IoLogoYoutube className=" text-[#5F5F5F] text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
