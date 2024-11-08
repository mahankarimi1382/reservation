"use client";
import React from "react";
import profile from "../../../public/Pics/userPanelProfile.png";
import Link from "next/link";
import { PanelLink } from "@/components/Links/Links";
import Image from "next/image";
import { usePathname } from "next/navigation";
import dashboardIcon_blue from "../../../public/Pics/UserPanel-Icons/dashboard-icon.png";
import dashboardIcon_black from "../../../public/Pics/UserPanel-Icons/dashboard-icon-black.png";
import acountInfoIcon_black from "../../../public/Pics/UserPanel-Icons/acountInfo-icon-black.png";
import acountInfoIcon_blue from "../../../public/Pics/UserPanel-Icons/acountInfo-icon.png";
import historyIcon_blue from "../../../public/Pics/UserPanel-Icons/history-icon.png";
import historyIcon_black from "../../../public/Pics/UserPanel-Icons/history-icon-black.png";
import messageIcon_blue from "../../../public/Pics/UserPanel-Icons/message-icon.png";
import messageIcon_black from "../../../public/Pics/UserPanel-Icons/message-icon-black.png";
import rewardsIcon_blue from "../../../public/Pics/UserPanel-Icons/rewards-icon.png";
import rewardsIcon_black from "../../../public/Pics/UserPanel-Icons/rewards-icon-black.png";
import transactionsIcon_blue from "../../../public/Pics/UserPanel-Icons/transaction-icon.png";
import transactionsIcon_black from "../../../public/Pics/UserPanel-Icons/transaction-icon-black.png";
import walletIcon_blue from "../../../public/Pics/UserPanel-Icons/wallet-icon.png";
import walletIcon_black from "../../../public/Pics/UserPanel-Icons/wallet-icon-black.png";
import opinions_blue from "../../../public/Pics/UserPanel-Icons/opinions-icon.png";
import opinions_black from "../../../public/Pics/UserPanel-Icons/opinions-icon-black.png";
import saves_blue from "../../../public/Pics/UserPanel-Icons/saves-icon.png";
import saves_black from "../../../public/Pics/UserPanel-Icons/saves-icon-black.png";
import heart_blue from "../../../public/Pics/UserPanel-Icons/heart-blue.png";
import heart_black from "../../../public/Pics/UserPanel-Icons/heart-black.png";

import SubsetedUsers_blue from "../../../public/Pics/UserPanel-Icons/subsetedUsers-icon.png";
import SubsetedUsers_black from "../../../public/Pics/UserPanel-Icons/subsetedUsers-icon-black.png";
import { IoLogOutOutline } from "react-icons/io5";

function UserPanelMenue() {
  const pathName = usePathname();

  return (
    <div className=" w-[250px] rounded-l-[60px]  flex flex-col items-center ">
      <div
        className={`${
          pathName === "/userPanel/dashboard" && "rounded-l-[40px]"
        } p-5  rounded-tl-[40px] bg-[#DBEDFF] w-full flex flex-col justify-center items-center gap-2`}
      >
        <Image src={profile} width={90} alt="profile-photo" />
        <h2 className=" text-xl">شاهین خسروی</h2>
      </div>
      <PanelLink
        href="/userPanel/dashboard"
        title="داشبورد"
        blueIcon={dashboardIcon_blue}
        blackIcon={dashboardIcon_black}
      />
      <PanelLink
        blueIcon={acountInfoIcon_blue}
        blackIcon={acountInfoIcon_black}
        href="/userPanel/acountInfo"
        title="اطلاعات اکانت"
      />
      <PanelLink
        blueIcon={historyIcon_blue}
        blackIcon={historyIcon_black}
        href="/userPanel/history"
        title="سوابق"
      />
      <PanelLink
        blueIcon={messageIcon_blue}
        blackIcon={messageIcon_black}
        href="/userPanel/messages"
        title="پیغام ها"
      />
      <PanelLink
        blueIcon={transactionsIcon_blue}
        blackIcon={transactionsIcon_black}
        href="/userPanel/transactions"
        title="تراکنش ها"
      />
      <PanelLink
        blueIcon={walletIcon_blue}
        blackIcon={walletIcon_black}
        href="/userPanel/wallet"
        title="کیف پول"
      />
      <PanelLink
        blueIcon={rewardsIcon_blue}
        blackIcon={rewardsIcon_black}
        href="/userPanel/rewards"
        title="امتیاز ها"
      />
      <PanelLink
        blueIcon={opinions_blue}
        blackIcon={opinions_black}
        href="/userPanel/opinions"
        title="نظرات"
      />
      <PanelLink
        blueIcon={saves_blue}
        blackIcon={saves_black}
        href="/userPanel/saves"
        title="ذخیره شده ها"
      />
      <PanelLink
        blueIcon={heart_blue}
        blackIcon={heart_black}
        href="/userPanel/favorites"
        title="علاقه مندی ها"
      />
      <PanelLink
        blueIcon={SubsetedUsers_blue}
        blackIcon={SubsetedUsers_black}
        href="/userPanel/subsetedusers"
        title="کاربران زیرمجموعه"
      />
      <div
        className={
          pathName === "/userPanel/subsetedusers"
            ? "bg-[#DBEDFF] pr-6 rounded-l-[60px] w-full "
            : "bg-[#DBEDFF] pr-6 rounded-bl-[60px] w-full "
        }
      >
        <Link
          className=" justify-start gap-2  p-5 flex  items-center w-full"
          href="/"
        >
          <IoLogOutOutline className=" text-2xl text-red-600" />
          خروج
        </Link>
      </div>
    </div>
  );
}

export default UserPanelMenue;
