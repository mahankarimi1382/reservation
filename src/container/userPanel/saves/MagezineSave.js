import Image from "next/image";
import React from "react";
import pesorasos from "../../../../public/Pics/pesoriasos.png";
import doctorProf from "../../../../public/Pics/image 130.png";
function MagezineSave() {
  return (
    <div className=" flex gap-5">
      <Image src={pesorasos} alt="img" width={155} />
      <div className=" flex flex-col justify-start items-start gap-2">
        <h4 className=" font-semibold">پسوریازیس</h4>
        <p className=" text-[#4E4E4E]">
          سوریازیس (به فرانسوی: psoriasis) یا صدفک[۱]، بیماری
          پوستی مزمن خودایمنی است. این بیماری هنگامی رخ می‌دهد که دستگاه
          ایمنی بدن سیگنال‌های اشتباهی می‌فرستد. این سیگنال‌ها باعث افزایش سرعت
          چرخهٔ{" "}
        </p>
        <div className=" text-sm gap-3 items-start rounded-md flex bg-[rgba(219,215,215,0.43)] p-2">
          <Image src={doctorProf} alt="profile" width={51} />
          <div className=" flex">
            <div className=" flex flex-col">
              <h5>دکتر حلما محمدی</h5>
              <h5 className=" text-[#4E4E4E]">متخصص پوست و مو</h5>
              <p className=" text-[#4E4E4E]">تاریخ انتشار مجله:1403/06/09</p>
            </div>

            <div className="  flex">
              <h5>دسته بندی مقاله:</h5>
              <h5 className=" text-[#4E4E4E]">پوست و مو، زیبایی</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagezineSave;
