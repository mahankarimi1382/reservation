"use client";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
export const NavLinks = (props) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className=" flex flex-col justify-center items-center">
      <Link
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
        props.href === "/userPanel/subsetedusers")
    ) {
      return " pr-12 justify-start gap-2 rounded-tl-[50px] bg-[#DBEDFF]  p-5 flex  items-center w-full";
    } else if (
      (pathName === "/userPanel/subsetedusers" &&
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
