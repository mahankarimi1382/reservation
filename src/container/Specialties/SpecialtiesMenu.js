"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

function SpecialtiesMenu({ specialties }) {
  const [cards, setCards] = useState(specialties);

  const handleCardClick = (id) => {
    const updatedCards = cards.map((card) =>
      card.id === id
        ? { ...card, isselected: true }
        : { ...card, isselected: false }
    );
    setCards(updatedCards);
  };
  return (
    <div className=" w-[436px] rounded-xl bg-white p-5 gap-2 flex flex-col justify-center items-center">
      {cards.map((item) => {
        return (
          <div
            onClick={() => handleCardClick(item.id)}
            key={item.id}
            className={`${
              item.isselected && "bg-[#ECF2F9]"
            } w-full cursor-pointer  flex justify-between items-center border rounded-xl `}
          >
            <div className=" flex justify-center items-center gap-3 px-5 p-3">
              <Image src={item.icon} alt="icon" width={32} />
              <h5>{item.title}</h5>
            </div>
            <IoIosArrowBack className=" text-2xl text-[#005DAD]" />
          </div>
        );
      })}
    </div>
  );
}

export default SpecialtiesMenu;
