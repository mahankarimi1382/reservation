import heroPerson from "../../public/Pics/hero-small-pesron-pic.png";
import heroArrow from "../../public/Pics/heroArrow.png";
import heroLines from "../../public/Pics/3lines.png";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";

function MainSearchBar() {
  return (
    <div className="  relative flex flex-col gap-5  justify-center items-center">
      <div className=" flex flex-col relative justify-center items-center gap-5 -mb-10">
        <Image
          alt="icon"
          width={191}
          className=" hidden lg:flex w-[191px] absolute -right-20 top-10 "
          src={heroArrow}
        />
        <Image
          alt="icon"
          width={50}
          className=" lg:hidden absolute right-2"
          src={heroArrow}
        />{" "}
        <Image
          width={59}
          className=" hidden lg:flex absolute  -right-36 top-24"
          src={heroPerson}
          alt="icon"
        />
        <Image
          width={30}
          className=" lg:hidden absolute -right-2 xs:-right-5 w-[20px] xs:w-[30px] top-10"
          src={heroPerson}
          alt="icon"
        />
        <Image
          width={60}
          src={heroLines}
          alt="icon"
          className=" hidden lg:flex absolute left-10 -top-10 "
        />
        <Image
          width={20}
          src={heroLines}
          alt="icon"
          className=" lg:hidden flex  absolute left-6 -top-4"
        />
        <h2 className="  font-semibold lg:font-medium text-[18px] flex gap-1 lg:gap-3 lg:text-[38px]">
          با
          <section className=" animate-bounce text-[#005DAD]">
            دکتر رزرو
          </section>
          به راحتی نوبت خود را رزرو کنید
        </h2>
        <h2 className=" text-[16px] lg:text-2xl">
          بهترین خدمات پزشکی در دستان شما
        </h2>
      </div>
      <div className=" gap-6 w-[100%] lg:w-4/5  xl:w-3/5 flex lg:mt-20 justify-center items-center rounded-xl h-[119px]">
        <div className=" rounded-lg px-3 items-center justify-center gap-1 flex h-[43px] lg:h-[56px] mt-8 lg:mt-0 w-[85%] border bg-white   border-[#C7C6C6]">
          <CiSearch className=" text-[#919191] text-3xl" />
          <input
            className=" text-sm outline-none h-full w-[80%]"
            placeholder="جستجو پزشک،درمانگر،کلینیک..."
          />
          <IoLocationOutline className=" bg-[#005DAD21] lg:bg-white lg:border-none bg-opacity-20 w-8 h-8 rounded p-1 border border-[#005DAD] text-lg text-[#005DAD]" />
          <p className=" hidden lg:flex text-[12px] text-[#919191] font-medium">
            انتخاب شهر
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainSearchBar;
