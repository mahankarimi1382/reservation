import Image from "next/image";
import React from "react";
import logo from "../../../public/pics/logo-doctor.png";
import { RxCross2 } from "react-icons/rx";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import matniminimal from "../../../public/pics/matniminimal.png";
import sotiminimal from "../../../public/pics/sotiMinimal.png";
import tasviriminimal from "../../../public/pics/tasviriMinimal.png";
import hospitalMinimal from "../../../public/pics/hospitalMinimal.png";
import matabMinimal from "../../../public/pics/matabMinimal.png";

function VisitSelectModal({ isVisitSelectModal, setIsVisitSelectModal }) {
  const handleCloseModal = () => {
    setIsVisitSelectModal("");
  };
  return (
    <div
      onClick={handleCloseModal}
      className=" w-screen h-screen top-0 z-50 justify-center items-center flex right-0 fixed bg-[rgba(0,0,0,0.6)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" w-[448px] h-[325px] flex flex-col justify-center gap-5 items-center bg-white rounded-xl"
      >
        <div className=" w-full  items-end flex justify-end px-2 -mb-10">
          <RxCross2
            onClick={handleCloseModal}
            className=" cursor-pointer text-xl text-[#717171]"
          />
        </div>
        <Image width={67} src={logo} alt="logo" />
        <div className=" w-[223px] flex px-1 justify-center items-center h-[43px]">
          {isVisitSelectModal === "حضوری" ? (
            <h2 className="p-1 flex justify-center items-center text-[#005DAD] font-semibold text-xl">
              حضوری
            </h2>
          ) : (
            <h2 className="p-1 flex justify-center items-center text-[#005DAD] font-semibold text-xl">
              مشاوره آنلاین
            </h2>
          )}
        </div>
        {isVisitSelectModal === "آنلاین" ? (
          <h2>لطفا نوع مشاوره آنلاین را انتخاب کنید</h2>
        ) : (
          <h2>لطفا نوع ویزیت حضوری را انتخاب کنید</h2>
        )}
        <div className=" w-full">
          <FormControl className=" w-full ">
            {isVisitSelectModal === "آنلاین" ? (
              <RadioGroup
                className=" flex justify-center gap-3 flex-row items-center"
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <div className=" border-2 rounded-xl pl-2   flex justify-center items-center gap-2">
                  <FormControlLabel
                    className=" mr-0 "
                    value="online"
                    control={<Radio className=" text-3xl" />}
                  />
                  <Image width={16} alt="icon" src={matniminimal} />
                  متنی
                </div>
                <div className=" border-2 rounded-xl pl-2  flex justify-center items-center gap-2">
                  <FormControlLabel
                    className=" mr-0 "
                    value="tasviri"
                    control={<Radio />}
                  />
                  <Image src={tasviriminimal} alt="icon" width={16} />
                  تصویری
                </div>
                <div className=" border-2 rounded-xl pl-2  flex justify-center items-center gap-2">
                  <FormControlLabel
                    className=" mr-0 "
                    value="sotti"
                    control={<Radio />}
                  />
                  <Image src={sotiminimal} alt="icon" width={16} />
                  صوتی
                </div>
              </RadioGroup>
            ) : (
              <RadioGroup
                className=" flex justify-center gap-3 flex-row items-center"
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <div className=" border-2 rounded-xl pl-2   flex justify-center items-center gap-2">
                  <FormControlLabel
                    className=" mr-0 "
                    value="online"
                    control={<Radio className=" text-3xl" />}
                  />
                  <Image width={16} alt="icon" src={matabMinimal} />
                  مطب
                </div>
                <div className=" border-2 rounded-xl pl-2  flex justify-center items-center gap-2">
                  <FormControlLabel
                    className=" mr-0 "
                    value="tasviri"
                    control={<Radio />}
                  />
                  <Image src={hospitalMinimal} alt="icon" width={16} />
                  بیمارستان
                </div>
              </RadioGroup>
            )}
          </FormControl>
        </div>
        <button className=" bg-[#005DAD] text-white text-xl px-16 p-2 rounded-xl">
          جستجو
        </button>
      </div>
    </div>
  );
}

export default VisitSelectModal;
