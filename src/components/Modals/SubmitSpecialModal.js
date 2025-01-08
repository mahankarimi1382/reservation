import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/Pics/logo-doctor.png";
import { add_specialties } from "@/api/ApiCalling";
import { nationalCodeStorage } from "@/store/Store";
import { SyncLoader } from "react-spinners";
function SubmitSpecialModal({ setIsAddSpecialtiesModal }) {
  const { userName } = nationalCodeStorage();
  const [specialName, setSpecialName] = useState("");
  const [isLoading,setIsLoading]=useState(false)
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: userName,
    },
    name: specialName,
  };
  return (
    <div
      onClick={() => setIsAddSpecialtiesModal(false)}
      className=" z-20  w-screen h-screen top-0 justify-center items-center flex right-0 fixed bg-[rgba(0,0,0,0.6)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" w-1/3 h-3/4 rounded-xl p-3 bg-white flex flex-col items-center"
      >
        <Image src={logo} alt="logo" width={67} />
        <div className=" w-full flex gap-2 p-2 flex-col">
          <h5 className=" text-lg">کد مکسا :</h5>
          <input className=" border shadow-md rounded-lg p-3" />
        </div>
        <div className=" w-full flex gap-2 p-2 flex-col">
          <h5 className=" text-lg">عنوان مکسا</h5>
          <input className=" border shadow-md rounded-lg p-3" />
        </div>
        <div className=" w-full flex gap-2 p-2 flex-col">
          <h5 className=" text-lg">عنوان عمومی</h5>
          <input
            onChange={(e) => setSpecialName(e.target.value)}
            className=" border shadow-md rounded-lg p-3"
          />
        </div>
        <div className=" w-full flex gap-2 p-2 flex-col">
          <h5 className=" text-lg">ویرایش آیکون :</h5>

          <div className=" w-full flex  justify-center items-center">
            {image ? (
              <Image
                className=" bg-black w-20 h-20 aspect-square"
                onClick={() => setImage(null)}
                width={50}
                height={20}
                src={image}
                alt="Uploaded"
              />
            ) : (
              <input
                className=" w-full border shadow-md rounded-lg p-3"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            )}{" "}
          </div>
        </div>
        <button
          onClick={() => add_specialties(data,setIsLoading,setIsAddSpecialtiesModal)}
          className=" flex justify-center items-center min-h-10 w-1/3 gap-2 rounded-lg bg-[#005DAD] text-white"
        >
          {isLoading ? <SyncLoader color="white" size={10} /> : "ثبت"}
        </button>{" "}
      </div>
    </div>
  );
}

export default SubmitSpecialModal;
