"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import doctorprof from "../../public/Pics/abbas.png";
import star from "../../public/Pics/star.png";
import hospital from "../../public/Pics/hospital.png";
import monitor from "../../public/Pics/monitor-mobbile.png";
import { AiFillLike } from "react-icons/ai";
import barezvijegi from "../../public/Pics/barezvijegi.png";
import { IoIosArrowRoundBack } from "react-icons/io";

import Link from "next/link";
import {
  EmtyReservButt,
  MatabShowButt,
  SeeDoctorNazaratButt,
} from "./Buttons/Button";
import { search_doctors } from "@/api/ApiCalling";
import { Pagination } from "@mui/material";
const allDoctors = [
  {
    id: 1,
    name: "بهرام میرزایی",
    mainskill: "متخصص مغز و اعصاب",
    rate: "4.5/5 از (نظر 320)",
    stars: 5,
    recomend: "97% پیشنهاد کابران ",
    skills: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
    isOnline: true,
    ishozori: true,
    loc: [
      { id: 1, loc: "مطب ونک" },
      { id: 2, loc: "بیمارستان کسری" },
    ],
    charecter: [
      { id: 1, caption: "صبور" },
      { id: 2, caption: "دلسوز" },
      { id: 3, caption: "خوش برخورد" },
    ],
  },
  {
    id: 2,
    name: "بهرام میرزایی",
    mainskill: "متخصص مغز و اعصاب",
    rate: "4.5/5 از (نظر 320)",
    stars: 4,
    recomend: "97% پیشنهاد کابران",
    skills: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
    isOnline: true,
    ishozori: true,
    loc: [
      { id: 1, loc: "مطب ونک" },
      { id: 2, loc: "بیمارستان کسری" },
    ],
    charecter: [
      { id: 1, caption: "صبور" },
      { id: 2, caption: "دلسوز" },
      { id: 3, caption: "خوش برخورد" },
    ],
  },
  {
    id: 3,
    name: "بهرام میرزایی",
    mainskill: "متخصص مغز و اعصاب",
    rate: "4.5/5 از (نظر 320)",
    stars: 3,
    recomend: "97% پیشنهاد کابران",
    skills: "جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات",
    isOnline: true,
    ishozori: true,
    loc: [
      { id: 1, loc: "مطب ونک" },
      { id: 2, loc: "بیمارستان کسری" },
    ],
    charecter: [
      { id: 1, caption: "صبور" },
      { id: 2, caption: "دلسوز" },
      { id: 3, caption: "خوش برخورد" },
    ],
  },
];
function AllDoctorsCard({ loc = true }) {
  const [loading, setIsLoading] = useState("");
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [specialistId, setSpecialistId] = useState("");
  const [provinceId, setProvinceId] = useState("");
  const [cityId, setCityId] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [doctors, setDoctors] = useState([]);

  const getDoctors = async () => {
    let data = {
      name: name || "",
      pagesize: 3,
      currentPage: currentPage || "",
      specialistId: specialistId || "",
      provinceId: provinceId || "",
      cityId: cityId || "",
    };
    const result = await search_doctors(data);
    if (result) {
      console.log(result);
      setDoctors(result.list);
      setIsLoading(false);

      let number = result.totalRecords / 3;
      let totalpages = Math.ceil(number);
      setTotalPages(totalpages);
    }
  };

  useEffect(() => {
    getDoctors();
    setIsLoading(true);
  }, [currentPage]);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className=" w-full justify-center items-center flex flex-col gap-10">
      {doctors.map((item) => {
        return (
          <div
            key={item.id}
            className=" rounded-2xl px-10 gap-6 flex flex-col w-full bg-white pb-2 min-h-[400px]"
          >
            <div className="flex justify-between  border-[#CBCBCB] border-b py-7">
              <div className=" w-1/2  flex items-center justify-start gap-5">
                <Image
                  width={90}
                  height={90}
                  className=" w-[90px] h-[90px] border-2  border-[#005DAD] rounded-full"
                  src={doctorprof}
                  alt="doctor-prof"
                />
                <div className=" flex flex-col gap-5">
                  <h2 className=" text-[22px]">
                    {item.doctorName} {item.doctorFamily}
                  </h2>
                  <h2 className=" text-[#757575]">{item.specialist}</h2>
                </div>
              </div>
              <div className=" flex flex-col items-start justify-center gap-2 ">
                <div className=" flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => {
                    return (
                      <div key={index}>
                        <Image width={22} alt="" src={star} />
                      </div>
                    );
                  })}
                </div>
                <h2 className="  rounded flex items-center justify-center gap-1 text-[#1F7168]">
                  <AiFillLike className=" text-lg" />
                  {item.recomend}
                </h2>
                <SeeDoctorNazaratButt />
              </div>
            </div>
            <h2 className=" text-lg">
              خدمات :<span className=" text-[#7E7E7E]">{item.skills}</span>
            </h2>
            <div className=" flex gap-5 text-lg">
              <h2>روش نوبت دهی : </h2>
              <h2 className=" flex gap-2">
                <Image width={24} src={monitor} alt="monitor-icon" />
                ویزیت آنلاین
              </h2>

              <h2 className=" flex gap-2">
                <Image width={24} src={hospital} alt="monitor-icon" />
                ویزیت حضوری
              </h2>
            </div>

            {loc && (
              <div className=" flex gap-4">
                <MatabShowButt
                  items={item.doctorTreatmentCenterList}
                />
              </div>
            )}

            {/* <div className=" flex gap-3 text-lg pb-5 border-b">
              <Image src={barezvijegi} alt="icon" width={24} />
              <h2> ویژگی های بارز پزشک :</h2>
              {item.charecter.map((item2) => {
                return (
                  <h2 className="text-[#1F7168]" key={item2.id}>
                    {item2.caption}
                  </h2>
                );
              })}
            </div> */}
            <div className=" -mt-3 flex justify-between">
              <EmtyReservButt docDetail={item} />
              <Link
                href={`/doctors/${item.id}`}
                className=" flex justify-center p-2 px-4 rounded-md text-white items-center bg-[#005DAD] "
              >
                نوبت بگیرید
                <IoIosArrowRoundBack className=" text-2xl" />
              </Link>
            </div>
          </div>
        );
      })}
      <Pagination
        onChange={handleChange}
        page={currentPage}
        count={totalPages}
        color="primary"
      />
    </div>
  );
}

export default AllDoctorsCard;
