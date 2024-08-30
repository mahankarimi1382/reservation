import Navbar from "@/components/Home/Navbar";
import Image from "next/image";
import React from "react";
import DoctorProfile from "@/components/Doctors/DoctorProfile";
import Footer from "@/components/Home/Footer";
function page({ params }) {
  return (
    <div dir="rtl">
      <div className=" border border-b shadow">
        <Navbar params={params} />
      </div>
      <DoctorProfile />
      <Footer />
    </div>
  );
}

export default page;
