import React, { useState } from "react";

export const Base64Convertor = (file) => {
  const [base64, setBase64] = useState("");
  const reader = new FileReader();
  reader.onloadend = () => {
    const base64String = reader.result.replace(/^data:.+;base64,/, "");
    setBase64(base64String);
  };
  reader.readAsDataURL(file);
  return base64;
};
