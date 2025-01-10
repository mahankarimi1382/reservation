import heroPerson from "../../public/Pics/hero-small-pesron-pic.png";
import heroArrow from "../../public/Pics/heroArrow.png";
import heroLines from "../../public/Pics/3lines.png";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";

function MainSearchBar() {
  return (
    <div className=" relative flex flex-col gap-5 mb-10 lg:mb-0 lg:gap-9 justify-center items-center">
      <Image
        alt="icon"
        width={191}
        className=" hidden lg:flex w-[191px] absolute right-[320px] -mt-52"
        src={heroArrow}
      />
      <Image
        alt="icon"
        width={50}
        className=" lg:hidden absolute right-10 -mt-[130px]"
        src={heroArrow}
      />{" "}
      <Image
        width={59}
        className=" hidden lg:flex -mt-[124px] absolute right-[265px]"
        src={heroPerson}
        alt="icon"
      />
      <Image
        width={30}
        className=" lg:hidden -mt-[92px] absolute right-[12px]"
        src={heroPerson}
        alt="icon"
      />
      <Image
        width={60}
        src={heroLines}
        alt="icon"
        className=" hidden lg:flex absolute -top-[70px] left-[360px] "
      />
      <Image
        width={20}
        src={heroLines}
        alt="icon"
        className=" sm:hidden block  absolute left-7 -mt-[200px] "
      />
      <h2 className=" -mt-10 font-semibold lg:font-medium text-[18px] flex gap-1 lg:gap-3 lg:text-[38px]">
        با
        <section className=" animate-bounce text-[#005DAD]">دکتر رزرو</section>
        به راحتی نوبت خود را رزرو کنید
      </h2>
      <h2 className=" text-[16px] lg:text-2xl">
        بهترین خدمات پزشکی در دستان شما
      </h2>
      <div className=" gap-6 w-[100%] -mt-10  lg:w-3/5 flex lg:mt-20 justify-center items-center rounded-xl h-[119px]">
        <div className=" rounded-lg px-3 items-center justify-center gap-1 flex h-[43px] lg:h-[56px] mt-8 lg:mt-0 w-[85%] border bg-white   border-[#C7C6C6]">
          <CiSearch className=" text-[#919191] text-3xl" />
          <input
            className=" text-sm outline-none h-full w-[80%]"
            placeholder="جستجو پزشک،درمانگر،کلینیک..."
          />
          <IoLocationOutline className="  text-lg text-[#919191]" />
          <p className=" hidden lg:flex text-[12px] text-[#919191] font-medium">
            انتخاب شهر
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainSearchBar;
