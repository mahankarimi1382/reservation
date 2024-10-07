import Image from "next/image";
import React from "react";

function DashboardBox(props) {
  console.log(props);
  return (
    <div className=" items-center flex gap-3 flex-col pb-5 rounded-3xl shadow-md">
      <div className=" w-full h-[64px] bg-[#DBEDFD] flex rounded-t-3xl justify-center items-center">
        <h2 className=" flex justify-center items-center gap-2">
          <Image src={props.icon} width={24} alt="icon" />
          {props.title}
        </h2>
      </div>
      {props.children}
      <button className=" rounded-xl border border-[#005DAD] text-[#005DAD] py-2 w-[120px]">
        مشاهده جزئیات
      </button>
    </div>
  );
}

export default DashboardBox;
