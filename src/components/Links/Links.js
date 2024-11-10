"use client";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const NavLinks = (props) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className=" flex flex-col justify-center items-center">
      <Link
        prefetch
        href={props.href}
        className={
          pathName === props.href
            ? "text-[#004D8F]"
            : "text-black hover:text-[#004D8F] transition-all"
        }
      >
        {props.title}
      </Link>
      {pathName === props.href && (
        <hr className=" w-4 rounded-2xl text-2xl h-1 bg-[#004D8F]" />
      )}
    </div>
  );
};
export const PanelLink = (props) => {
  const pathName = usePathname();

  const bgFn = () => {
    if (pathName === props.href) {
      return " justify-start bg-[#F6FBFF] gap-2 p-5 rounded-r-[60px] pr-5 flex  items-center w-full";
    } else if (
      (pathName === "/userPanel/dashboard" &&
        props.href === "/userPanel/acountInfo") ||
      (pathName === "/userPanel/acountInfo" &&
        props.href === "/userPanel/history") ||
      (pathName === "/userPanel/history" &&
        props.href === "/userPanel/messages") ||
      (pathName === "/userPanel/messages" &&
        props.href === "/userPanel/transactions") ||
      (pathName === "/userPanel/transactions" &&
        props.href === "/userPanel/wallet") ||
      (pathName === "/userPanel/wallet" &&
        props.href === "/userPanel/rewards") ||
      (pathName === "/userPanel/rewards" &&
        props.href === "/userPanel/opinions") ||
      (pathName === "/userPanel/rewards" &&
        props.href === "/userPanel/opinions") ||
      (pathName === "/userPanel/opinions" &&
        props.href === "/userPanel/saves") ||
      (pathName === "/userPanel/saves" &&
        props.href === "/userPanel/favorites") ||
      (pathName === "/userPanel/favorites" &&
        props.href === "/userPanel/subsetedusers")
    ) {
      return " pr-12 justify-start gap-2 rounded-tl-[50px] bg-[#DBEDFF]  p-5 flex  items-center w-full";
    } else if (
      (pathName === "/userPanel/subsetedusers" &&
        props.href === "/userPanel/favorites") ||
      (pathName === "/userPanel/favorites" &&
        props.href === "/userPanel/saves") ||
      (pathName === "/userPanel/saves" &&
        props.href === "/userPanel/opinions") ||
      (pathName === "/userPanel/opinions" &&
        props.href === "/userPanel/rewards") ||
      (pathName === "/userPanel/rewards" &&
        props.href === "/userPanel/wallet") ||
      (pathName === "/userPanel/wallet" &&
        props.href === "/userPanel/transactions") ||
      (pathName === "/userPanel/transactions" &&
        props.href === "/userPanel/messages") ||
      (pathName === "/userPanel/messages" &&
        props.href === "/userPanel/history") ||
      (pathName === "/userPanel/history" &&
        props.href === "/userPanel/acountInfo") ||
      (pathName === "/userPanel/acountInfo" &&
        props.href === "/userPanel/dashboard")
    ) {
      return " pr-12 justify-start gap-2 rounded-bl-[50px] bg-[#DBEDFF]  p-5 flex  items-center w-full";
    } else {
      return " pr-12 justify-start gap-2 bg-[#DBEDFF]  p-5 flex  items-center w-full";
    }
  };

  return (
    <div
      className={
        pathName === props.href
          ? "bg-[#DBEDFF] pr-7 w-full "
          : " bg-[#F6FBFF] w-full "
      }
    >
      <Link className={bgFn()} href={props.href}>
        <Image
          src={pathName === props.href ? props.blueIcon : props.blackIcon}
          alt="icon"
          width={24}
        />
        {props.title}
      </Link>
    </div>
  );
};
export const AdminPanelLink = (props) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      href={props.href}
      className={`flex justify-center items-center relative gap-2 w-full p-3 text-lg ${
        pathname === props.href && "text-[#005DAD] bg-[#C4E2FF]"
      }`}
    >
      <span
        className={
          pathname !== props.href
            ? "hidden"
            : " w-[6px] h-full bg-[#005DAD] absolute right-0 rounded-l-lg"
        }
      ></span>
      <span className=" flex justify-start items-center gap-2 w-[70%]">
        <Image
          width={24}
          src={pathname === props.href ? props.icon : props.blackIcon}
          alt="icon"
        />
        {props.title}
      </span>
    </Link>
  );
};
export const AdminPanelreport_action = (props) => {
  const pathname = usePathname();
  const handlePagePath = () => {
    if (
      pathname === "/adminPanel/reports/hozorireports" ||
      pathname === "/adminPanel/reports/onlinereports" ||
      pathname === "/adminPanel/reports/centerstatus" ||
      pathname === "/adminPanel/reports/doctorstatus" ||
      pathname === "/adminPanel/reports/doctorscancels"
    ) {
      return true;
    } else {
      return false;
    }
  };
  const [isAction, setIsAction] = useState(handlePagePath());
  const handleAction = () => {
    setIsAction(!isAction);
  };
  return (
    <div
      onClick={handleAction}
      className={
        isAction
          ? " transition-all h-96  bg-[#C4E2FF] duration-700 cursor-pointer flex flex-col items-center relative gap-2 w-full p-3 text-lg"
          : " transition-all h-10 duration-700 cursor-pointer flex flex-col items-center relative gap-2 w-full p-3 text-lg"
      }
    >
      <span
        className={
          !isAction
            ? "hidden delay-200"
            : " w-[6px] h-full delay-200 bg-[#005DAD] absolute right-0 top-0 rounded-l-lg"
        }
      ></span>{" "}
      <div
        className={` h-5 flex justify-start items-center gap-2 w-[70%] ${
          isAction && "text-[#005DAD]"
        }`}
      >
        <Image
          width={24}
          src={isAction ? props.icon : props.blackIcon}
          alt="icon"
        />
        {props.title}

        <IoIosArrowDown
          className={isAction ? " text-sm text-[#005DAD]" : "hidden"}
        />
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <Link
          className={` transition-opacity flex pr-2 gap-2 py-4 rounded-lg items-center  w-full text-[#005DAD] ${
            isAction ? "opacity-100 delay-500" : "opacity-0 del"
          } ${
            pathname === "/adminPanel/reports/hozorireports" && "bg-[#DBEDFF]"
          }`}
          href="/adminPanel/reports/hozorireports"
        >
          <IoIosArrowDown className=" text-xs rotate-90" />
          گزارش نوبت های حضوری
        </Link>
        <Link
          className={` transition-opacity flex pr-2 gap-2 py-4 rounded-lg items-center  w-full text-[#005DAD] ${
            isAction ? "opacity-100 delay-500" : "opacity-0"
          } ${
            pathname === "/adminPanel/reports/onlinereports" && "bg-[#DBEDFF]"
          }`}
          href="/adminPanel/reports/onlinereports"
        >
          <IoIosArrowDown className=" text-xs rotate-90" />
          گزارش نوبت های غیرحضوری
        </Link>
        <Link
          className={` transition-opacity flex pr-2 gap-2 py-4 rounded-lg items-center  w-full text-[#005DAD] ${
            isAction ? "opacity-100 delay-500" : "opacity-0"
          } ${
            pathname === "/adminPanel/reports/centerstatus" && "bg-[#DBEDFF]"
          }`}
          href="/adminPanel/reports/centerstatus"
        >
          <IoIosArrowDown className=" text-xs rotate-90" />
          وضعیت مرکز
        </Link>
        <Link
          className={` transition-opacity flex pr-2 gap-2 py-4 rounded-lg items-center  w-full text-[#005DAD] ${
            isAction ? "opacity-100 delay-500" : "opacity-0"
          } ${
            pathname === "/adminPanel/reports/doctorstatus" && "bg-[#DBEDFF]"
          }`}
          href="/adminPanel/reports/doctorstatus"
        >
          <IoIosArrowDown className=" text-xs rotate-90" />
          وضعیت حضور پزشک
        </Link>
        <Link
          className={` transition-opacity flex pr-2 gap-2 py-4 rounded-lg items-center  w-full text-[#005DAD] ${
            isAction ? "opacity-100 delay-500" : "opacity-0"
          } ${
            pathname === "/adminPanel/reports/doctorscancels" && "bg-[#DBEDFF]"
          }`}
          href="/adminPanel/reports/doctorscancels"
        >
          <IoIosArrowDown className=" text-xs rotate-90" />
          آمار کنسلی پزشک
        </Link>
      </div>
    </div>
  );
};
export const AdminPanelsupport_action = (props) => {
  const pathname = usePathname();
  const handlePagePath = () => {
    if (
      pathname === "/adminPanel/support/doctor" ||
      pathname === "/adminPanel/support/patient"
    ) {
      return true;
    } else {
      return false;
    }
  };
  const [isAction, setIsAction] = useState(handlePagePath());
  const handleAction = () => {
    setIsAction(!isAction);
  };
  return (
    <div
      onClick={handleAction}
      className={
        isAction
          ? " transition-all h-44  bg-[#C4E2FF] duration-700 cursor-pointer flex flex-col items-center relative gap-2 w-full p-3 text-lg"
          : " transition-all h-10 duration-700 cursor-pointer flex flex-col items-center relative gap-2 w-full p-3 text-lg"
      }
    >
      <span
        className={
          !isAction
            ? "hidden delay-200"
            : " w-[6px] h-full delay-200 bg-[#005DAD] absolute right-0 top-0 rounded-l-lg"
        }
      ></span>{" "}
      <div
        className={` h-5 flex justify-start items-center gap-2 w-[70%] ${
          isAction && "text-[#005DAD]"
        }`}
      >
        <Image
          width={24}
          src={isAction ? props.icon : props.blackIcon}
          alt="icon"
        />
        {props.title}

        <IoIosArrowDown
          className={isAction ? " text-sm text-[#005DAD]" : "hidden"}
        />
      </div>
      <div className=" w-full" onClick={(e) => e.stopPropagation()}>
        <Link
          className={` transition-opacity flex pr-2 gap-2 py-4 rounded-lg items-center  w-full text-[#005DAD] ${
            isAction ? "opacity-100 delay-500" : "opacity-0 del"
          } ${pathname === "/adminPanel/support/doctor" && "bg-[#DBEDFF]"}`}
          href="/adminPanel/support/doctor"
        >
          <IoIosArrowDown className=" text-xs rotate-90" />
          پزشک
        </Link>
        <Link
          className={` transition-opacity flex pr-2 gap-2 py-4 rounded-lg items-center   w-full text-[#005DAD] ${
            isAction ? "opacity-100 delay-500" : "opacity-0"
          } ${pathname === "/adminPanel/support/patient" && "bg-[#DBEDFF]"}`}
          href="/adminPanel/support/patient"
        >
          <IoIosArrowDown className=" text-xs rotate-90" />
          بیمار{" "}
        </Link>
      </div>
    </div>
  );
};
export const AdminPanelimageSetting_action = (props) => {
  const pathname = usePathname();

  const handlePagePath = () => {
    if (
      pathname === "/adminPanel/imagesetting/doctorimage" ||
      pathname === "/adminPanel/imagesetting/banner" ||
      pathname === "/adminPanel/imagesetting/medicalcenterimage" ||
      pathname === "/adminPanel/imagesetting/magezine"
    ) {
      return true;
    } else {
      return false;
    }
  };
  const [isAction, setIsAction] = useState(handlePagePath());
  const handleAction = () => {
    setIsAction(!isAction);
  };
  return (
    <div
      onClick={handleAction}
      className={
        isAction
          ? " transition-all h-72  bg-[#C4E2FF] duration-700 cursor-pointer flex flex-col items-center relative gap-2 w-full p-3 text-lg"
          : " transition-all h-10 duration-700 cursor-pointer flex flex-col items-center relative gap-2 w-full p-3 text-lg"
      }
    >
      <span
        className={
          !isAction
            ? "hidden delay-200"
            : " w-[6px] h-full delay-200 bg-[#005DAD] absolute right-0 top-0 rounded-l-lg"
        }
      ></span>{" "}
      <div
        className={` h-5 flex justify-start items-center gap-2 w-[70%] ${
          isAction && "text-[#005DAD]"
        }`}
      >
        <Image
          width={24}
          src={isAction ? props.icon : props.blackIcon}
          alt="icon"
        />
        {props.title}

        <IoIosArrowDown
          className={isAction ? " text-sm text-[#005DAD]" : "hidden"}
        />
      </div>
      <div className=" w-full" onClick={(e) => e.stopPropagation()}>
        <Link
          className={` transition-opacity flex pr-2 gap-2 py-4 rounded-lg items-center  w-full text-[#005DAD] ${
            isAction ? "opacity-100 delay-500" : "opacity-0 del"
          } ${
            pathname === "/adminPanel/imagesetting/doctorimage" &&
            "bg-[#DBEDFF]"
          }`}
          href="/adminPanel/imagesetting/doctorimage"
        >
          <IoIosArrowDown className=" text-xs rotate-90" />
          عکس پزشک
        </Link>
        <Link
          className={` transition-opacity flex pr-2 gap-2 py-4 rounded-lg items-center   w-full text-[#005DAD] ${
            isAction ? "opacity-100 delay-500" : "opacity-0"
          } ${
            pathname === "/adminPanel/imagesetting/banner" && "bg-[#DBEDFF]"
          }`}
          href="/adminPanel/imagesetting/banner"
        >
          <IoIosArrowDown className=" text-xs rotate-90" />
          بنر{" "}
        </Link>
        <Link
          className={` transition-opacity flex pr-2 gap-2 py-4 rounded-lg items-center   w-full text-[#005DAD] ${
            isAction ? "opacity-100 delay-500" : "opacity-0"
          } ${
            pathname === "/adminPanel/imagesetting/medicalcenterimage" &&
            "bg-[#DBEDFF]"
          }`}
          href="/adminPanel/imagesetting/medicalcenterimage"
        >
          <IoIosArrowDown className=" text-xs rotate-90" />
          عکس مرکز درمانی{" "}
        </Link>
        <Link
          className={` transition-opacity flex pr-2 gap-2 py-4 rounded-lg items-center   w-full text-[#005DAD] ${
            isAction ? "opacity-100 delay-500" : "opacity-0"
          } ${
            pathname === "/adminPanel/imagesetting/magezine" && "bg-[#DBEDFF]"
          }`}
          href="/adminPanel/imagesetting/magezine"
        >
          <IoIosArrowDown className=" text-xs rotate-90" />
          مجله سلامت{" "}
        </Link>
      </div>
    </div>
  );
};
