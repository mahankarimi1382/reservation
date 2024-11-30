"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/Pics/logo-doctor.png";
import dashboard_icon_black from "../../../public/Pics/Adminpanelmenu-icon/dashboard-icon-black.png";
import dashboard_icon from "../../../public/Pics/Adminpanelmenu-icon/dashboard-icon.png";
import {
  AdminPanelLink,
  AdminPanelreport_action,
  AdminPanelsupport_action,
} from "@/components/Links/Links";
import doctorInfoIcon_blue from "../../../public/Pics/doctorpanelmenu-icons/doctor-info-icon-blue.png";
import doctorInfoIcon_black from "../../../public/Pics/doctorpanelmenu-icons/doctor-info-icon-black.png";
import medicalcenterIcon_blue from "../../../public/Pics/doctorpanelmenu-icons/medical-center-icon-blue.png";
import medicalcenterIcon_black from "../../../public/Pics/doctorpanelmenu-icons/medical-center-icon-black.png";
import reservationManagmentIcon_black from "../../../public/Pics/doctorpanelmenu-icons/reservation-managment-icon-black.png";
import patientslisticon_blue from "../../../public/Pics/doctorpanelmenu-icons/patients-list-icon-blue.png";
import patientslisticon_black from "../../../public/Pics/doctorpanelmenu-icons/patinets-list-icon-black.png";
import financialreporticon_blue from "../../../public/Pics/doctorpanelmenu-icons/financial-report-icon-blue.png";
import financialreporticon_black from "../../../public/Pics/doctorpanelmenu-icons/financial-report-icon-black.png";
import insurancesicon_black from "../../../public/Pics/doctorpanelmenu-icons/insurances-icon-black.png";
import insurancesicon_blue from "../../../public/Pics/doctorpanelmenu-icons/insurances-icon-blue.png";
import opinionsaboutmeicon_black from "../../../public/Pics/doctorpanelmenu-icons/opinions-about-me-icon-black.png";
import opinionsaboutmeicon_blue from "../../../public/Pics/doctorpanelmenu-icons/opinion-about-me-icon-blue.png";
import articleicon_black from "../../../public/Pics/doctorpanelmenu-icons/article-icon-black.png";
import articleicon_blue from "../../../public/Pics/doctorpanelmenu-icons/article-icon-blue.png";
import support_icon from "../../../public/Pics/Adminpanelmenu-icon/support-icon.png";
import support_icon_black from "../../../public/Pics/Adminpanelmenu-icon/support-icon-black.png";

function DoctorPanelMenu() {
  return (
    <div className=" min-w-[250px] bg-[#DBEDFF] gap-5 flex flex-col items-center ">
      <Image className=" pb-8 pt-14" src={logo} width={150} alt="logo" />
      <AdminPanelLink
        title="داشبورد"
        icon={dashboard_icon}
        blackIcon={dashboard_icon_black}
        href="/doctor-panel/dashboard"
      />
      <AdminPanelLink
        title="اطلاعات پزشک"
        icon={doctorInfoIcon_blue}
        blackIcon={doctorInfoIcon_black}
        href="/doctor-panel/doctor-info/make-profile"
        href2="/doctor-panel/doctor-info/upload-licenses"
        href3="/doctor-panel/doctor-info/submit-medicalcenter"
        href4="/doctor-panel/doctor-info/financial"
      />
      <AdminPanelLink
        title="تنظیمات مرکز درمانی"
        icon={medicalcenterIcon_blue}
        blackIcon={medicalcenterIcon_black}
        href="/doctor-panel/medicalcenter-setting"
      />
      <AdminPanelLink
        title="مدیریت نوبت دهی"
        icon={reservationManagmentIcon_black}
        blackIcon={reservationManagmentIcon_black}
        href="/doctor-panel/reservation-managment"
      />
      <AdminPanelLink
        title="لیست بیماران"
        icon={patientslisticon_blue}
        blackIcon={patientslisticon_black}
        href="/doctor-panel/patients-list"
      />
      <AdminPanelLink
        title="گزارش های مالی"
        icon={financialreporticon_blue}
        blackIcon={financialreporticon_black}
        href="/doctor-panel/financial-reports"
      />{" "}
      <AdminPanelLink
        title="بیمه ها"
        icon={insurancesicon_blue}
        blackIcon={insurancesicon_black}
        href="/doctor-panel/insurances"
      />{" "}
      <AdminPanelLink
        title="نظرات درباره من"
        icon={opinionsaboutmeicon_blue}
        blackIcon={opinionsaboutmeicon_black}
        href="/doctor-panel/opinions-about-me"
      />{" "}
      <AdminPanelreport_action
        title="مقاله"
        icon={articleicon_blue}
        blackIcon={articleicon_black}
        href="/doctor-panel/article"
      />{" "}
      <AdminPanelsupport_action
        title="پشتیبانی آنلاین"
        icon={support_icon}
        blackIcon={support_icon_black}
        href="/doctor-panel/support"
      />
    </div>
  );
}

export default DoctorPanelMenu;
