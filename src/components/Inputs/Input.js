"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { myStore } from "@/store/Store";
import { get_province, get_specialties, read_city } from "@/api/ApiCalling";

export const SerchDropDowns = () => {
  const { setCurrentPageDoctorSearch } = myStore();
  const { setSpecialistSearch, specialistSearch } = myStore();
  const [specialties, setSpecialties] = useState([]);
  const [filtredArr, setFiltredArr] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
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
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [isSearching, setIsSearching] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("");
  const handleSelectOption = (name, id) => {
    setIsSearching(false);
    setInputVal("");
    setSpecialistSearch(name, id);
    setCurrentPageDoctorSearch(1);
  };
  return (
    <div className=" flex flex-col gap-3">
      <div
        onClick={() => setIsSearching(!isSearching)}
        className=" px-2 border shadow-[0_1px_15px_-5px_rgba(0,0,0,0.3)] flex justify-center items-center  rounded-xl w-full"
      >
        <CiSearch className=" text-4xl text-[#005DAD]" />
        <input
          value={inputVal}
          onChange={handleInputChange}
          placeholder={
            specialistSearch.name
              ? specialistSearch.name
              : "نام بیماری را جستجو کنید"
          }
          className=" outline-none h-[54px] w-full rounded-xl"
        />
        <IoIosArrowDown
          className={` ${
            isSearching && "rotate-180"
          } transition-all   duration-300 text-xl text-[#858585]`}
        />
      </div>
      <div className="bg-white shadow-lg rounded-xl">
        {isSearching ? (
          <div className="  mt-6 mr-2  p-2 transition-all duration-500 w-[95%] h-52 overflow-auto customScroll flex flex-col">
            {filtredArr.length != 0 ? (
              filtredArr.map((item) => {
                return (
                  <div
                    className=" hover:text-[#005dad]  p-1 border-b mx-2 flex items-center"
                    key={item.id}
                  >
                    <button
                      onClick={() => handleSelectOption(item.name, item.id)}
                    >
                      {item.name}
                    </button>
                  </div>
                );
              })
            ) : (
              <div className=" w-full flex justify-center items-center">
                نتیجه ای یافت نشد
              </div>
            )}
          </div>
        ) : (
          <div className=" transition-all mr-2 duration-300  w-[95%] h-0 overflow-auto customScroll flex flex-col">
            {filtredArr.map((item) => {
              return (
                <div
                  className=" border-b mx-2 p-1 flex items-center"
                  key={item.id}
                >
                  <h5> {item.name}</h5>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export const AcountInfoInputs = (props) => {
  const { isEdit } = myStore();

  const [value, setValue] = useState(props.value);
  return (
    <div className=" flex flex-col gap-2">
      <h2>{props.title}</h2>

      <input
        disabled={!isEdit}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-[320px] h-10 rounded-lg border disabled:bg-[rgba(219,215,215,0.44)]"
      />
    </div>
  );
};
export const BirthDayInput = () => {
  const { isEdit } = myStore();

  return (
    <div className=" flex justify-between items-center">
      <input
        disabled={!isEdit}
        className=" w-[86px] h-10 rounded-lg border disabled:bg-[rgba(219,215,215,0.44)]"
      />
      <input
        disabled={!isEdit}
        className=" w-[86px] h-10 rounded-lg border disabled:bg-[rgba(219,215,215,0.44)]"
      />
      <input
        disabled={!isEdit}
        className=" w-[86px] h-10 rounded-lg border disabled:bg-[rgba(219,215,215,0.44)]"
      />
    </div>
  );
};
export const CitySelect = () => {
  const { isEdit } = myStore();

  return (
    <select
      disabled={!isEdit}
      className="w-[320px] h-10 rounded-lg border disabled:bg-[rgba(219,215,215,0.44)]"
    >
      <option></option>
      <option>تهران</option>
      <option>شیراز</option>
      <option>اردبیل</option>
    </select>
  );
};
export const SelectFilter = ({ title, options, setVal }) => {
  return options ? (
    <select
      onChange={(e) => setVal(e.target.value)}
      className=" w-[200px] text-[#AAAAAA] h-10 rounded-lg border-2 bg-white border-[rgba(219,215,215,0.44)]"
    >
      <option>{title}</option>
      {options.map((item) => {
        return (
          <option key={item.id} value={item.value}>
            {item.name}
          </option>
        );
      })}
    </select>
  ) : (
    <select className=" w-[200px] text-[#AAAAAA] h-10 rounded-lg border-2 bg-white border-[rgba(219,215,215,0.44)]">
      <option>{title}</option>
      <option>تهران</option>
      <option>شیراز</option>
      <option>اردبیل</option>
    </select>
  );
};
export const CitySelectInput = ({
  setCityId,
  cities,
  hiddentitle,
  fromFilter,
}) => {
  return (
    <div className=" lg:text-base text-xs  flex gap-2 flex-col items-start">
      {!hiddentitle && <h5>شهر</h5>}
      <select
        onChange={(e) => {
          console.log(e.target.value);
          if (e.target.value) {
            setCityId({
              id: e.target.value,
              label:
                e.target.options[e.target.selectedIndex].getAttribute(
                  "data-name"
                ),
            });
          }
        }}
        className=" border w-full border-[#636972] rounded-lg p-2"
      >
        <option value={0}>
          {cities.length !== 0
            ? "شهر را انتخاب کنید"
            : "ابتدا استان را انتخاب کنید"}
        </option>
        {fromFilter && (
          <option data-name="همه ی شهر ها" value="">{cities.length !== 0 && "همه ی شهر ها"}</option>
        )}
        {cities.map((item) => {
          return (
            <option data-name={item.cityName} value={item.id} key={item.id}>
              {item.cityName}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export const ProvinceSelectInput = ({
  setCities,
  hiddentitle,
  setProvince = () => console.log("first"),
}) => {
  const [provinces, setProvinces] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await get_province();
      if (data) {
        setProvinces(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" flex lg:text-base text-xs gap-2 flex-col items-start">
      {!hiddentitle && <h5>استان</h5>}
      <select
        onChange={(e) => {
          console.log(e.target.value);
          if (e.target.value) {
            read_city(e.target.value, setCities);
            setProvince({
              id: e.target.value,
              label:
                e.target.options[e.target.selectedIndex].getAttribute(
                  "data-name"
                ),
            });
          } else {
            setCities([]);
          }
        }}
        className=" border w-full border-[#636972] rounded-lg p-2"
      >
        <option value={0}>استان را انتخاب کنید</option>
        {provinces.map((item) => {
          return (
            <option data-name={item.label} key={item.id} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export const SpecialtiesSelectInput = ({ specialistId, setSpecialistId }) => {
  const [specialist, setSpecialist] = useState([]);
  console.log(specialist);
  useEffect(() => {
    const fetchData = async () => {
      const url = "Specialist/read-specialists";

      const data = await get_specialties(url);
      if (data) {
        console.log(data);
        setSpecialist(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" min:w-[40%] w-full flex gap-2 flex-col items-start">
      <h5>تخصص</h5>
      <select
        value={specialistId}
        onChange={(e) => setSpecialistId(e.target.value)}
        className=" border w-full border-[#636972] rounded-lg p-2"
      >
        <option></option>
        {specialist.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export const ClinicSelectInput = ({ setType }) => {
  const [clinicTypes, setClinicTypes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await get_province();
      if (data) {
        setProvinces(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" flex gap-2 flex-col items-start">
      {!hiddentitle && <h5>استان</h5>}
      <select
        onChange={(e) => read_city(e.target.value, setCities)}
        className=" border w-full border-[#636972] rounded-lg p-2"
      >
        <option></option>
        {provinces.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export const SerchDropDownsbimeh = ({ details, title, fn }) => {
  const { setCurrentPageDoctorSearch } = myStore();
  const [filtredArr, setFiltredArr] = useState(details);
  const [inputVal, setInputVal] = useState("");
  const handleInputChange = (event) => {
    filterArray(event.target.value);
    setInputVal(event.target.value);
  };
  const filterArray = (value) => {
    const filtered = details.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltredArr(filtered);
  };

  const [isSearching, setIsSearching] = useState(false);
  const handleSelectOption = (name, id) => {
    setIsSearching(false);
    setInputVal("");
    setCurrentPageDoctorSearch(1);
    fn(name);
  };
  return (
    <div className=" flex flex-col gap-3">
      <h5>{title}</h5>
      <div
        onClick={() => setIsSearching(!isSearching)}
        className=" px-2 border shadow-[0_1px_15px_-5px_rgba(0,0,0,0.3)] flex justify-center items-center  rounded-xl w-full"
      >
        <CiSearch className=" text-4xl text-[#005DAD]" />
        <input
          value={inputVal}
          onChange={handleInputChange}
          placeholder={"نام بیمه را جستجو کنید"}
          className=" outline-none h-[54px] w-full rounded-xl"
        />
        <IoIosArrowDown
          className={` ${
            isSearching && "rotate-180"
          } transition-all   duration-300 text-xl text-[#858585]`}
        />
      </div>
      <div className="bg-white shadow-lg rounded-xl">
        {isSearching ? (
          <div className="  mt-6 mr-2  p-2 transition-all duration-500 w-[95%] h-52 overflow-auto customScroll flex flex-col">
            {filtredArr.length != 0 ? (
              filtredArr.map((item) => {
                return (
                  <div
                    className=" hover:text-[#005dad]  p-1 border-b mx-2 flex items-center"
                    key={item.id}
                  >
                    <button
                      onClick={() => handleSelectOption(item.name, item.id)}
                    >
                      {item.name}
                    </button>
                  </div>
                );
              })
            ) : (
              <div className=" w-full flex justify-center items-center">
                نتیجه ای یافت نشد
              </div>
            )}
          </div>
        ) : (
          <div className=" transition-all mr-2 duration-300  w-[95%] h-0 overflow-auto customScroll flex flex-col">
            {filtredArr.map((item) => {
              return (
                <div
                  className=" border-b mx-2 p-1 flex items-center"
                  key={item.id}
                >
                  <h5> {item.name}</h5>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
