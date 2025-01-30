"use client";
import React, { useState } from "react";
import { FcHighPriority } from "react-icons/fc";
import { FcOk } from "react-icons/fc";

import UploadingInputContainer from "@/container/doctor-panel/doctor-info/UploadingInputContainer";
import { smeIdStorage } from "@/store/Store";
import { add_article, create_ads, upload_file } from "@/api/ApiCalling";
import { ToastContainer } from "react-toastify";
import { SyncLoader } from "react-spinners";
import Cookies from "js-cookie";
import FileUploaderInput from "@/container/doctor-panel/doctor-info/FileUploaderInput";
import DatePickerComponent from "@/components/DatePickerComponent";
import { Switch } from "@mui/material";
function AddBanner() {
  const token = Cookies.get("token");

  const [bannerFileId, setBannerFileId] = useState("");
  console.log(bannerFileId);
  const [articleFileId, setArticleFileId] = useState("");
  const [loading, setLoading] = useState(false);
  const { smeId } = smeIdStorage();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [articleTypeId, setArticleTypeId] = useState("");
  const [link, setLink] = useState("");
  const [authors, setAuthors] = useState("");
  console.log(smeId);
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
    },
    title,
    headLine: "string",
    description: desc,
    photo: bannerFileId,
    smeProfileId: smeId,
  };
  return (
    <div className=" w-full gap-4 flex flex-col">
      <h5 className=" font-semibold">بنر</h5>
      <UploadingInputContainer
        fileId={bannerFileId}
        setFileId={setBannerFileId}
      />

      <h5 className=" font-semibold">عنوان بنر</h5>
      <input
        onChange={(e) => setTitle(e.target.value)}
        className=" h-32 p-4 resize-none border rounded-2xl"
      />
      <h5 className=" font-semibold">توضیحات بنر</h5>
      <textarea
        // value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className=" h-52 bg-[#F5F5F5] p-4 resize-none border rounded-2xl"
        placeholder="پزشک گرامی لطفا مقاله را اینجا بگذارید ( کپی کنید سپس اینجا پیست کنید )"
      />
      <h5 className=" font-semibold">لینک مقصد</h5>
      <input
        value={authors}
        onChange={(e) => setAuthors(e.target.value)}
        placeholder="نام و نام خانوادگی نویسنده"
        className=" w-[270px] p-2 border rounded-lg"
      />
      <h5 className=" font-semibold">تاریخ شروع و پایان </h5>
      <div className=" flex items-center gap-5">
        <DatePickerComponent title="از تاریخ" />
        <DatePickerComponent title="تا تاریخ" />
      </div>

      <div className=" flex  items-center gap-10">
        <h5 className=" font-semibold"> وضعیت بنر</h5>
        <Switch defaultChecked />
      </div>
      <div className=" w-full flex justify-between items-center">
        <div className=" w-[48%] flex flex-col  gap-2">
          <h5 className=" font-semibold"> اولویت نمایش</h5>
          <select className=" w-full  p-2 rounded-lg border">
            <option></option>
          </select>
        </div>
        <div className=" w-[48%] flex flex-col  gap-2">
          <h5 className=" font-semibold"> جایگاه بنر</h5>
          <select className=" w-full  p-2 rounded-lg border">
            <option>صفحه اول</option>
          </select>
        </div>
      </div>
      <button
        disabled={loading}
        onClick={() => {
          create_ads(data, setLoading);
          setLoading(true);
        }}
        className=" mt-5 m-auto bg-[#005DAD] text-white w-1/2 p-2 rounded-lg"
      >
        {loading ? <SyncLoader color="white" size={10} /> : "ثبت بنر"}
      </button>
    </div>
  );
}

export default AddBanner;
