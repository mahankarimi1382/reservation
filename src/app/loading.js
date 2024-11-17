export default function Loading() {
  return (
    <div className=" bg-[#78C0FD] animate-pulse z-50 h-screen flex flex-row-reverse justify-center bg-opacity-50 items-center">
      <h2 className=" text-6xl  text-[#005DAD]">منتظر بمانید</h2>
      <span className="loading loading-spinner text-[#005DAD] loading-lg"></span>
    </div>
  );
}
