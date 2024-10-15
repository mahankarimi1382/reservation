"use client";
import React, { useState } from "react";
import { CiLogin } from "react-icons/ci";
import LoginModals from "../modals/LoginModals";
import Image from "next/image";
import VisitSelectModal from "../modals/VisitSelectModal";
import screenIcon from "../../../public/pics/mirroring-screen.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import NazarModal from "../modals/NazarModal";
import SuccessOpinionModal from "../modals/SuccessOpinionModal";
import SpecialtiesModal from "../modals/SpecialtiesModal";
import { IoIosMore } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import SeeDoctorNazarModal from "../modals/SeeDoctorNazarModal";
import EmptyReservDoctorModal from "../modals/EmptyReservDoctorModal";
import { IoIosArrowDown } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { myStore } from "@/store/Store";

export const LoginButton = () => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const openModal = () => {
    setIsLoginModal(true);
  };
  return (
    <div className=" flex justify-center items-center gap-3">
      {isLoginModal && <LoginModals setIsLoginModal={setIsLoginModal} />}
      <button
        onClick={openModal}
        className=" lg:-mt-12 shadow-xl text-[12px] lg:text-[14px] lg:p-2 p-1 px-2 lg:px-2 flex justify-center items-center gap-1 text-[#004D8F] rounded-lg border border-[#004D8F]"
      >
        ثبت نام | ورود مرکز درمانی{" "}
      </button>
      <button
        onClick={openModal}
        className=" lg:-mt-12 shadow-xl text-[12px] lg:text-[14px] lg:p-2 p-1 px-2 lg:px-2 flex justify-center items-center gap-1 text-[#004D8F] rounded-lg border border-[#004D8F]"
      >
        ثبت نام | ورود پزشکان
      </button>
      <button
        onClick={openModal}
        className=" lg:-mt-12 bg-white shadow-xl px-2 text-[12px] lg:text-[14px] lg:p-2 p-1 lg:px-2 flex justify-center items-center gap-1 text-[#004D8F] rounded-lg border border-[#004D8F]"
      >
        <CiLogin className=" hidden lg:flex text-xl" />
        ثبت نام | ورود
      </button>
    </div>
  );
};
export const NobatButton = (props) => {
  const [isVisitSelectModal, setIsVisitSelectModal] = useState("");

  const handleOpenModal = (type) => {
    setIsVisitSelectModal(type);
  };
  return (
    <div className=" flex justify-between px-2 w-[171px] h-[54px] border shadow-[0_1px_15px_-5px_rgba(0,0,0,0.3)] rounded-xl">
      {isVisitSelectModal && (
        <VisitSelectModal
          isVisitSelectModal={isVisitSelectModal}
          setIsVisitSelectModal={setIsVisitSelectModal}
        />
      )}

      <button className=" font-semibold gap-1 flex justify-center items-center">
        <Image src={screenIcon} width={24} alt="" />
        {props.type}
      </button>
      <button
        onClick={() => handleOpenModal(props.type)}
        className=" text-sm text-[#005DAD]"
      >
        بیشتر...
      </button>
    </div>
  );
};
export const SabteNazarButton = () => {
  const [isNazarModal, setIsNazarModal] = useState(false);
  const [IsSuccessModal, setIsSuccessModal] = useState(false);

  return (
    <div>
      {isNazarModal && (
        <NazarModal
          setIsNazarModal={setIsNazarModal}
          setIsSuccessModal={setIsSuccessModal}
        />
      )}
      {IsSuccessModal && (
        <SuccessOpinionModal setIsSuccessModal={setIsSuccessModal} />
      )}

      <button
        onClick={() => setIsNazarModal(true)}
        className=" flex items-center bg-[#005DAD] text-white p-3 rounded-xl px-5 text-lg"
      >
        ثبت نظر
        <IoIosArrowRoundBack className=" text-2xl" />
      </button>
    </div>
  );
};
export const SpecialtiesSectionButton = () => {
  const [isSpecialtiesModal, setIsSpecialtiesModal] = useState(false);
  const handleOpenModal = () => {
    setIsSpecialtiesModal(true);
  };

  return (
    <div>
      {isSpecialtiesModal && (
        <SpecialtiesModal setIsSpecialtiesModal={setIsSpecialtiesModal} />
      )}
      <div
        onClick={handleOpenModal}
        className=" group lg:-mr-20  bg-[#eaeaea] hover:bg-[#63a2da] hover:shadow-lg hover:border-none hover:-mt-2 transition-all hover:shadow-[#c2eeff] min-w-[104px] h-[146px] lg:w-[131px] lg:h-[170px] flex flex-col justify-evenly items-center rounded-xl border border-[#DBD7D7]"
      >
        <div className=" bg-white rounded-full w-[77px] h-[77px] flex justify-center items-center ">
          <IoIosMore className=" group-hover:text-[#336692] text-3xl" />
        </div>

        <h2 className=" group-hover:text-white transition-all text-[12px]">
          مشاهده بیشتر
        </h2>
      </div>
    </div>
  );
};
export const SeeDoctorNazaratButt = () => {
  const [isNazarModal, setIsNazarModal] = useState(false);
  const handleOpenModal = () => {
    setIsNazarModal(true);
  };
  return (
    <div>
      {isNazarModal && (
        <SeeDoctorNazarModal setIsNazarModal={setIsNazarModal} />
      )}
      <button
        onClick={handleOpenModal}
        className=" text-[#005DAD] flex justify-center items-center gap-1 text-sm"
      >
        <IoEyeOutline />
        مشاهده نظرات پزشک
      </button>
    </div>
  );
};
export const EmtyReservButt = ({ docDetail }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState();

  const handleOpenModal = () => {
    setSelectedDoctor(docDetail);
    setIsModalOpen(true);
  };
  return (
    <div>
      {isModalOpen && (
        <EmptyReservDoctorModal
          setIsModalOpen={setIsModalOpen}
          selectedDoctor={selectedDoctor}
        />
      )}
      <button
        onClick={handleOpenModal}
        className=" rounded-md p-2 px-4 border text-[#005DAD] border-[#005DAD] "
      >
        اولین نوبت آزاد
      </button>
    </div>
  );
};
export const MatabShowButt = ({ locs }) => {
  const [isMatadShow, setIsMatadShow] = useState(false);
  const [unicId, setUnicId] = useState();
  const handleSeeMatab = (id) => {
    setUnicId(id);
    setIsMatadShow(!isMatadShow);
  };
  return (
    <div className=" flex flex-col">
      <div className="flex gap-4">
        <h2 className=" text-[18px] flex items-center">نشانی :</h2>

        {locs.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => handleSeeMatab(item.id)}
              className={
                isMatadShow && item.id === unicId
                  ? "gap-1 p-2 flex items-center border transition-colors text-[#005dad] bg-[rgba(176,218,255,0.2)] rounded-xl"
                  : "gap-1 p-2 flex items-center border transition-colors z-10 rounded-xl"
              }
            >
              {item.loc}
              <IoIosArrowDown
                className={` ${
                  isMatadShow && item.id === unicId
                    ? "rotate-180 text-[#005dad] "
                    : "text-[#757575]"
                } transition-all    duration-300 text-xl `}
              />
            </button>
          );
        })}
      </div>

      <h2
        className={`${
          isMatadShow ? " opacity-100" : " opacity-0 -mt-8 z-0"
        } transition-all  text-[#005DAD]`}
      >
        نشانی مطب ونک: میدان ونک,خیابان صانعیو, ساختمان پزشکان,طبقه اول
      </h2>
    </div>
  );
};
export const EditUserInfoButt = () => {
  const { setIsEdit, isEdit } = myStore();

  return (
    <button
      onClick={setIsEdit}
      className=" flex justify-center items-center p-3 font-semibold rounded-lg bg-[#DBEDFD]"
    >
      <FiEdit3 className=" text-xl" />
      <h5>{isEdit ? " لغو ویرایش " : " ویرایش"}</h5>
    </button>
  );
};
export const ManOrWomanButt = ({ gender }) => {
  const { isEdit } = myStore();
  return (
    <button
      disabled={!isEdit}
      className="w-[146px] h-10 rounded-lg border disabled:bg-[rgba(219,215,215,0.44)]"
    >
      {gender}
    </button>
  );
};

export const ApllyEditButt = () => {
  const { isEdit, setIsEdit } = myStore();

  return (
    <button
      onClick={setIsEdit}
      hidden={!isEdit}
      className=" text-white px-32 bg-[#005DAD] rounded-lg p-2"
    >
      ذخیره تغییرات
    </button>
  );
};
