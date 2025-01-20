import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import React from "react";

import { AddDoctorButt } from "@/components/Buttons/Button";
import { ToastContainer } from "react-toastify";
import DoctorsSection from "@/container/adminPanel/doctors/DoctorsSection";
function page() {
  return (
    <div dir="rtl" className="flex bg-[#F6FBFF] justify-start">
      <AdminPanelMenu />

      <DoctorsSection />

      <ToastContainer />
    </div>
  );
}

export default page;
