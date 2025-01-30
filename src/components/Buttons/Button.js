"use client";
import React, { useState } from "react";
import { CiEdit, CiLogin } from "react-icons/ci";
import Image from "next/image";
import screenIcon from "../../../public/Pics/mirroring-screen.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";

import {
  fullNameStorage,
  myStore,
  nationalCodeStorage,
  smeIdStorage,
} from "@/store/Store";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useRouter } from "next/navigation";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import Cookies from "js-cookie";
import { IoMenuOutline } from "react-icons/io5";
import BurgerMenu from "../BurgerMenu";
import { GoPlus } from "react-icons/go";
import OpinionModal from "../modals/OpinionModal";
import SuccessModal from "../modals/SuccessModal";
import LoginModal from "../modals/LoginModal";
import SpecialtiesListModal from "../modals/SpecialtiesListModal";
import SeeNazarModal from "../modals/SeeNazarModal";
import EmptyReservModal from "../modals/EmptyReservModal";
import SubmitSpecialtiesModal from "../modals/SubmitSpecialtiesModal";
import AddNewDoctorModal from "../modals/AddNewDoctorModal";
import VisitTypeSelectionModal from "../modals/VisitTypeSelectionModal";
import Link from "next/link";
import AddTurnModal from "../modals/AddTurnModal";
import MedicalFormModal from "../modals/MedicalFormModal";
import dynamic from "next/dynamic";


export const LoginButton = () => {
  const { fullName, setFullName } = fullNameStorage();
  const { removeSmeId, smeId } = smeIdStorage();
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const openModal = () => {
    setIsModal(true);
  };
  return (
    <div className=" flex justify-center items-center gap-3">
      {isModal && <LoginModal setIsModal={setIsModal} />}
      {!fullName && (
        <button
          onClick={() => router.push("medicalCentersLogin")}
          className=" lg:flex hidden shadow-xl text-[12px] lg:text-[14px] lg:p-2 p-1 px-2 lg:px-2  justify-center items-center gap-1 text-[#004D8F] rounded-lg border border-[#004D8F]"
        >
          ثبت نام | ورود مرکز درمانی{" "}
        </button>
      )}

      {!fullName && (
        <button
          onClick={() => router.push("doctorLogin")}
          className=" lg:flex hidden  shadow-xl text-[12px] lg:text-[14px] lg:p-2 p-1 px-2 lg:px-2 justify-center items-center gap-1 text-[#004D8F] rounded-lg border border-[#004D8F]"
        >
          ثبت نام | ورود پزشکان
        </button>
      )}

      <div
        onClick={
          fullName
            ? () => {
                console.log("first");
              }
            : openModal
        }
        className=" relative cursor-pointer bg-white shadow-xl px-2 text-[12px] lg:text-[14px] lg:p-2 p-1 lg:px-2 flex justify-center items-center gap-1 text-[#004D8F] rounded-lg border border-[#004D8F]"
      >
        {fullName ? (
          <h5
            onMouseEnter={() => setIsHover(true)}
            onClick={() => setIsHover(!isHover)}
            className=" w-full justify-center items-center gap-2 flex"
          >
            <IoPersonCircleSharp className=" text-xl" />
            {fullName}
          </h5>
        ) : (
          <h5 className=" w-full flex justify-center gap-1">
            {" "}
            <CiLogin className=" hidden lg:flex text-xl" />
            ثبت نام | ورود
          </h5>
        )}
        {isHover && (
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className=" top-8 p-3 bg-white z-50 rounded-lg flex flex-col gap-3 shadow-xl border absolute "
          >
            <Link
              href="/userPanel/dashboard"
              className=" flex justify-center gap-10 items-center text-[#004D8F]"
            >
              داشبورد
              <LuLayoutDashboard />
            </Link>
            <div
              onClick={() => {
                removeSmeId();
                Cookies.remove("token");
                setFullName(null);
                router.push("/");
                setIsHover(false);
              }}
              className=" text-red-600 flex justify-between gap-10 items-center"
            >
              <h5>خروج</h5>

              <CiLogout />
            </div>
          </div>
        )}
      </div>
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
        <VisitTypeSelectionModal
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
        <OpinionModal
          setIsNazarModal={setIsNazarModal}
          setIsSuccessModal={setIsSuccessModal}
        />
      )}
      {IsSuccessModal && <SuccessModal setIsSuccessModal={setIsSuccessModal} />}

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
export const DoctorLoginButt = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <div>
      {isModal && <LoginModal setIsModal={setIsModal} />}

      <button
        onClick={() => setIsModal(true)}
        className=" text-lg flex justify-center items-center gap-3 px-16 p-2 border-2 border-[#005DAD] text-[#005DAD] rounded-lg"
      >
        ورود پزشک
        <IoIosArrowBack />
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
        <SpecialtiesListModal setIsSpecialtiesModal={setIsSpecialtiesModal} />
      )}
      <div
        onClick={handleOpenModal}
        className=" w-[95px] h-[120px] md:w-[100px] md:h-[130px] group lg:-mr-20  bg-[#eaeaea] hover:bg-[#63a2da] hover:shadow-lg hover:border-none hover:-mt-2 transition-all hover:shadow-[#c2eeff] min-w-[104px] lg:w-[131px] lg:h-[170px] flex flex-col justify-evenly items-center rounded-xl border border-[#DBD7D7]"
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
      {isNazarModal && <SeeNazarModal setIsNazarModal={setIsNazarModal} />}
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
        <EmptyReservModal
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
export const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));
export const SignUpButton = () => {
  const [isModal, setIsModal] = useState(false);

  const handleOpenModal = () => {
    setIsModal(true);
  };
  return (
    <div>
      {isModal && <LoginModal type="signup" />}
      <button onClick={handleOpenModal} className="text-[#005DAD]">
        ثبت نام کنید
      </button>
    </div>
  );
};
export const BurgerMenuButt = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const openburgermenu = () => {
    setBurgerMenu(true);
  };
  return (
    <div>
      {burgerMenu ? (
        <div
          onClick={() => setBurgerMenu(false)}
          className=" w-full fixed transition-opacity duration-500 z-[60] top-0 right-0 bg-[rgba(0,0,0,0.6)] h-screen"
        >
          <BurgerMenu />
        </div>
      ) : (
        <div
          onClick={() => setBurgerMenu(false)}
          className=" w-full fixed opacity-0  -z-10 top-0 right-0 bg-[rgba(0,0,0,0.6)] h-screen"
        >
          <BurgerMenu />
        </div>
      )}
      <IoMenuOutline
        onClick={openburgermenu}
        className=" text-[#005DAD] text-2xl"
      />
    </div>
  );
};

export const AddDoctorButt = ({
  setDoctorItems,
  doctorItems,
  isAddDoctorModal,
  setIsAddDoctorModal,
}) => {
  return (
    <div>
      {isAddDoctorModal && (
        <AddNewDoctorModal
          doctorItems={doctorItems}
          setIsAddDoctorModal={setIsAddDoctorModal}
        />
      )}
      <button
        onClick={() => {
          setIsAddDoctorModal(true);
          setDoctorItems();
        }}
        className=" flex justify-center items-center gap-2 rounded-lg p-2 bg-[#005DAD] text-white"
      >
        <GoPlus className=" text-2xl" />
        افزودن دکتر
      </button>
    </div>
  );
};
export const EditSpecialistButt = ({
  isEditSpecialModal,
  setIsEditSpecialModal,
  item,
}) => {
  return (
    <div>
      {isEditSpecialModal && (
        <SubmitSpecialtiesModal
          item={item}
          setIsAddSpecialModal={setIsEditSpecialModal}
        />
      )}
      <button
        onClick={() => setIsEditSpecialModal(true)}
        className=" gap-2 border rounded-lg px-5 p-1 flex justify-center items-center bg-[#F2FEF8] border-[#1F7168] text-[#1F7168]"
      >
        <CiEdit className=" font-bold text-2xl" />
        ویرایش
      </button>
    </div>
  );
};
export const AddTurnButt = ({ isAddTurn, setIsAddTurn }) => {
  return (
    <div>
      {isAddTurn && <AddTurnModal setIsAddTurn={setIsAddTurn} />}
      <button
        onClick={() => setIsAddTurn(true)}
        className=" flex justify-center items-center gap-2 rounded-lg p-2 bg-[#005DAD] text-white"
      >
        <GoPlus className=" text-2xl" />
        ثبت نوبت
      </button>
    </div>
  );
};
export const MedicalCenterSignUpButt = () => {
  const [isMedicalCenterForm, setIsMedicalCenterForm] = useState(false);
  return (
    <div>
      {isMedicalCenterForm && (
        <MedicalFormModal
          setIsMedicalCenterForm={setIsMedicalCenterForm}
        />
      )}
      <button
        onClick={() => setIsMedicalCenterForm(true)}
        href="medicalCentersLogin/loginForm"
        className=" text-lg flex justify-center items-center gap-3 px-16 p-2 text-white bg-[#005DAD] rounded-lg"
      >
        عضویت مراکز درمانی
        <IoIosArrowBack />
      </button>
    </div>
  );
};
export const AddMedicalCenterButt = () => {
  const [isMedicalCenterForm, setIsMedicalCenterForm] = useState(false);

  return (
    <div>
      {isMedicalCenterForm && (
        <MedicalFormModal
          setIsMedicalCenterForm={setIsMedicalCenterForm}
        />
      )}
      <button
        onClick={() => setIsMedicalCenterForm(true)}
        className=" flex justify-center items-center gap-2 rounded-lg p-2 bg-[#005DAD] text-white"
      >
        <GoPlus className=" text-2xl" />
        افزودن مرکز درمانی
      </button>
    </div>
  );
};
