import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CreateReservationModal from "./CreateReservationModal";
import { get_doctor_treatment_reservation } from "@/api/ApiCalling";
import LoadingComponent from "../LoadingComponent";

function SeeReservsModal({ closeModal, treatmentId, clinicId, doctorId }) {
  const [selectedDay, setSelectedDay] = useState("");
  console.log(selectedDay);
  const [turns, setTurns] = useState([]);
  const [reservationList, setReservationList] = useState([]);
  console.log(reservationList);
  const [isLoading, setIsLoading] = useState(false);
  const uniqueStimeSet = new Set();

  const getReservation = async () => {
    console.log("first");
    const data = await get_doctor_treatment_reservation(doctorId, clinicId);
    if (data) {
      setReservationList(data);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (doctorId) {
      getReservation();
    }
  }, [doctorId]);
  const [isCreateReservModal, setIsCreateReservModal] = useState(false);
  const mappedHours = () => {
    return turns.map((item) => {
      const hasFreeTurn = turns.some((t) => t.stime === item.stime && t.isFree);
      const isDisable = hasFreeTurn ? false : true;
      console.log(item);
      return (
        <button
          disabled={isDisable}
          className={`disabled:bg-[#FBFBFB] transition-all hover:bg-[#DBEDFF] hover:border-[#005DAD] text-[#005DAD] disabled:text-[#B2B2B2] disabled:border-none border p-2 px-4 rounded-lg`}
          key={item.id}
        >
          {item.stime}
        </button>
      );
    });
  };
  const mappedDayDetails = () => {
    return reservationList.map((item) => {
      return (
        <button
          onClick={() => {
            setSelectedDay(item.id);
            let turns = item.visitCost.reservations[0].turns;
            const uniqueTurns = turns.filter((turn) => {
              if (uniqueStimeSet.has(turn.stime)) {
                return false;
              } else {
                uniqueStimeSet.add(turn.stime);
                return true;
              }
            });
            setTurns(uniqueTurns);
          }}
          className={`${
            selectedDay == item.id &&
            "bg-[#DBEDFF] border-[#005DAD] text-[#005DAD]"
          } disabled:bg-[#FBFBFB] disabled:text-[#B2B2B2] disabled:border-none flex flex-col min-w-[95px] min-h-[95px] justify-between py-2 items-center  rounded-lg transition-all hover:bg-[#DBEDFF] hover:border-[#005DAD] hover:text-[#005DAD] border  `}
          key={item.id}
        >
          <h5>{item.reservationDayOfWeek}</h5>
          <h5>{item.reservationDay}</h5>
          <h5>{item.reservationMonth}</h5>
        </button>
      );
    });
  };
  return (
    <div className=" z-20  w-screen h-screen top-0 justify-center items-center flex right-0 fixed">
      {isLoading && <LoadingComponent />}
      {isCreateReservModal && (
        <CreateReservationModal
          treatmentId={treatmentId}
          closeModal={() => setIsCreateReservModal(false)}
        />
      )}
      <div className=" relative w-[40%] h-[70%] transition-all flex flex-col p-5 gap-5 bg-white rounded-2xl">
        <RxCross2
          onClick={closeModal}
          className=" cursor-pointer absolute top-2 left-2"
        />
        <div className=" gap-4 customScroll min-h-[100px] py-5 flex overflow-x-auto overflow-y-hidden px-2">
          {reservationList.length != 0 ? (
            mappedDayDetails()
          ) : (
            <div className=" w-full h-full flex justify-center items-center">
              نوبتی برای نمایش وجود ندارد
            </div>
          )}
        </div>
        {turns.length != 0 && (
          <div className=" flex gap-2 flex-col">
            <div className=" flex flex-col ">
              <h2 className=" text-lg "> ساعت ویزیت</h2>
              <div className=" flex gap-5 flex-wrap">{mappedHours()}</div>
            </div>
          </div>
        )}
        <div className=" bottom-2  absolute w-full flex justify-center items-center">
          <button
            onClick={() => setIsCreateReservModal(true)}
            className="  flex justify-center items-center gap-2 rounded-lg p-2 bg-[#005DAD] text-white"
          >
            افزودن نوبت
          </button>
        </div>
      </div>
      {/* <div className=" relative w-[40%] h-[500px] p-3 pb-10 bg-white rounded-xl">
        <RxCross2
          onClick={closeModal}
          className=" cursor-pointer absolute top-2 left-2"
        />
        <h5 className=" text-lg text-[#005DAD]">نوبت ها:</h5>
        {reservationList.map((item) => {
          return (
            <div className=" flex flex-col" key={item.id}>
              <h5> نوبت های {item.reservationDateFull}</h5>
            </div>
          );
        })}
        <div className=" bottom-2  absolute w-full flex justify-center items-center">
          <button
            onClick={() => setIsCreateReservModal(true)}
            className="  flex justify-center items-center gap-2 rounded-lg p-2 bg-[#005DAD] text-white"
          >
            افزودن نوبت
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default SeeReservsModal;
