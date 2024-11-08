"use client";
import AdminPanelMenu from "@/container/adminPanel/AdminPanelMenu";
import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
function page() {
  const uData = [4000, 3000, 2000, 2780, 1890];
  const xLabels = [
    "فروردین",
    "اردیبهشت",
    "خراد",
    "تیر",
    "مرداد",
  ];

  return (
    <div dir="rtl" className="flex">
      <AdminPanelMenu />
      <div dir="ltr">
        <LineChart
        
          width={1116}
          height={336}
          series={[
            { data: uData },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
        />
      </div>
    </div>
  );
}

export default page;
