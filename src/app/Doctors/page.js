import Navbar from "@/components/Home/Navbar";
import Image from "next/image";
import React from "react";
import DoctorProfile from "@/components/Doctors/DoctorProfile";
import Footer from "@/components/Home/Footer";
import FilterDoctors from "@/components/Doctors/FilterDoctors";
import DoctorsPaginate from "@/components/Doctors/DoctorsPaginate";
function page({ params }) {
  return (
    <div dir="rtl">
      <div className=" border border-b shadow">
        <Navbar params={params} />
      </div>
      <div className=" w-full flex items-center justify-center  bg-[#f5f5f5]">
        <div className=" my-10 justify-between items-start w-[90%] flex ">
          <FilterDoctors />
          <DoctorsPaginate />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
