// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { Moon, Sun } from 'lucide-react';

// interface TopbarProps {
//   title: string;
//   darkMode: boolean;
//   setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Topbar = ({
//   title,
//   darkMode,
//   setDarkMode,
// }: TopbarProps) => {
//   return (
//     <div
//       className={`transition-colors duration-300 ${
//         darkMode
//           ? 'bg-[#0F172A] text-white'
//           : 'bg-[#F8FAFC] text-[#1E293B]'
//       }`}
//     >
//       <div className="flex items-center justify-between px-4 sm:px-6 py-6">

//         {/* LEFT */}
//         <div>
//           <h1 className="text-3xl font-bold">{title}</h1>

//           <p
//             className={`mt-1 text-sm ${
//               darkMode ? 'text-slate-300' : 'text-slate-500'
//             }`}
//           >
//             Welcome to my portfolio
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-4">

//           <div className="hidden md:flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-2 rounded-full border border-emerald-100">
//             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//             <span className="text-xs font-semibold uppercase tracking-wide">
//               Available for Work
//             </span>
//           </div>

//           <Link
//             href="/contact"
//             className="inline-block px-6 py-3 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
//           >
//             Hire Me
//           </Link>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-all duration-300 cursor-pointer"
//           >
//             {darkMode ? (
//               <Sun className="text-yellow-500" size={18} />
//             ) : (
//               <Moon className="text-slate-700" size={18} />
//             )}
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;




'use client';

import React from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';

interface TopbarProps {
  title: string;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({
  title,
  darkMode,
  setDarkMode,
}: TopbarProps) => {

  return (
    <div
      className={`
      transition-colors duration-300

      ${
        darkMode
          ? 'bg-[#0F172A] text-white'
          : 'bg-[#F8FAFC] text-[#1E293B]'
      }
      `}
    >


   <div
  className="
    flex flex-col gap-5
    md:flex-row md:items-center md:justify-between
    px-4 sm:px-6 lg:px-8
    py-5
  "
>
  {/* LEFT */}
  <div className="min-w-0">
    <h1
      className="
        text-xl
        sm:text-xl
        lg:text-2xl
        font-bold
        tracking-tight
      "
    >
      {title}
    </h1>

    <p
      className={`mt-1 text-sm ${
        darkMode ? "text-slate-300" : "text-slate-500"
      }`}
    >
      Welcome to my portfolio
    </p>
  </div>

  {/* RIGHT */}
  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:w-auto md:justify-end">

    {/* Available Badge */}
    <div
      className="
        flex items-center justify-center
        gap-2
        rounded-full
        border border-emerald-100
        bg-emerald-50
        px-4 py-2
        text-emerald-700
      "
    >
      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-xs font-semibold uppercase tracking-wide">
        Available
      </span>
    </div>

    {/* Buttons */}
    <div className="flex gap-3">

      <Link
        href="/contact"
        className="
          flex-1 sm:flex-none
          rounded-xl
          bg-blue-600
          px-5 py-3
          text-center
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-blue-700
        "
      >
        Hire Me
      </Link>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="
          flex h-12 w-12
          items-center justify-center
          rounded-xl
          border border-slate-200
          bg-white
          transition-all
          duration-300
          hover:shadow-md
          dark:border-slate-700
          dark:bg-slate-800
        "
      >
        {darkMode ? (
          <Sun size={20} className="text-yellow-500" />
        ) : (
          <Moon size={20} className="text-slate-700" />
        )}
      </button>

    </div>
  </div>
</div>


    </div>
  );
};


export default Topbar;