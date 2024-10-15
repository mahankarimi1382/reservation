import Navbar from "@/components/Navbar";
import UserPanelMenue from "@/container/userPanel/DashBoard/UserPanelMenue";
import React from "react";

function page() {
  return (
    <div dir="rtl" className=" w-full">
      <Navbar />
      <div className=" w-full">
        <UserPanelMenue/>
      </div>
    </div>
  );
}

export default page;
