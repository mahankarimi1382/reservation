import Navbar from "@/components/Navbar";
import PhoneMenu from "@/components/PhoneMenu";
import Footer from "@/components/Footer";
import QuestionsSection from "@/container/Home/QuestionsSection";
import SamaneSection from "@/container/Home/SamaneSection";
import UserOpinions from "@/container/Home/UserOpinions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainSearchBar from "@/components/MainSearchBar";
import SpecialtiesSection_Psychiatry from "@/container/Psychiatry/SpecialtiesSection_Psychiatry";
import DoctorsSection_Psychiatry from "@/container/Psychiatry/DoctorsSection_Psychiatry";
import BannersSection_Psychiatry from "@/container/Psychiatry/BannersSection_Psychiatry";
import HospitalsSection_Psychiatry from "@/container/Psychiatry/HospitalsSection_Psychiatry";
import FullBanerSection_Psychiatry from "@/container/Psychiatry/FullBanerSection_Psychiatry";
import MagezineSection_Psychiatry from "@/container/Psychiatry/MagezineSection_Psychiatry";
import MatabSection from "@/container/Home/MatabSection";
export default function Dentist() {
  return (
    <div dir="rtl">
      <div className=" lg:rounded-bl-[300px] rounded-bl-[80px] w-full h-[291px] md:h-[400px] lg:h-[600px]  flex flex-col justify-start gap-20 PsychiatryBg">
        <Navbar />
        <MainSearchBar />
      </div>
      <SpecialtiesSection_Psychiatry />
      <DoctorsSection_Psychiatry />
      <BannersSection_Psychiatry />
      <HospitalsSection_Psychiatry />
      <FullBanerSection_Psychiatry />
      <MatabSection/>
      <QuestionsSection />
      <SamaneSection />
      <UserOpinions />
      <MagezineSection_Psychiatry />
      <Footer />
      <PhoneMenu />
      <ToastContainer />
    </div>
  );
}
