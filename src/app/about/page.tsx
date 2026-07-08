
// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { User, Mail, Phone, MapPin, ShieldCheck, Code, Clock, Laptop, Shield } from 'lucide-react';
// import Topbar from '@/components/Topbar';
// import Link from 'next/link';

// export default function AboutMe() {
//   const infoItems = [
//     { icon: User, label: 'Name:', value: 'Aftab Ahmed' },
//     { icon: Mail, label: 'Email:', value: 'aftabgmail.com' },
//     { icon: Phone, label: 'Phone:', value: '+9234433' },
//     { icon: MapPin, label: 'Location:', value: 'Karachi, Pakistan' },
//     { icon: ShieldCheck, label: 'Freelance:', value: 'Available' },
//   ];
//   const [darkMode, setDarkMode] = useState(false);
//   const featureCards = [
//     { icon: Code, title: 'Clean Code', sub: 'Always' },
//     { icon: Clock, title: 'Fast Delivery', sub: 'On Time' },
//     { icon: Laptop, title: 'Modern Design', sub: 'User Focused' },
//     { icon: Shield, title: 'Scalable', sub: 'Solutions' },
//   ];

//   return (
// <section
//   className={`
  
//     px-6 py-12 
//     lg:ml-72 
//     font-sans
//     transition-colors duration-300
//     ${
//       darkMode
//         ? "bg-[#0F172A] text-white"
//         : "bg-[#F8FAFC] text-[#1E293B]"
//     }
//   `}
// >          <Topbar
//   title="About Me"
//   darkMode={darkMode}
//   setDarkMode={setDarkMode}
// />
// <div className="mb-14 text-center">


 
// </div>
//       {/* Top Header Row */}


//       {/* Main Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        

//         {/* LEFT */}
//     <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
//   <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
//     Who I Am
//   </h2>

//   <p className="text-slate-600  dark:text-white leading-relaxed max-w-xl">
//     I'm a passionate Full Stack Developer with a focus on building modern,
//     user-friendly web applications. I love turning ideas into real products.
//   </p>

//   <div className="space-y-4 pt-2">
//     {infoItems.map((item, index) => {
//       const Icon = item.icon;

//       return (
//         <div
//           key={index}
//           className="flex items-center gap-1 text-sm md:text-base"
//         >
//           <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
//             <Icon size={18} className="stroke-[2.5]" />
//           </div>

//           <div className="flex gap-2">
//             <span className="font-semibold text-slate-700 dark:text-white">
//               {item.label}
//             </span>

//             <span className="text-slate-600 dark:text-slate-300">
//               {item.value}
//             </span>
//           </div>
//         </div>
//       );
//     })}
//   </div>

//   <Link
//     href="/contact"
//     className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3 rounded-xl shadow-lg transition duration-300"
//   >
//     Hire Me
//   </Link>
// </div>
   
//         <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
//           <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
//             <Image
//               src="/aftab.png"
//               alt="Profile"
//               fill
//               className="object-cover object-top"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       {/* FEATURES */}
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto px-4">
//   {featureCards.map((card, index) => {
//     const Icon = card.icon;

//     return (
//       <div
//         key={index}
//         className="
//           group relative
//           rounded-3xl
//           p-6
//           bg-white/80 dark:bg-slate-900/80
//           backdrop-blur-xl
//           border border-slate-200 dark:border-slate-700
//           shadow-sm
//           hover:shadow-xl
//           hover:-translate-y-2
//           transition-all duration-300
//           overflow-hidden
//         "
//       >
//         {/* Glow Effect */}
//         <div
//           className="
//             absolute inset-0
//             bg-gradient-to-br 
//             from-blue-500/10 
//             via-transparent 
//             to-purple-500/10
//             opacity-0
//             group-hover:opacity-100
//             transition
//           "
//         />

//         <div className="relative flex flex-col items-center text-center">

//           {/* Icon */}
//           <div
//             className="
//               w-14 h-14
//               flex items-center justify-center
//               rounded-2xl
//               bg-gradient-to-br
//               from-blue-500
//               to-indigo-600
//               text-white
//               shadow-lg
//               mb-5
//               group-hover:scale-110
//               transition-transform duration-300
//             "
//           >
//             <Icon size={26} />
//           </div>


//           {/* Title */}
//           <h3
//             className="
//               font-bold
//               text-slate-800 dark:text-white
//               text-sm md:text-base
//               mb-2
//             "
//           >
//             {card.title}
//           </h3>


//           {/* Description */}
//           <p
//             className="
//               text-xs md:text-sm
//               text-slate-500
//               dark:text-slate-400
//               font-medium
//               leading-relaxed
//             "
//           >
//             {card.sub}
//           </p>

//         </div>
//       </div>
//     );
//   })}
// </div>
//     </section>
//   );
// }




"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { User, Mail, Phone, MapPin, ShieldCheck, Code, Clock, Laptop, Shield } from 'lucide-react';
import Topbar from '@/components/Topbar';
import Link from 'next/link';

export default function AboutMe() {
  const infoItems = [
    { icon: User, label: 'Name:', value: 'Aftab Ahmed' },
    { icon: Mail, label: 'Email:', value: 'aftabahmedcbspakistan@gmail.com' }, // corrected email format
    { icon: Phone, label: 'Phone:', value: '+923482275246' },
    { icon: MapPin, label: 'Location:', value: 'Karachi, Pakistan' },
    { icon: ShieldCheck, label: 'Freelance:', value: 'Available' },
  ];
  
  const [darkMode, setDarkMode] = useState(false);
  
  const featureCards = [
    { icon: Code, title: 'Clean Code', sub: 'Always' },
    { icon: Clock, title: 'Fast Delivery', sub: 'On Time' },
    { icon: Laptop, title: 'Modern Design', sub: 'User Focused' },
    { icon: Shield, title: 'Scalable', sub: 'Solutions' },
  ];

  return (
    <section
      className={`
        px-4 sm:px-6 py-12 
        lg:ml-72 ml-0
        font-sans
        transition-colors duration-300
        min-h-screen
        ${
          darkMode
            ? "bg-[#0F172A] text-white"
            : "bg-[#F8FAFC] text-[#1E293B]"
        }
      `}
    >
      {/* TOPBAR */}
      <Topbar
        title="About Me"
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8">
        
        {/* LEFT TEXT CONTENT */}
        <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Who I Am
          </h2>

          <p className={`leading-relaxed max-w-xl transition-colors duration-300 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            I'm a passionate Full Stack Developer with a focus on building modern,
            user-friendly web applications. I love turning ideas into real products.
          </p>

          {/* PERSONAL INFO LIST */}
          <div className="space-y-4 pt-2">
            {infoItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm md:text-base"
                >
                  {/* ICON CONTAINER */}
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${darkMode ? 'bg-blue-900/40 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    <Icon size={18} className="stroke-[2.5]" />
                  </div>

                  {/* LABEL & VALUE */}
                  <div className="flex gap-2">
                    <span className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-700'}`}>
                      {item.label}
                    </span>
                    <span className={`transition-colors duration-300 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BUTTON */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Hire Me
            </Link>
          </div>
        </div>
        
        {/* RIGHT IMAGE CONTAINER */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
          <div className={`relative w-full max-w-sm sm:max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border transition-colors duration-300 ${darkMode ? 'border-slate-800 shadow-black/40' : 'border-slate-100'}`}>
            <Image
              src="/aftab.png"
              alt="Profile"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      {/* FEATURES / CORE CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 mb-10 gap-4 sm:gap-6 mt-16 max-w-6xl mx-auto">
        {featureCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className={`
                group relative
                rounded-3xl
                p-5 sm:p-6
                backdrop-blur-xl
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all duration-300
                overflow-hidden border
                ${
                  darkMode
                    ? "bg-slate-900/60 border-slate-800 text-white"
                    : "bg-white/80 border-slate-200 text-[#1E293B]"
                }
              `}
            >
              {/* Glow Overlay Effect */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br 
                  from-blue-500/10 
                  via-transparent 
                  to-purple-500/10
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              <div className="relative flex flex-col items-center text-center">
                {/* Feature Icon */}
                <div
                  className="
                    w-12 h-12 sm:w-14 sm:h-14
                    flex items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-500
                    to-indigo-600
                    text-white
                    shadow-lg
                    mb-4
                    group-hover:scale-110
                    transition-transform duration-300
                  "
                >
                  <Icon size={24} />
                </div>

                {/* Feature Title */}
                <h3 className={`font-bold text-xs sm:text-sm md:text-base mb-1.5 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                  {card.title}
                </h3>

                {/* Feature Subtext */}
                <p className={`text-[11px] sm:text-xs md:text-sm font-medium leading-relaxed transition-colors duration-300 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {card.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}