import React from "react";

function SavedCardContainer(props) {
  return (
    <div className=" bg-white shadow-md rounded-lg relative w-full p-4">
      {props.children}
      <button className=" absolute left-8 text-[#005DAD] bottom-3">
        مشاهده کامل{" "}
      </button>
    </div>
  );
}

export default SavedCardContainer;
