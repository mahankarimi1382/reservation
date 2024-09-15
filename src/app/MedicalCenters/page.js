import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import FilterMedicalCenters from "@/components/MedicalCenters/FilterMedicalCenters";
import MedicalCentersPaginate from "@/components/MedicalCenters/MedicalCentersPaginate";
import React from "react";

function page({ params }) {
  return (
    <div dir="rtl">
      <div className=" border border-b shadow">
        <Navbar params={params} />
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
