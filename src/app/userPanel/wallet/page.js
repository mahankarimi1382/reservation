import Navbar from "@/components/Navbar";
import UserPanelMenue from "@/container/userPanel/UserPanelMenue";
import Image from "next/image";
import React from "react";
import cardLayer from "../../../../public/Pics/Card-layer1.png";
import cardTarashe from "../../../../public/Pics/card-tarashe.png";
import WalletCharge from "@/container/userPanel/wallet/WalletCharge";

function page() {
  return (
    <div dir="rtl" className=" bg-[#F6FBFF] w-full">
      <Navbar />
      <div className=" flex items-start w-full">
        <UserPanelMenue />
        <div className=" w-[82%] flex justify-center">
          <div className=" w-2/3 flex flex-col gap-5 justify-center items-center bg-white p-5 border-2 rounded-lg shadow-md">
            <div className=" flex justify-center items-center flex-col relative">
              <Image
                className=" absolute top-5"
                alt=""
                src={cardLayer}
                width={427}
              />
              <Image className=" mt-7" alt="" src={cardLayer} width={489} />
              <div className=" cardBg top-14 justify-center items-center gap-5 absolute rounded-xl w-[540px] h-[288px] flex flex-col">
                <div className=" flex flex-col gap-2 ">
                  <h2 className=" text-lg text-white">
                    موجودی حساب شما 70،000 تومان
                  </h2>
                  <Image
                    className=" left-10 absolute"
                    src={cardTarashe}
                    alt="icon"
                    width={45}
                  />

                  <h2 className=" text-lg text-white">سود شما : یک درصد</h2>
                  <h2 className=" text-lg text-white">
                    مجموع سود و موجودی شما : 70,700 تومان
                  </h2>
                </div>
                <div className=" w-[80%]">
                  <h5 className=" text-lg text-white">شاهین خسروی </h5>
                </div>
              </div>
            </div>
            <h5 className=" mt-20 text-xl">
              مبلغ مورد نظرتان را جهت شارژ حساب انتخاب کنید
            </h5>
            <WalletCharge />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
