import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import medicalCenterAvatar from "../../../public/Pics/medicalCenterAvatar.png";
import { IoIosArrowBack } from "react-icons/io";
import safelocationicon from "../../../public/Pics/safe-location-icon.png";
import trendDownIcon from "../../../public/Pics/trend-down-icon.png";
import trendupicon from "../../../public/Pics/trend-up-icon.png";
import timeIcon from "../../../public/Pics/time-icon.png";
import Footer from "@/components/Footer";
const cards = [
  {
    id: 1,
    title: "کاهش نرخ کنسلی",
    icon: timeIcon,
    caption:
      "پرداخت حق ویزیت به صورت آنلاین باعث شده تا تنها بیمارانی اقدام به دریافت نوبت کنند که واقعا قصد مراجعه به مطب را دارند. این موضوع شما را در بهبود مدیریت مطب و کاهش عدم مراجعه یاری می دهد.",
  },
  {
    id: 2,
    title: "تبلیغات",
    icon: trendupicon,
    caption:
      "میلیون ها بیماری که ماهانه به وبسایت دکتر رزرو مراجعه می کنند می توانند شما را در جایگاه های تبلیغاتی متنوع آن مشاهده کرده و با شما ارتباط بگیرند.",
  },
  {
    id: 3,
    title: "مشاوره حضوری",
    icon: trendDownIcon,
    caption:
      "روزها و ساعاتی که تمایل به ویزیت بیمار دارید بر روی صفحه اختصاصی شما در دکتر رزرو قرار میگیرد. بیماران بعد از رزرو نوبت و پرداخت مبلغ ویزیت در مطب حاضر خواهند شد.",
  },
  {
    id: 4,
    title: "مشاوره آنلاین",
    icon: safelocationicon,
    caption:
      "بدون حضور در مطب و در هر زمان و مکانی با بیماران بصورت غیرحضوری در ارتباط باشید.اتاق مشاوره دکتر رزرو امکان مشاوره تلفنی، ویدئویی و متنی را در بستری امن و بدون مشخص شدن شماره شما فراهم می کند",
  },
];
function page() {
  return (
    <div
      dir="rtl"
      className=" w-full flex flex-col justify-center items-center"
    >
      <Navbar />
      <div className=" w-[90%] gap-10 flex flex-col items-center">
        <div className=" w-full rounded-xl gap-10 bg-[#DBEDFF] flex px-5 ">
          <Image src={medicalCenterAvatar} alt="doctor-avatar" width={423} />
          <div className=" flex flex-col justify-center items-start gap-10 w-[60%]">
            <h2 className=" text-2xl">عضویت مرکز درمانی در دکتر رزرو</h2>
            <p className=" text-lg">
              دکتر رزرو پلتفرم رزرو آنلاین پزشک به صورت حضوری و مشاوره آنلاین.
              با ثبت درخواست برای عضویت در دکتر رزرو، صفحه نوبت دهی اختصاصی شما
              ساخته می شود و بیماران میتوانند در زمان جست و جوی نام شما نوبت خود
              را نیز خریداری کنند.
            </p>
            <button className=" text-lg flex justify-center items-center gap-3 px-16 p-2 text-white bg-[#005DAD] rounded-lg">
              عضویت مراکز درمانی
              <IoIosArrowBack />
            </button>
          </div>
        </div>
        <h2 className=" text-2xl">خدمات دکتر رزرو برای مراکز درمانی</h2>
        <div className=" flex justify-between w-full items-center ">
          {cards.map((item) => {
            return (
              <div
                key={item.id}
                className=" border-[#BAD6FB] border-2 shadow-md w-[302px] aspect-square rounded-xl flex flex-col items-center justify-start gap-5 p-4"
              >
                <Image src={item.icon} width={56} alt="icon" />
                <h4 className=" text-xl text-[#005DAD]">{item.title}</h4>
                <p className=" text-[#7D7D7D]">{item.caption}</p>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default page;
