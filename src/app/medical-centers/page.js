import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FilterMedicalCenters from "@/container/MedicalCenters/FilterMedicalCenters";
import MedicalCentersPaginate from "@/container/MedicalCenters/MedicalCentersPaginate";
import React from "react";

function page() {
  return (
    <div dir="rtl">
      <div className=" border border-b shadow">
        <Navbar />
      </div>
      <div className=" w-full flex items-center justify-center  bg-[#f5f5f5]">
        <div className=" my-10 justify-between items-start w-[90%] flex ">
          <FilterMedicalCenters />
          <MedicalCentersPaginate />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
