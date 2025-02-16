import Navbar from "@/components/Navbar";
import PhoneMenu from "@/components/PhoneMenu";
import BannersSection from "@/container/Home/BannersSection";
import DoctorsSection from "@/container/Home/DoctorsSection";
import Footer from "@/components/Footer";
import FullBanerSection from "@/container/Home/FullBanerSection";
import HospitalsSection from "@/container/Home/HospitalsSection";
import MagezineSection from "@/container/Home/MagezineSection";
import MatabSection from "@/container/Home/MatabSection";
import QuestionsSection from "@/container/Home/QuestionsSection";
import SamaneSection from "@/container/Home/SamaneSection";
import SpecialtiesSection from "@/container/Home/SpecialtiesSection";
import UserOpinions from "@/container/Home/UserOpinions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainSearchBar from "@/components/MainSearchBar";
import SupportModal from "@/components/modals/SupportModal";
import EventSection from "@/components/EventSection";
export default function Home() {
  return (
    <div dir="rtl" className=" pb-5">
      <EventSection />
      <div className=" lg:rounded-bl-[300px] justify-start gap-16 rounded-bl-[80px] w-full h-[291px]  md:h-[400px] lg:h-[500px] xl:h-[600px]  flex flex-col lg:pt-5   bg-[#C2E2FF]">
        <Navbar />
        <MainSearchBar />
      </div>
      <SpecialtiesSection />
      <DoctorsSection />
      <BannersSection />
      <HospitalsSection />
      <FullBanerSection />
      <MatabSection />
      <QuestionsSection />
      <SamaneSection />
      <UserOpinions />
      <MagezineSection />
      <Footer />
      {/* <PhoneMenu /> */}
      <ToastContainer />
      <SupportModal />
    </div>
  );
}
