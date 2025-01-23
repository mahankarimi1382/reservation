export default function Loading() {
  return (
    <div className=" bg-[#78C0FD] w-screen h-screen absolute z-50 animate-pulse top-0 right-0 flex flex-row-reverse justify-center bg-opacity-50 items-center">
      <h2 className=" md:text-6xl text-2xl text-[#005DAD]">منتظر بمانید</h2>
      <span className="loading loading-spinner text-[#005DAD] md:loading-lg loading-md"></span>
    </div>
  );
}
