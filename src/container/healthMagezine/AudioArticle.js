import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import AudioPlayer from "./AudioPlayer";

function AudioArticle() {
  return (
    <div className=" w-full flex flex-col">
      <div className=" text-lg w-full flex justify-between items-center">
        <h5>جدیدترین مقالات</h5>
        <button className=" text-sm text-[#005DAD] flex justify-center items-center gap-1">
          مشاهده همه
          <IoIosArrowBack />
        </button>
      </div>
      <AudioPlayer />
    </div>
  );
}

export default AudioArticle;
