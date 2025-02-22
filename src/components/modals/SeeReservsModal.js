import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CreateReservationModal from "./CreateReservationModal";

function SeeReservsModal({ closeModal }) {
  const [isCreateReservModal, setIsCreateReservModal] = useState(false);
  return (
    <div className=" z-20  w-screen h-screen top-0 justify-center items-center flex right-0 fixed">
      {isCreateReservModal && (
        <CreateReservationModal
          closeModal={() => setIsCreateReservModal(false)}
        />
      )}
      <div className=" relative w-[40%] h-[500px] p-3 pb-10 bg-white rounded-xl">
        <RxCross2
          onClick={closeModal}
          className=" cursor-pointer absolute top-2 left-2"
        />
        <h5 className=" text-lg text-[#005DAD]">نوبت های:</h5>

        <div className=" bottom-2  absolute w-full flex justify-center items-center">
          <button
            onClick={() => setIsCreateReservModal(true)}
            className="  flex justify-center items-center gap-2 rounded-lg p-2 bg-[#005DAD] text-white"
          >
            افزودن نوبت
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeeReservsModal;
