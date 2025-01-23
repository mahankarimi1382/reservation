import React from "react";

function LoadingComponent() {
  return (
    <div className=" w-full absolute h-full top-0 right-0 bg-slate-500 bg-opacity-10 flex justify-center items-center">
      <span className="loading loading-spinner text-[#005DAD] loading-lg"></span>
    </div>
  );
}

export default LoadingComponent;
