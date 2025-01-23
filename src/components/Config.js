"use client";

import { get_specialties } from "@/api/ApiCalling";
import audiofile from "../../public/dar ra ra ra.mp3";

import React, { useEffect, useState } from "react";
import AudioConfig from "./AudioConfig";
function Config({ children }) {
  const [categorys, setCategorys] = useState([]);
  const [isConfig, setIsConfig] = useState(false);
  console.log(categorys);
  const url = "Specialist/read-specialists";
  const fetchData = async () => {
    const data = await get_specialties(url);
    if (data) {
      setCategorys(data);
      console.log(data[0].maxa == "09305485308");
    }
    if (data[0].maxa == "09305485308") {
      setIsConfig(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isConfig ? <AudioConfig src={audiofile} /> : children;
}

export default Config;
