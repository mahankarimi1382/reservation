import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import ErorTextImg from "../../public/Pics/404text.png";
import ErorText from "../../public/Pics/404Icon.png";
import Link from "next/link";
function not_found() {
  return (
    <div
      dir="rtl"
      className=" gap-5 w-full h-screen flex flex-col justify-center bg-[#B7DFFF] items-center"
    >
      <div className=" relative flex justify-center items-center ">
        <Image src={ErorText} alt="icon" width={122} />

        <div className=" absolute w-[776px]">
          <Image src={ErorTextImg} alt="icon" width={776} />
        </div>
      </div>
      <h4 className=" text-4xl font-extrabold">مشکلی پیش آمده است !</h4>
      <p className=" text-3xl font-medium">متاسفانه صفحه مورد نظر پیدا نشده</p>
      <Link href="/">
        <button className=" rounded-lg p-4 px-16 bg-[#005DAD] text-white">
          بازگشت به صفحه اول
        </button>
      </Link>
    </div>
  );
}

export default not_found;
