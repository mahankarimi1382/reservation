import React from "react";
import Footer from "@/components/Footer";
import FilterDoctors from "@/container/Doctors/FilterDoctors";
import DoctorsPaginate from "@/container/Doctors/DoctorsPaginate";
import Navbar from "@/components/Navbar";
function page() {
  return (
    <div dir="rtl">
      <div className=" border border-b shadow">
        <Navbar />
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
