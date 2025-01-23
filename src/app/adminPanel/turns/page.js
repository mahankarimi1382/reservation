
import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import React from "react";

import { ToastContainer } from "react-toastify";
import PatientsSection from "@/container/turns/PatientsSection";

function page() {
  // const fakeData = [
  //   {
  //     id: 1,
  //     name: "ایمان سالارکیا",
  //     time: "1403/0402 ساعت 10:30",
  //     code: "0024567980",
  //     phone: "09129804556",
  //   },
  //   {
  //     id: 1,
  //     name: "ایمان سالارکیا",
  //     time: "1403/0402 ساعت 10:30",
  //     code: "0024567980",
  //     phone: "09129804556",
  //   },
  //   {
  //     id: 1,
  //     name: "ایمان سالارکیا",
  //     time: "1403/0402 ساعت 10:30",
  //     code: "0024567980",
  //     phone: "09129804556",
  //   },
  //   {
  //     id: 1,
  //     name: "ایمان سالارکیا",
  //     time: "1403/0402 ساعت 10:30",
  //     code: "0024567980",
  //     phone: "09129804556",
  //   },
  //   {
  //     id: 1,
  //     name: "ایمان سالارکیا",
  //     time: "1403/0402 ساعت 10:30",
  //     code: "0024567980",
  //     phone: "09129804556",
  //   },
  //   {
  //     id: 1,
  //     name: "ایمان سالارکیا",
  //     time: "1403/0402 ساعت 10:30",
  //     code: "0024567980",
  //     phone: "09129804556",
  //   },
  //   {
  //     id: 1,
  //     name: "ایمان سالارکیا",
  //     time: "1403/0402 ساعت 10:30",
  //     code: "0024567980",
  //     phone: "09129804556",
  //   },
  //   {
  //     id: 1,
  //     name: "ایمان سالارکیا",
  //     time: "1403/0402 ساعت 10:30",
  //     code: "0024567980",
  //     phone: "09129804556",
  //   },
  //   {
  //     id: 1,
  //     name: "ایمان سالارکیا",
  //     time: "1403/0402 ساعت 10:30",
  //     code: "0024567980",
  //     phone: "09129804556",
  //   },
  //   {
  //     id: 1,
  //     name: "ایمان سالارکیا",
  //     time: "1403/0402 ساعت 10:30",
  //     code: "0024567980",
  //     phone: "09129804556",
  //   },
  // ];
  return (
    <div dir="rtl" className="flex bg-[#F6FBFF] justify-start">
      <AdminPanelMenu />
      <PatientsSection />
      <ToastContainer />
    </div>
  );
}

export default page;
