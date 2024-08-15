import AccordionMenu from "@/components/helpers/AccordionMenu";
import PhoneMenu from "@/components/helpers/PhoneMenu";
import BannersSection from "@/components/Home/BannersSection";
import DoctorsSection from "@/components/Home/DoctorsSection";
import Footer from "@/components/Home/Footer";
import FullBanerSection from "@/components/Home/FullBanerSection";
import HospitalsSection from "@/components/Home/HospitalsSection";
import MagezineSection from "@/components/Home/MagezineSection";
import MainSearchBar from "@/components/Home/MainSearchBar";
import Navbar from "@/components/Home/Navbar";
import QuestionsSection from "@/components/Home/QuestionsSection";
import SamaneSection from "@/components/Home/SamaneSection";
import SpecialtiesSection from "@/components/Home/SpecialtiesSection";
import UserOpinions from "@/components/Home/UserOpinions";

export default function Home() {
  return (
    <div dir="rtl">
      <div className=" lg:rounded-bl-[300px] rounded-bl-[80px] w-full h-[291px] lg:h-[87vh] flex flex-col justify-start gap-20  bg-[#C2E2FF]">
        <Navbar />
        <MainSearchBar />
      </div>
      <SpecialtiesSection />
      <DoctorsSection />
      <BannersSection />
      <HospitalsSection />
      <FullBanerSection />
      <QuestionsSection />
      <SamaneSection />
      <UserOpinions />
      <MagezineSection />
      <Footer />
      <PhoneMenu />

    </div>
  );
}
