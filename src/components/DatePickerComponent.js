"use client";
import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Icon from "react-multi-date-picker/components/icon";
function DatePickerComponent({ title }) {
  return (
    <div style={{ direction: "rtl" }}>
      <DatePicker
        render={(value, openCalendar) => {
          return (
            <button
              className=" flex border-2 justify-between bg-white  items-center text-[#AAAAAA] w-[170px] rounded-md p-1 px-3"
              onClick={openCalendar}
            >
              {value ? value : title}
              <Icon />
            </button>
          );
        }}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
    </div>
  );
}

export default DatePickerComponent;
