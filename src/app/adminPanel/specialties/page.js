"use client";
import { SelectFilter } from "@/components/Inputs/Input";
import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import React, { useState } from "react";

import { AddSpecialtiesButt } from "@/components/Buttons/Button";
import { ToastContainer } from "react-toastify";
import SpecialtiesPanelSection from "@/container/adminPanel/Specialties/specialtiesSection";

function page() {
  return (
    <div dir="rtl" className="flex bg-[#F6FBFF] justify-start">
      <AdminPanelMenu />
      <div className=" gap-10 mt-20 w-full flex flex-col items-center ">
        <div className=" w-[80%] flex justify-between">
          <SelectFilter title="تخصص" />
          <AddSpecialtiesButt />
        </div>

        <SpecialtiesPanelSection />
      </div>
      <ToastContainer />
    </div>
  );
}

export default page;
