import DatePickerComponent from "@/components/DatePickerComponent";
import { SelectFilter } from "@/components/Inputs/Input";
import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import Image from "next/image";
import React from "react";
import excel_icon from "../../../../public/Pics/excelIcon.png";
import printer from "../../../../public/Pics/printer.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { RateCounter } from "@/utils/RateCounter";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { IOSSwitch } from "@/components/Buttons/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CiEdit } from "react-icons/ci";
import UserAccesSection from "@/container/adminPanel/useracces/UserAccesSection";
function page() {

  return (
    <div dir="rtl" className="flex bg-[#F6FBFF] justify-start">
      <AdminPanelMenu />
      <UserAccesSection />
    </div>
  );
}

export default page;
