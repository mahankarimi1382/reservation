import React from "react";

function PayDetails() {
  return (
    <div className=" w-[90%] h-[301px] border flex flex-col gap-5 p-5 border-[#005DAD] rounded-xl">
      <h2 className=" text-xl pb-5 text-[#005DAD] border-b border-[#005DAD] border-dashed">
        جزئیات پرداخت
      </h2>
      <div className=" text-xl flex justify-between">
        <h2>مبلغ و کارمزد خدمات آنلاین</h2>
        <h2>پرداخت شده توسط پزشک</h2>
      </div>
      <div className=" text-xl flex justify-between">
        <h2>مبلغ ویزیت</h2>
        <h2>600,000 تومان</h2>
      </div>{" "}
      <div className=" border-b pb-5 border-[#005DAD] border-dashed text-xl flex justify-between">
        <h2>مبلغ بیعانه</h2>
        <h2>250,000 تومان</h2>
      </div>
      <div className=" text-xl  text-[#005DAD] font-black flex justify-between">
        <h2>مبلغ قابل پرداخت ( بدون کد تخفیف )</h2>
        <h2>250,000 تومان</h2>
      </div>{" "}
    </div>
  );
}

export default PayDetails;
