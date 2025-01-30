import React from "react";
import dynamic from "next/dynamic";

const MapTest = dynamic(() => import("../../components/MapTest"), {
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <MapTest />
    </div>
  );
};

export default Page;
