"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import chargeIcon from "../../../../public/Pics/chargeIcon.png";
function WalletCharge() {
  const [priceCharge, setPriceCharge] = useState("");
  const handlePriceChange = (e) => {
    setPriceCharge(e.target.value);
  };
  const handleMinus = () => {
    setPriceCharge(priceCharge - 100);
  };
  const handlePlus = (val) => {
    setPriceCharge(Number(priceCharge) + val);
  };
  return (
    <div className=" w-full justify-center items-center flex flex-col gap-5">
      <div className=" w-1/2 justify-between items-center flex">
        <button
          onClick={() => handlePlus(50000)}
          className=" border-2 rounded-lg text-[#858585] p-2 px-3"
        >
          50,000 تومان
        </button>
        <button
          onClick={() => handlePlus(80000)}
          className=" border-2 rounded-lg text-[#858585] p-2 px-3"
        >
          80,000 تومان
        </button>
        <button
          onClick={() => handlePlus(150000)}
          className=" border-2 rounded-lg text-[#858585] p-2 px-3"
        >
          150,000 تومان{" "}
        </button>
      </div>
      <div className=" w-1/2 border-2 rounded-lg p-2 flex items-center justify-between">
        <TiPlus
          onClick={() => handlePlus(100)}
          className=" cursor-pointer text-4xl text-[#005DAD]"
        />
        <input
          onChange={(e) => handlePriceChange(e)}
          value={priceCharge}
          placeholder="مبلغ را وارد کنید"
          className=" text-center w-full outline-none"
        />
        <TiMinus
          onClick={handleMinus}
          className=" cursor-pointer text-4xl text-[#005DAD]"
        />
      </div>
      {priceCharge && <h2>{priceCharge}تومان</h2>}
      <button className=" rounded-lg border-[#005DAD] border-2 text-[#005DAD] gap-2 flex justify-center items-center p-2 w-80">
        <Image width={24} alt="icon" src={chargeIcon} />
        شارژ حساب
      </button>
    </div>
  );
}

export default WalletCharge;
