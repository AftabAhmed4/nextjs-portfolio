// "use client";

// import { useEffect, useState } from "react";
// import SplashScreen from "@/components/SplashScreen";

// export default function ClientLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // 3 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <SplashScreen isVisible={loading} />

//       {!loading && children}
//     </>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import SplashScreen from "@/components/SplashScreen";

// export default function ClientLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading && <SplashScreen isVisible={true} />}
//       {children}
//     </>
//   );
// }







"use client";

import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { X } from "lucide-react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    // Splash Screen (3 sec)
    const splashTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Demo Modal (10 sec after page load)
    const modalTimer = setTimeout(() => {
      setShowDemoModal(true);
    }, 10000);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(modalTimer);
    };
  }, []);

  return (
    <>
      {/* Splash */}
      {loading && <SplashScreen isVisible={true} />}

      {/* Website */}
      {!loading && children}

      {/* Live Demo Modal */}
{showDemoModal && (
  <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/40 backdrop-blur-md p-4 sm:p-6 md:p-8 transition-all duration-300 select-none">
    
    {/* MODAL CARD: Designed to fit perfectly within tablet & laptop screens without triggering scroll bars */}
    <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-4xl bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.15)] animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
      
      {/* Decorative Blur Ambient Glow */}
      <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      <div className="relative p-5 sm:p-6 md:p-8 z-10">
        
        {/* HEADER ROW */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 md:pb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.25em] text-slate-500">
              LIVE DEMO
            </span>
          </div>

          <button
            onClick={() => setShowDemoModal(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition hover:bg-slate-50 hover:text-slate-800 cursor-pointer active:scale-95"
          >
            <X size={14} />
          </button>
        </div>

        {/* TWO-COLUMN GRID: Activates on Tablet (md) and Desktop (lg) to split height */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-center">
          
          {/* LEFT COLUMN: Video Player Box */}
     <div className="md:col-span-6 lg:col-span-7">
  <div className="relative rounded-xl border border-slate-200 bg-slate-50 p-1 shadow-sm">
    <iframe
      className="w-full aspect-video rounded-lg"
      src="https://www.youtube.com/embed/_SHc6VvUfzM"
      title="Portfolio Demo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>

          {/* RIGHT COLUMN: Typography, Metrics & Badges Stacked Neatly */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between h-full space-y-4 md:space-y-5">
            
            {/* TEXT SECTION */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-sans">
                Full Stack 
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  {" "}Portfolio
                </span>
              </h2>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                Explore a modern full-stack application with scalable architecture, premium UI and production performance.
              </p>
            </div>

            {/* METRICS ROW */}
            <div className="grid grid-cols-3 gap-2 font-mono">
              {[
                ["20+", "Projects"],
                ["99.9%", "Speed"],
                ["A+", "Quality"]
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-100 bg-slate-50/50 p-2 text-center"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
                    {value}
                  </h3>
                  <p className="text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* TECH STACK BADGES */}
            <div className="flex flex-wrap gap-1">
              {["Next.js", "React", "TypeScript", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-50 border border-slate-200/60 px-2 py-0.5 text-[9px] font-mono text-slate-600 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* BOTTOM FULL-WIDTH ACTION FOOTER */}
        <div className="mt-5 md:mt-6 pt-4 border-t border-slate-100">
          <button
            onClick={() => {
              setShowDemoModal(false);
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
            className="w-full rounded-xl bg-slate-900 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_4px_12px_rgba(15,23,42,0.15)] transition hover:bg-black active:scale-[0.99] cursor-pointer"
          >
           Back to Home
          </button>
        </div>

      </div>
    </div>
  </div>
)}
    </>
  );
}