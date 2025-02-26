import React from "react";

const turns = [
  { turnNumber: 1, stime: "4:00 PM", etime: "4:30 PM", isFree: true },
  { turnNumber: 2, stime: "4:00 PM", etime: "4:30 PM", isFree: false },
  { turnNumber: 3, stime: "4:00 PM", etime: "4:30 PM", isFree: false },
  { turnNumber: 4, stime: "4:00 PM", etime: "4:30 PM", isFree: false },
  { turnNumber: 5, stime: "4:30 PM", etime: "5:00 PM", isFree: false },
  { turnNumber: 6, stime: "4:30 PM", etime: "5:00 PM", isFree: false },
  { turnNumber: 7, stime: "4:30 PM", etime: "5:00 PM", isFree: false },
  { turnNumber: 8, stime: "4:30 PM", etime: "5:00 PM", isFree: false },
  { turnNumber: 9, stime: "5:00 PM", etime: "5:30 PM", isFree: true },
  { turnNumber: 10, stime: "5:00 PM", etime: "5:30 PM", isFree: false },
  { turnNumber: 11, stime: "5:00 PM", etime: "5:30 PM", isFree: false },
  { turnNumber: 12, stime: "5:00 PM", etime: "5:30 PM", isFree: false },
];

const UniqueTimes = () => {
  const uniqueStimeSet = new Set();

  const uniqueTurns = turns.filter((turn) => {
    if (uniqueStimeSet.has(turn.stime)) {
      return false;
    } else {
      uniqueStimeSet.add(turn.stime);
      return true;
    }
  });

  return (
    <div>
      {uniqueTurns.map((turn) => {
        const hasFreeTurn = turns.some(
          (t) => t.stime === turn.stime && t.isFree
        );
        const colorStyle = hasFreeTurn ? {} : { color: "red" };

        return (
          <h1 key={turn.stime} style={colorStyle}>
            {turn.stime}
          </h1>
        );
      })}
    </div>
  );
};

export default UniqueTimes;
