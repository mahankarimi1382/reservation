
import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import React from "react";

import PatientsSection from "@/container/turns/PatientsSection";

function page() {

  return (
    <div dir="rtl" className="flex bg-[#F6FBFF] justify-start">
      <AdminPanelMenu />
      <PatientsSection />
    </div>
  );
}

export default page;
