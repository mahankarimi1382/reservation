import DoctorWorkCalendar from "@/container/doctor-panel/reservation-managment/DoctorWorkCalendar";
import { Switch } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import setting from "../../../public/Pics/doctorPanel/setting.png";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimeInput from "../TimeInput";
import { smeIdStorage } from "@/store/Store";
import { create_Reservation } from "@/api/ApiCalling";
function CreateReservationModal({ closeModal, TreatmentId }) {
  const { smeId } = smeIdStorage();
  const [reservationDate, setReservationDate] = useState("");
  const [cancleTimeDuration, setCancleTimeDuration] = useState(0);
  const [reservationTime, setReservationTime] = useState("");
  const [visitCostId, setVisitCostId] = useState(1);
  const [totalTurnCount, setTotalTurnCount] = useState(0);
  const [numberofturnsinlimit, setNumberofturnsinlimit] = useState(0);
  const [timeofturnsinlimit, setTimeofturnsinlimit] = useState(0);
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
      smeProfileId: smeId,
    },
    reservationDate,
    doctorTreatmentCenterId: TreatmentId,
    cancleTimeDuration: parseInt(cancleTimeDuration),
    reservationTime,
    visitCostId,
    totalTurnCount: parseInt(totalTurnCount),
    numberofturnsinlimit: parseInt(numberofturnsinlimit),
    timeofturnsinlimit: parseInt(timeofturnsinlimit),
  };
  return (
    <div className=" z-20  w-screen h-screen top-0 justify-center items-center flex right-0 fixed ">
      <div className=" relative w-[70%] h-[90%] p-3 pb-10 bg-white rounded-xl">
        <RxCross2
          onClick={closeModal}
          className=" cursor-pointer absolute top-2 left-2"
        />
        <div className=" w-full h-full flex justify-center gap-5 items-center">
          <div className=" flex flex-col gap-5">
            <Calendar
              onChange={(date) => setReservationDate(date.format())}
              className="rmdp-prime-admin relative flex justify-center items-center"
              calendar={persian}
              locale={persian_fa}
            >
              <h5 className=" text-[#49454F] text-sm absolute top-3 m-auto">
                انتخاب تاریخ
              </h5>
            </Calendar>
          </div>
          <div className=" gap-5 bg-white p-3 py-5 shadow-md rounded-[30px] w-[550px] flex flex-col">
            <h5 className=" flex gap-1 items-center  font-semibold">
              <Image src={setting} width={20} alt="icon" />
              تنظیمات نوبت حضوری
            </h5>
            <div className=" flex items-start justify-between">
              <div className=" flex-col gap-6 flex w-[45%]">
                <div className=" flex  items-center justify-between">
                  <h4>تعداد افراد در هر بازه:</h4>
                  <input
                    onChange={(e) => setNumberofturnsinlimit(e.target.value)}
                    className=" shadow-md text-center p-0 outline-none w-[81px] h-[38px] rounded-lg border-[#005DAD] border"
                  />
                </div>
                <div className=" flex items-center justify-between">
                  <h4>زمان کنسل نوبت (دقیقه):</h4>
                  <TimeInput setTime={setCancleTimeDuration} format="mm" />
                </div>
                <div className=" flex items-center justify-between">
                  <h4>از ساعت:</h4>
                  <TimeInput setTime={setReservationTime} format="HH:mm" />
                </div>
              </div>
              <div className=" flex-col gap-6  flex w-[45%]">
                <div className=" flex items-center justify-between">
                  <h4>بازه زمانی نوبت (دقیقه):</h4>
                  <TimeInput setTime={setTimeofturnsinlimit} format="mm" />
                </div>
                <div className=" flex items-center justify-between">
                  <h4>تعداد نوبت :</h4>
                  <input
                    onChange={(e) => setTotalTurnCount(e.target.value)}
                    className=" shadow-md text-center p-0 outline-none w-[81px] h-[38px] rounded-lg border-[#005DAD] border"
                  />
                </div>
                {/* <div className=" flex items-center justify-between">
                  <h4>تا ساعت:</h4>
                  <input className=" shadow-md text-center p-0 outline-none w-[81px] h-[38px] rounded-lg border-[#005DAD] border" />
                </div> */}
              </div>
            </div>
            <hr className="border-2 rounded-xl" />
            <div className=" flex flex-col gap-3">
              <div className=" flex justify-between items-center">
                <h5>ویزیت در روز های تعطیل رسمی</h5>
                <Switch />
              </div>
              <div className=" flex justify-between items-center">
                <h5>ویزیت در روز های جمعه</h5>
                <Switch />
              </div>
              <hr className="border-2 rounded-xl" />

              <div className=" w-full flex justify-center gap-10 items-center">
                <button className=" bg-[rgba(230,35,51,0.15)] text-[#E62333F2] border border-[#E62333F2] p-3 w-1/3 rounded-lg">
                  انصراف
                </button>
                <button
                  onClick={() => create_Reservation(data)}
                  className=" bg-[#005DAD] text-white  p-3 w-1/3 rounded-lg"
                >
                  ثبت تغییرات
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateReservationModal;
