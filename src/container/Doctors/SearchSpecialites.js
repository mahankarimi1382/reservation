import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Checkbox } from "@mui/material";
import { get_specialties } from "@/api/ApiCalling";
import { myStore } from "@/store/Store";

function SearchSpecialites() {
  const { setCurrentPageDoctorSearch } = myStore();
  const [specialistIDval, setSpecialistIDval] = useState("");
  const [storedIDs, setStoredIDs] = useState("");
  const [specialistNameval, setSpecialistNameval] = useState("");
  const [storedNames, setStoredNames] = useState("");
  const [checkedItems, setCheckedItems] = useState({});
  const { setSpecialistSearch, specialistSearch } = myStore();
  const [specialties, setSpecialties] = useState([]);
  const [filtredArr, setFiltredArr] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (event) => {
    filterArray(event.target.value);
    setInputVal(event.target.value);
  };

  const filterArray = (value) => {
    const filtered = specialties.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltredArr(filtered);
  };

  const fetchData = async () => {
    const url = "Specialist/read-specialists";
    const data = await get_specialties(url);
    if (data) {
      setSpecialties(data);
      setFiltredArr(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectOption = (name, id) => {
    const newCheckedItems = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(newCheckedItems);

    console.log(id);
    setSpecialistIDval(id);
    if (storedIDs) {
      setStoredIDs(`${storedIDs},${specialistIDval}`);
    } else {
      setStoredIDs(specialistIDval);
    }

    setSpecialistNameval(name);
    if (storedNames) {
      setStoredNames(`${storedNames},${specialistNameval}`);
    } else {
      setStoredNames(specialistNameval);
    }
  };

  const handleSubmit = () => {
    if (storedIDs) {
      setSpecialistSearch(
        `${storedNames},${specialistNameval}`,
        `${storedIDs},${specialistIDval}`
      );
    } else {
      setSpecialistSearch(specialistNameval, specialistIDval);
    }
    setStoredIDs("");
    setStoredNames("");
    setSpecialistNameval("");
    setSpecialistIDval("");
    setCheckedItems({}); // ریست کردن چک‌باکس‌ها
    setCurrentPageDoctorSearch(1);
  };

  return (
    <div className=" w-full flex justify-center items-center ">
      <div className=" py-4 w-full rounded-xl items-center flex flex-col border max-h-[400px] shadow-md">
        <label className=" px-2 gap-2 bg-[#F4F4F4] h-[43px] flex items-center w-[85%] rounded-xl">
          <CiSearch className=" text-2xl " />
          <input
            onChange={handleInputChange}
            placeholder="جستجو تخصص"
            className=" bg-[#F4F4F4] outline-none"
          />
        </label>
        <div className=" w-[95%] overflow-auto customScroll flex flex-col">
          {filtredArr.map((item) => {
            return (
              <div className=" border-b mx-2 flex items-center" key={item.id}>
                <Checkbox
                  checked={!!checkedItems[item.id]}
                  onChange={() => {
                    handleSelectOption(item.name, item.id);
                  }}
                />
                <h5>{item.name}</h5>
              </div>
            );
          })}
        </div>
        <button
          disabled={!specialistIDval}
          onClick={handleSubmit}
          className=" disabled:bg-slate-300 lg: bg-[#005DAD] text-white w-[80%] rounded-xl p-2 mt-2"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default SearchSpecialites;
