
import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import React from "react";

import { ToastContainer } from "react-toastify";
import MedicalCentersList from "@/components/MedicalCentersList";

function page() {
  return (
    <div dir="rtl" className="flex bg-[#F6FBFF] justify-start">
      <AdminPanelMenu />
        
      <MedicalCentersList type="clinic" />

      <ToastContainer />
    </div>
  );
}

export default page;
