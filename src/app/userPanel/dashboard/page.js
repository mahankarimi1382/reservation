import Navbar from "@/components/Navbar";
import DashboardBox from "@/container/userPanel/DashboardBox";
import HistorySummarySection from "@/container/userPanel/HistorySummarySection";
import UserPanelMenue from "@/container/userPanel/UserPanelMenue";
import React from "react";
import historyIcon from "../../../../public/Pics/history-icon.png";
import RewardsSummarySection from "@/container/userPanel/RewardsSummarySection";
import rewardsIcon from "../../../../public/Pics/UserPanel-Icons/rewards-icon.png";
import messageIcon from "../../../../public/Pics/UserPanel-Icons/message-icon.png";
import profile from "../../../../public/Pics/userPanelProfile.png";
import MessageSummarySection from "@/container/userPanel/MessageSummarySection";
import opinnionsIcon from "../../../../public/Pics/UserPanel-Icons/opinions-icon.png";
import Image from "next/image";
import OpinnionsSummarySection from "@/container/userPanel/OpinnionsSummarySection";
import WalletSummarySection from "@/container/userPanel/WalletSummarySection";
import walletIcon from "../../../../public/Pics/UserPanel-Icons/wallet-icon.png";
import savedsIcon from "../../../../public/Pics/UserPanel-Icons/saves-icon.png";
import SavedsSummarySection from "@/container/userPanel/SavedsSummarySection";
function page() {
  return (
    <div dir="rtl" className=" bg-[#F6FBFF] w-full">
      <Navbar />
      <div className=" flex w-full">
        <UserPanelMenue />
        <div className=" w-[90%] flex justify-center ">
          <div className=" bg-white rounded-xl shadow-md flex flex-col gap-10 w-[85%]">
            <div className=" flex gap-3 p-5 items-center">
              <Image src={profile} width={67} alt="profile" />
              <h2 className=" text-lg">شاهین خسروی خوش آمدید</h2>
            </div>
            <div className=" -mt-10 flex justify-between px-10">
              <DashboardBox title="سوابق" icon={historyIcon}>
                <HistorySummarySection />
              </DashboardBox>
              <DashboardBox title="امتیاز ها" icon={rewardsIcon}>
                <RewardsSummarySection />
              </DashboardBox>
              <DashboardBox title="پیغام ها" icon={messageIcon}>
                <MessageSummarySection />
              </DashboardBox>
            </div>
            <div className=" flex justify-between px-10">
              <DashboardBox title="نظرات" icon={opinnionsIcon}>
                <OpinnionsSummarySection />
              </DashboardBox>
              <DashboardBox title="کیف پول" icon={walletIcon}>
                <WalletSummarySection />
              </DashboardBox>

              <DashboardBox title="ذخیره شده ها" icon={savedsIcon}>
                <SavedsSummarySection />
              </DashboardBox>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
