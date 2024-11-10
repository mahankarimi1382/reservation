export default function Loading() {
  return (
    <div className=" bg-[#78C0FD] animate-pulse z-50 h-screen flex flex-row-reverse justify-center bg-opacity-50 items-center">
      <h2 className=" text-6xl  text-[#005DAD]">منتظر بمانید</h2>
      <span className=" text-6xl  loading loading-dots w-[100px] text-[#005DAD]"></span>
    </div>
  );
}
