"use client";

import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

// const DoctorsPagination = ({ items, setDoctors }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   // محاسبه تعداد کل صفحات
//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   // محاسبه آیتم‌هایی که باید نمایش داده شوند
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//   // ایجاد دکمه‌های صفحات
//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) {
//     if (i <= 5 || i === totalPages) {
//       pageNumbers.push(i);
//     } else if (i === 6) {
//       pageNumbers.push('...');
//     }
//   }

//   return (
//     <div>
//       {currentItems.map((item) => {
//         return (
//           <div
//             className=" border flex py-3 items-center rounded-lg bg-white shadow-md"
//             key={item.id}
//           >
//             <MdDeleteForever
//               onClick={() => delete_doctor(item.id, setDoctors)}
//               className="  text-[#3F444D] text-lg transition-all cursor-pointer hover:text-red-600 w-[5%]"
//             />
//             <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
//               {item.doctorName} {item.doctorFamily}
//             </h4>
//             <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
//               مطب
//             </h4>
//             <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
//               {item.codeNezam}
//             </h4>
//             <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
//               {item.nationalId}
//             </h4>
//             <div className=" w-[38%] flex justify-center items-center gap-1">
//               <button className=" p-1 bg-[rgba(31,113,104,0.08)] border border-[#399086C9] text-[#399086C9] rounded-lg text-sm">
//                 عکس ها
//               </button>
//               <button className=" p-1 bg-[rgba(247,79,115,0.21)] border border-[#921A34] text-[#921A34] rounded-lg text-sm">
//                 هزینه زیرساخت
//               </button>
//               <button className=" p-1 bg-[rgba(83,102,248,0.12)] border border-[#5366F8] text-[#5366F8] rounded-lg text-sm">
//                 مشاهده وضعیت اکانت
//               </button>
//               <button className=" p-1 bg-[#DBEDFF] border border-[#005DAD] text-[#005DAD] rounded-lg text-sm">
//                 مشاهده جزئیات{" "}
//               </button>
//             </div>
//           </div>
//         );
//       })}

//       {/* دکمه‌های صفحه‌بندی */}
//       <button
//         onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//         disabled={currentPage === 1}
//       >
//         صفحه قبلی
//       </button>
//       <button
//         onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//         disabled={currentPage === totalPages}
//       >
//         صفحه بعدی
//       </button>

//       {/* نمایش دکمه‌های تمامی صفحات */}
//       <div>
//         {pageNumbers.map((number, index) => (
//           <button
//             key={index}
//             onClick={() => number !== '...' && setCurrentPage(number)}
//             style={{ margin: '0 2px', padding: '5px 10px', backgroundColor: currentPage === number ? 'lightblue' : 'white' }}
//           >
//             {number}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoctorsPagination;

// const DoctorsPagination = ({ items }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageRange, setPageRange] = useState([1, 10]);
//   const itemsPerPage = 10;

//   // محاسبه تعداد کل صفحات
//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   // محاسبه آیتم‌هایی که باید نمایش داده شوند
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//   // ایجاد دکمه‌های صفحات
//  //   const pageNumbers = [];
// //   for (let i = 1; i <= totalPages; i++) {
// //     if (i <= 5 || i === totalPages) {
// //       pageNumbers.push(i);
// //     } else if (i === 6) {
// //       pageNumbers.push('...');
// //     }
// //   }
//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) {
//     if (i >= pageRange[0] && i <= pageRange[1]) {
//       pageNumbers.push(i);
//     }
//   }
//   if (pageRange[1] < totalPages) {
//     pageNumbers.push("...");
//   }

//   return (
//     <div>
//       {currentItems.map((item) => {
//         return (
//           <div
//             className=" border flex py-3 items-center rounded-lg bg-white shadow-md"
//             key={item.id}
//           >
//             <MdDeleteForever
//               onClick={() => delete_doctor(item.id, setDoctors)}
//               className="  text-[#3F444D] text-lg transition-all cursor-pointer hover:text-red-600 w-[5%]"
//             />
//             <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
//               {item.doctorName} {item.doctorFamily}
//             </h4>
//             <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
//               مطب
//             </h4>
//             <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
//               {item.codeNezam}
//             </h4>
//             <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
//               {item.nationalId}
//             </h4>
//             <div className=" w-[38%] flex justify-center items-center gap-1">
//               <button className=" p-1 bg-[rgba(31,113,104,0.08)] border border-[#399086C9] text-[#399086C9] rounded-lg text-sm">
//                 عکس ها
//               </button>
//               <button className=" p-1 bg-[rgba(247,79,115,0.21)] border border-[#921A34] text-[#921A34] rounded-lg text-sm">
//                 هزینه زیرساخت
//               </button>
//               <button className=" p-1 bg-[rgba(83,102,248,0.12)] border border-[#5366F8] text-[#5366F8] rounded-lg text-sm">
//                 مشاهده وضعیت اکانت
//               </button>
//               <button className=" p-1 bg-[#DBEDFF] border border-[#005DAD] text-[#005DAD] rounded-lg text-sm">
//                 مشاهده جزئیات{" "}
//               </button>
//             </div>
//           </div>
//         );
//       })}

//       {/* دکمه‌های صفحه‌بندی */}
//       <button
//         onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//         disabled={currentPage === 1}
//       >
//         صفحه قبلی
//       </button>
//       <button
//         onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//         disabled={currentPage === totalPages}
//       >
//         صفحه بعدی
//       </button>

//       {/* نمایش دکمه‌های تمامی صفحات */}
//       <div>
//         {pageNumbers.map((number, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               if (number !== "...") {
//                 setCurrentPage(number);
//               } else {
//                 setPageRange([
//                   pageRange[1] + 1,
//                   Math.min(pageRange[1] + 5, totalPages),
//                 ]);
//               }
//             }}
//             style={{
//               margin: "0 2px",
//               padding: "5px 10px",
//               backgroundColor: currentPage === number ? "lightblue" : "white",
//             }}
//           >
//             {number}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoctorsPagination;

const DoctorsPagination = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState([1, 5]);
  const itemsPerPage = 10;
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  // محاسبه تعداد کل صفحات
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // محاسبه آیتم‌هایی که باید نمایش داده شوند
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // ایجاد دکمه‌های صفحات
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i <= 5 || i >= totalPages || (i >= pageRange[0] && i <= pageRange[1])) {
      pageNumbers.push(i);
    }
  }
  if (pageRange[1] < totalPages - 5) {
    pageNumbers.push("next");
  }
  if (pageRange[0] > 6) {
    pageNumbers.unshift("prev");
  }

  return (
    <div>
      {currentItems.map((item) => {
        return (
          <div
            className=" border flex py-3 items-center rounded-lg bg-white shadow-md"
            key={item.id}
          >
            <MdDeleteForever
              onClick={() => delete_doctor(item.id, setDoctors)}
              className="  text-[#3F444D] text-lg transition-all cursor-pointer hover:text-red-600 w-[5%]"
            />
            <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
              {item.doctorName} {item.doctorFamily}
            </h4>
            <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
              مطب
            </h4>
            <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
              {item.codeNezam}
            </h4>
            <h4 className=" w-[14%] flex justify-center items-center text-[#3F444D] text-lg">
              {item.nationalId}
            </h4>
            <div className=" w-[38%] flex justify-center items-center gap-1">
              <button className=" p-1 bg-[rgba(31,113,104,0.08)] border border-[#399086C9] text-[#399086C9] rounded-lg text-sm">
                عکس ها
              </button>
              <button className=" p-1 bg-[rgba(247,79,115,0.21)] border border-[#921A34] text-[#921A34] rounded-lg text-sm">
                هزینه زیرساخت
              </button>
              <button className=" p-1 bg-[rgba(83,102,248,0.12)] border border-[#5366F8] text-[#5366F8] rounded-lg text-sm">
                مشاهده وضعیت اکانت
              </button>
              <button className=" p-1 bg-[#DBEDFF] border border-[#005DAD] text-[#005DAD] rounded-lg text-sm">
                مشاهده جزئیات{" "}
              </button>
            </div>
          </div>
        );
      })}

      {/* دکمه‌های صفحه‌بندی */}
      <div className=" mt-5  w-full flex justify-center items-center">
        <Pagination
          
          onChange={handleChange}
          page={currentPage}
          count={totalPages}
          color="primary"
        />
      </div>
    </div>
  );
};

export default DoctorsPagination;
