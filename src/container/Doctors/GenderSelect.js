import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
function GenderSelect() {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" w-full rounded-2xl h-[112px] justify-center gap-4  border shadow-md flex flex-col">
        <h2 className=" px-5">جنسیت پزشک :</h2>
        <div className=" w-full flex justify-center items-center gap-5 ">
          {/* <FormControl className=" w-full "> */}
          <div className="  flex justify-center items-center gap-2">
            <FormControlLabel value="female" control={<Radio />} />
            خانم
          </div>
          <div className="  flex justify-center items-center gap-2">
            <FormControlLabel value="male" control={<Radio />} />
            آقا
          </div>
          <div className=" flex  justify-center items-center gap-2">
            <FormControlLabel value="both" control={<Radio />} />
            هردو
          </div>
          {/* </FormControl> */}
        </div>
      </div>
    </div>
  );
}

export default GenderSelect;
