import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import React from "react";

import { ToastContainer } from "react-toastify";
import SpecialtiesPanelSection from "@/container/adminPanel/Specialties/specialtiesSection";

function page() {
  return (
    <div dir="rtl" className="flex bg-[#F6FBFF] justify-start">
      <AdminPanelMenu />

      <SpecialtiesPanelSection />

      <ToastContainer />
    </div>
  );
}

export default page;
