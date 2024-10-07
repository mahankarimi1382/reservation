import Image from "next/image";
import star from "../../public/pics/star.png";

export const RateCounter = ({ rate,width }) => {
  return (
    <div className=" flex">
      {Array.from({ length: rate }).map((_, index) => {
        return (
          <div className="" key={index}>
            <Image width={width} alt="" src={star} />
          </div>
        );
      })}
    </div>
  );
};
