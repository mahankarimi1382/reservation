import React from "react";

const Test = () => {
  const arr = [
    { turnNumber: 1, stime: "12:00 PM", etime: "13:00 PM", isFree: false },
    { turnNumber: 1, stime: "12:00 PM", etime: "13:00 PM", isFree: false },
    { turnNumber: 1, stime: "12:00 PM", etime: "13:00 PM", isFree: false },
    { turnNumber: 1, stime: "13:00 PM", etime: "14:00 PM", isFree: true },
  ];

  // مرحله 1: ایجاد نقشه
  const map = new Map();
  arr.map((item) => {
    if (!map.has(item.etime)) {
      map.set(item.etime, item.isFree);
    } else {
      if (item.isFree && map.get(item.etime)) {
        map.set(item.etime, item.isFree);
      } else {
        map.set(item.etime, false);
      }
    }
  });

  // مرحله 2: فیلتر کردن آیتم‌ها و ذخیره در آرایه جدید
  const result = arr.filter((item) => map.get(item.etime) === item.isFree);

  // مرحله 3: چک کردن همه‌ی isFree ها و غیرفعال کردن دکمه‌ها
  const updatedResult = result.map((item) => {
    const allFalse = arr
      .filter((el) => el.etime === item.etime)
      .every((el) => !el.isFree);
    return {
      ...item,
      buttonDisabled: allFalse,
    };
  });

  // مرحله 4: انتخاب یک عضو از هر etime برابر
  const finalResult = Array.from(
    new Set(updatedResult.map((item) => item.etime))
  ).map((etime) => updatedResult.find((item) => item.etime === etime));

  return (
    <div>
      {finalResult.map((item) => (
        <button
          className=" disabled:text-red-500"
          key={item.stime}
          disabled={item.buttonDisabled}
        >
          {`${item.stime} - ${item.etime}`}
        </button>
      ))}
    </div>
  );
};

export default Test;
