import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import MedicalCenterProfile from "@/components/MedicalCenters/MedicalCenterProfile";
import React from "react";

function page({params}) {
  return (
    <div dir="rtl">
      <div className=" border border-b shadow">
        <Navbar params={params} />
      </div>
      <MedicalCenterProfile />
      <Footer />
    </div>
  );
}

export default page;
