import React from "react";

function UploadingInputContainer({ title }) {
  return (
    <div className=" w-full flex flex-col gap-5">
      <h5 className=" font-semibold"> {title}</h5>
      <label className=" relative flex-col cursor-pointer border gap-2 bg-[rgba(211,233,253,0.24)] h-[300px] rounded-md border-dashed border-[#005DAD] flex justify-center items-center">
        <input multiple type="file" className=" w-full h-full file-input cursor-pointer bg-opacity-0 absolute " />
        <div className=" mt-5 w-[30%] rounded-md text-center text-xl border border-[#005DAD] p-5 text-[#005DAD]">
          آپلود
        </div>
        <h5 className=" text-[#9B9B9B] text-lg">یا میتوانید درگ کنید</h5>
      </label>
      <p className=" text-[#707070]">
        توجه داشته باشید که حجم فریم ها بیشتر از 1mb نباشد
      </p>
    </div>
  );
}

export default UploadingInputContainer;
