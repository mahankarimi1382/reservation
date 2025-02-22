import React, { useEffect, useState } from "react";
import heart from "../../../public/Pics/Specialties/heart-icon.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { get_specialties } from "@/api/ApiCalling";
import { RxCross2 } from "react-icons/rx";
import LoadingComponent from "../LoadingComponent";
import { useRouter } from "next/navigation";
import { myStore } from "@/store/Store";

function SpecialtiesListModal({ setIsSpecialtiesModal }) {
  const router = useRouter();
  const {
    setSpecialistSearch,
    setMultiSpecialtiesBoxes,
    multiSpecialtiesBoxes,
  } = myStore();
  const [inputValue, setInputValue] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [filtredArr, setFiltredArr] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    filterArray(event.target.value);
  };
  const filterArray = (value) => {
    const filtered = categorys.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltredArr(filtered);
  };
  console.log(categorys);
  const [loading, setLoading] = useState(true);
  const url = "Specialist/read-specialists";
  const fetchData = async () => {
    const data = await get_specialties(url);
    if (data) {
      setCategorys(data);
      setFiltredArr(data);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleCloseModal = () => {
    setIsSpecialtiesModal(false);
  };
  return (
    <div className=" w-screen h-screen top-0 justify-center items-center flex z-50 right-0 fixed bg-[rgba(0,0,0,0.6)]">
      <div className=" relative w-[60%] min-w-80 min-h-[550px] max-h-[550px] bg-white rounded-xl py-5 p-2 gap-5 flex flex-col">
        <RxCross2
          className=" z-50 absolute top-1 left-1 cursor-pointer"
          onClick={handleCloseModal}
        />
        <div className=" flex bg-white items-center border rounded-lg px-2 lg:px-10 border-[#005DAD]">
          <CiSearch className=" text-[#C0C0C0] text-xl lg:text-3xl" />
          <input
            onChange={handleInputChange}
            placeholder={`جستجو تخصص از بین ${categorys.length} تخصص`}
            className=" w-full outline-none py-2 bg-white text-xs  lg:text-xl  "
          />
        </div>
        <div className=" pb-2 rounded-xl  flex flex-wrap gap-8 justify-center pt-3 items-center customScroll rounded-r-xl overflow-auto">
          {filtredArr.map((item) => {
            return (
              <button
                onClick={() => {
                  router.push("doctors-page");
                  setSpecialistSearch(item.id);
                  setMultiSpecialtiesBoxes([
                    ...multiSpecialtiesBoxes,
                    {
                      id: item.id,
                      caption: item.name,
                      type: "specialties",
                    },
                  ]);
                }}
                key={item.id}
                className="  group cursor-pointer  hover:shadow-lg w-[123px] h-[123px]  hover:-mt-3 transition-all shadow-red-600  hover:shadow-[#6991b4] lg:w-[123px] lg:h-[123px] flex flex-col justify-evenly items-center rounded-xl border border-[#DBD7D7]"
              >
                <div className=" bg-[#eaeaea] transition-all group-hover:bg-[#6eb6f6] rounded-full w-[55px] h-[55px] flex justify-center items-center ">
                  <Image
                    alt="icon"
                    width={42}
                    height={42}
                    src={item.logoFile}
                  />
                </div>
                <h2 className=" text-center text-[10px] font-semibold lg:font-medium lg:text-[12px]">
                  {item.name}
                </h2>
              </button>
            );
          })}
        </div>
        {loading && <LoadingComponent />}
      </div>
    </div>
  );
}

export default SpecialtiesListModal;
