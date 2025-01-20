import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import person from "../../../public/Pics/personFake.png";
import { FaRegSmile } from "react-icons/fa";
import star from "../../../public/Pics/star.png";
import doctorAnswer from "../../../public/Pics/doctorAnswerFake.png";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

function SeeNazarModal({ setIsNazarModal }) {
  const nazarat = [
    {
      id: 1,
      name: "ایمان خسروی",
      date: "1402/10/12",
      star: 5,
      ismatab: true,
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      pezeshkAnswer: {
        date: "1402/10/12",
        captopn:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      },
    },
    {
      id: 2,
      name: "ایمان خسروی",
      date: "1402/10/12",
      star: 5,
      ismatab: true,
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      pezeshkAnswer: {
        date: "1402/10/12",
        captopn:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      },
    },
  ];
  const handleCloseModal = () => {
    setIsNazarModal(false);
  };
  return (
    <div
      className=" z-20  w-screen h-screen top-0 justify-center items-center flex right-0 fixed bg-[rgba(0,0,0,0.6)]"
    >
      <div className=" w-[70%] h-[500px] p-3 pb-10 bg-white rounded-xl">
        <div className=" w-full flex  justify-end">
          <RxCross2
            onClick={handleCloseModal}
            className=" cursor-pointer text-2xl ml-3 text-[#353535]"
          />
        </div>
        <div className=" bg-white customScroll overflow-auto gap-5  flex flex-col items-center h-full ">
          {nazarat.map((item) => {
            return (
              <div
                key={item.id}
                className=" w-[90%] bg-white border gap-2 flex flex-col shadow-md p-5 rounded-xl "
              >
                <div className=" flex justify-between">
                  <div className=" flex justify-center items-center gap-5">
                    <Image src={person} alt="person" width={80} />
                    <div className=" flex gap-2 flex-col">
                      <h2 className=" text-lg">{item.name}</h2>
                      <h5 className=" text-sm text-[#757575]">
                        نظر داده شده در {item.date}
                      </h5>
                      <h5 className=" text-sm gap-1 text-[#005DAD] flex justify-center items-center">
                        <FaRegSmile />
                        این پزشک را پیشنهاد می‌کنم
                      </h5>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className=" flex gap-1">
                      {Array.from({ length: item.star }).map((_, index) => {
                        return (
                          <div key={index}>
                            <Image width={18} alt="" src={star} />
                          </div>
                        );
                      })}
                    </div>
                    {item.ismatab && (
                      <h5 className=" text-sm text-[#005DAD]">
                        ویزیت شده در مطب ونک
                      </h5>
                    )}
                  </div>
                </div>
                <p className=" text-[#3B3B3B]">{item.caption}</p>
                <div className=" w-full flex justify-end">
                  <div className=" flex gap-10">
                    <h5 className=" text-[#6B6B6B]">آیا این پاسخ مفید بود؟</h5>
                    <h5 className=" flex justify-center items-center gap-1">
                      7
                      <AiOutlineLike className=" text-[#6B6B6B] text-xl" />
                    </h5>
                    <h5 className=" flex justify-center gap-1 items-center">
                      2
                      <AiOutlineDislike className=" text-[#6B6B6B] text-xl" />
                    </h5>
                  </div>
                </div>
                {item.pezeshkAnswer && (
                  <div className=" rounded-xl flex bg-[#EBF6FF] items-center p-5 gap-5">
                    <Image src={doctorAnswer} alt="doctor-prof" width={88} />
                    <div className=" flex flex-col">
                      <div className=" flex gap-2">
                        <h2 className="">پاسخ پزشک</h2>
                        <p className=" text-sm text-[#757575]">
                          جواب داده شده در {item.pezeshkAnswer.date}
                        </p>
                      </div>
                      <p className=" text-[#757575]">
                        {item.pezeshkAnswer.captopn}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SeeNazarModal;
