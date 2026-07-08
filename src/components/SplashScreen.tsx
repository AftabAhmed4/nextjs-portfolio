// "use client";

// interface SplashScreenProps {
//   isVisible: boolean;
// }

// export default function SplashScreen({ isVisible }: SplashScreenProps) {
//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#F8FAFC]">
//       <div className="text-center">
//         <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-blue-100 border-t-blue-600 animate-spin">
//           <span className="text-lg font-black text-blue-600">TA</span>
//         </div>
//         <h1 className="mt-6 text-2xl font-black tracking-tight text-slate-800">Welcome to Portfolio</h1>
//         <p className="mt-2 text-sm text-slate-500">Preparing your experience...</p>
//       </div>
//     </div>
//   );
// }


// "use client";

// interface SplashScreenProps {
//   isVisible: boolean;
// }

// export default function SplashScreen({
//   isVisible,
// }: SplashScreenProps) {
//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

//       {/* Background Glow */}
//       <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />
//       <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />

//       {/* Center */}
//       <div className="flex h-full items-center justify-center px-6">

//         <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl shadow-2xl p-10 text-center">

//           {/* Animated Logo */}
//           <div className="relative mx-auto h-28 w-28">

//             {/* Outer Ring */}
//             <div className="absolute inset-0 rounded-full border-[5px] border-blue-200 dark:border-slate-700" />

//             {/* Spinner */}
//             <div className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-blue-600 border-r-cyan-500 animate-spin" />

//             {/* Logo */}
//             <div className="absolute inset-3 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl">

//               <span className="text-3xl font-black text-white tracking-wider">
//                 TA
//               </span>

//             </div>

//           </div>

//           {/* Heading */}
//           <h1 className="mt-8 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
//             Muhammad Tayyab
//           </h1>

//           <p className="mt-2 text-slate-500 dark:text-slate-400">
//             Full Stack Developer
//           </p>

//           {/* Loading */}
//           <div className="mt-10">

//             <div className="mb-3 flex items-center justify-between text-xs">

//               <span className="font-medium text-slate-500">
//                 Loading Portfolio
//               </span>

//               <span className="text-blue-600 font-semibold">
//                 Please wait...
//               </span>

//             </div>

//             <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">

//               <div className="h-full w-full origin-left animate-[pulse_1.2s_ease-in-out_infinite] bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Footer */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.25em] uppercase text-slate-400">
//         Portfolio 2026
//       </div>

//     </div>
//   );
// }



// "use client";

// interface SplashScreenProps {
//   isVisible: boolean;
// }

// export default function SplashScreen({
//   isVisible,
// }: SplashScreenProps) {
//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-[99999] h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-black">

//       {/* Background Glow */}
//       <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[180px]" />

//       <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-[180px]" />

//       <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[150px]" />

//       {/* Main Content */}
//       <div className="flex h-full w-full items-center justify-center px-6">

//         <div className="w-full max-w-lg rounded-[32px] border border-white/20 bg-white/60 p-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.15)] backdrop-blur-3xl dark:border-slate-700 dark:bg-slate-900/60">

//           {/* Animated Logo */}
//           <div className="relative mx-auto h-32 w-32">

//             {/* Outer Ring */}
//             <div className="absolute inset-0 rounded-full border-[6px] border-blue-100 dark:border-slate-700" />

//             {/* Spinner */}
//             <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-blue-600 border-r-cyan-500 animate-spin" />

//             {/* Logo */}
//             <div className="absolute inset-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 shadow-xl">

//               <span className="text-4xl font-black tracking-widest text-white">
//                 TA
//               </span>

//             </div>

//           </div>

//           {/* Heading */}
//           <h1 className="mt-10 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
//             Muhammad Tayyab
//           </h1>

//           <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">
//             Full Stack Developer
//           </p>

//           {/* Divider */}
//           <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

//           {/* Loading */}
//           <div className="mt-10">

//             <div className="mb-3 flex items-center justify-between text-sm">

//               <span className="font-medium text-slate-500 dark:text-slate-400">
//                 Preparing Portfolio
//               </span>

//               <span className="font-semibold text-blue-600">
//                 Please wait...
//               </span>

//             </div>

//             {/* Progress */}
//             <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">

//               <div className="h-full w-full origin-left animate-pulse bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Footer */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

//         <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
//           Portfolio 2026
//         </p>

//       </div>

//     </div>
//   );
// }


"use client";

import { Code2 } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

interface SplashScreenProps {
  isVisible: boolean;
}

export default function SplashScreen({ isVisible }: SplashScreenProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#050816] via-[#0B1120] to-[#09090F] text-white">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blue-600/20 blur-[100px] sm:blur-[120px] animate-pulse" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 sm:h-[420px] sm:w-[420px] rounded-full bg-purple-600/20 blur-[100px] sm:blur-[140px] animate-pulse" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">

        {/* Logo */}
   <div className="relative animate-float">

  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-3xl opacity-40 animate-pulse" />

  <div className="flex h-28 w-28 sm:h-40 sm:w-40 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

    <div className="flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 shadow-xl animate-spin-slow">

      <Code2 className="h-6 w-6 sm:h-10 sm:w-10" />

    </div>

  </div>

</div>

        {/* Title */}
        <h1 className="mt-6 sm:mt-10 text-3xl sm:text-5xl font-black leading-tight">
          My
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h1>

        {/* Name */}
        <h2 className="mt-3 sm:mt-6 text-xl sm:text-3xl font-bold">
          Aftab Ahmed
        </h2>

        {/* Role */}
   <h2 className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-semibold">
  <TypeAnimation
    sequence={[
      "Full Stack Developer",
      2000,
      "Next.js Developer",
      2000,
      "React Developer",
      2000,
      "Frontend Engineer",
      2000,
      "Backend Developer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h2>

        {/* Description */}
        <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-md text-xs sm:text-base text-gray-400 leading-6 sm:leading-8">
          Building modern, fast and responsive web applications using React,
          Next.js, TypeScript and Node.js.
        </p>

        {/* Skills */}
        {/* <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">

          {["React", "Next.js", "TypeScript", "Tailwind", "Node.js"].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1 sm:py-2 text-[10px] sm:text-sm backdrop-blur-md"
              >
                {skill}
              </span>
            )
          )}

        </div> */}

        {/* Loading */}
        <div className="mt-8 sm:mt-14 flex gap-2 sm:gap-3">

          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-cyan-400 animate-bounce" />

          <div
            className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          />

          <div
            className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-purple-500 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />

        </div>

        <p className="mt-3 sm:mt-5 text-[10px] sm:text-sm uppercase tracking-[3px] sm:tracking-[5px] text-gray-500">
          Loading Portfolio...
        </p>

      </div>

      {/* Footer */}
      <div className="absolute bottom-5 sm:bottom-8 text-center">

        <p className="text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[6px] text-gray-600">
          Designed & Developed
        </p>

        <p className="mt-1 sm:mt-2 text-sm sm:text-lg font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Aftab Ahmed
        </p>

      </div>

    </div>
  );
}