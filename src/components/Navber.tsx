// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import {
//   Menu,
//   X,
//   Home,
//   User,
//   FolderKanban,
//   Code,
//   Briefcase,
//   Award,
//   BookOpen,
//   Mail,
//   Download,
// } from "lucide-react";

// import {
//   FaGithub,
//   FaLinkedin,
//   FaTwitter,
//   FaInstagramSquare,
// } from "react-icons/fa";

// export default function Navber() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const navItems = [
//     { name: "Home", icon: Home, active: true },
//     { name: "About Me", icon: User },
//     { name: "Projects", icon: FolderKanban },
//     { name: "Skills", icon: Code },
//     { name: "Experience", icon: Briefcase },
//     { name: "Certificates", icon: Award },
//     { name: "Blog", icon: BookOpen },
//     { name: "Contact", icon: Mail },
//   ];

//   const socialIcons = [
//     { icon: FaGithub, href: "#" },
//     { icon: FaLinkedin, href: "#" },
//     { icon: FaTwitter, href: "#" },
//     { icon: FaInstagramSquare, href: "#" },
//   ];

//   // 🔥 LOCK SCROLL WHEN SIDEBAR OPEN
//   useEffect(() => {
//     if (isSidebarOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isSidebarOpen]);

//   return (
//     <>
//       {/* ================= MOBILE TOP BAR ================= */}
//       <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-white/80 backdrop-blur-xl border-b border-slate-200 flex items-center justify-between px-4 z-50 shadow-sm">
//         <h1 className="font-bold text-slate-800 text-sm">Tayyab Ali</h1>

//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="p-2 rounded-xl border border-slate-200 bg-white active:scale-95 transition"
//         >
//           {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {/* ================= OVERLAY ================= */}
//       {isSidebarOpen && (
//         <div
//           onClick={() => setIsSidebarOpen(false)}
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
//         />
//       )}

//       {/* ================= SIDEBAR ================= */}
//       <aside
//         className={`
//           fixed top-0 left-0 z-50
//           h-screen w-72 bg-white
//           border-r border-slate-200
//           flex flex-col justify-between p-6
//           transition-transform duration-300
//           ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0
//         `}
//       >
//         {/* PROFILE */}
//         <div>
//           <div className="flex items-center gap-3 mb-10">
//             <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
//               <Image
//                 src="https://img.magnific.com/free-photo/young-happy-man-standing-isolated_171337-1127.jpg?semt=ais_hybrid&w=740&q=80"
//                 alt="profile"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             <div>
//               <h2 className="font-semibold text-sm">Tayyab Ali</h2>
//               <p className="text-xs text-slate-500">
//                 Full Stack Developer
//               </p>
//             </div>
//           </div>

//           {/* NAV ITEMS */}
//           <nav className="space-y-2">
//             {navItems.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <button
//                   key={item.name}
//                   className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all
//                   ${
//                     item.active
//                       ? "bg-blue-600 text-white shadow-md"
//                       : "text-slate-600 hover:bg-slate-100"
//                   }`}
//                 >
//                   <Icon size={18} />
//                   {item.name}
//                 </button>
//               );
//             })}
//           </nav>
//         </div>

//         {/* FOOTER */}
//         <div className="pt-6 border-t border-slate-200">
//           <div className="flex gap-4 mb-4">
//             {socialIcons.map((s, i) => {
//               const Icon = s.icon;
//               return (
//                 <a
//                   key={i}
//                   href={s.href}
//                   className="text-slate-500 hover:text-blue-600 transition"
//                 >
//                   <Icon size={18} />
//                 </a>
//               );
//             })}
//           </div>

//           <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition">
//             <Download size={16} />
//             Download CV
//           </button>
//         </div>
//       </aside>

//       {/* ================= MOBILE BOTTOM NAV ================= */}
//     {!isSidebarOpen && (
//   <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30">
    
//     <div className="mx-2 mb-2 bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl rounded-2xl">
      
//       <div className="flex items-center justify-around py-4">

//         <button className="flex flex-col items-center text-blue-600 active:scale-95 transition">
//           <Home size={20} />
//           <span className="text-[10px] mt-1">Home</span>
//         </button>

//         <button className="flex flex-col items-center text-slate-500 hover:text-blue-600 transition">
//           <User size={20} />
//           <span className="text-[10px] mt-1">About</span>
//         </button>

//         <button className="flex flex-col items-center text-slate-500 hover:text-blue-600 transition">
//           <FolderKanban size={20} />
//           <span className="text-[10px] mt-1">Projects</span>
//         </button>

//         <button className="flex flex-col items-center text-slate-500 hover:text-blue-600 transition">
//           <Mail size={20} />
//           <span className="text-[10px] mt-1">Contact</span>
//         </button>

//       </div>

//     </div>

//   </nav>
// )}
//     </>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


import {
  Menu,
  X,
  Home,
  User,
  FolderKanban,
  Code,
  Briefcase,
  Award,
  BookOpen,
  Mail,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About Me", icon: User, href: "/about" },
    { name: "Projects", icon: FolderKanban, href: "/projects" },
    { name: "Skills", icon: Code, href: "/skills" },
    { name: "Experience", icon: Briefcase, href: "/experience" },
    { name: "Certificates", icon: Award, href: "/certificates" },
    { name: "Blog", icon: BookOpen, href: "/blog" },
    { name: "Contact", icon: Mail, href: "/contact" },
  ];

  const socialIcons = [
    { icon: FaGithub, href: "https://github.com/AftabAhmed4" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/aftab-ahmed-755292304/" },
    // { icon: FaInstagramSquare, href: "https://www.instagram.com/aftabahmed" },
  ];

  // LOCK SCROLL WHEN SIDEBAR OPEN (mobile)
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white/80 backdrop-blur-xl border-b border-slate-200 flex items-center justify-between px-4 z-50 shadow-sm">
        <h1 className="font-bold text-slate-800 text-sm">Aftab Ahmed</h1>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-xl border border-slate-200 bg-white active:scale-95 transition"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ================= OVERLAY ================= */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-72 bg-white
          border-r border-slate-200
          flex flex-col justify-between p-6
          transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* PROFILE */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
              <Image
                src="/aftab.png"
                alt="profile"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-semibold text-sm">Aftab Ahmed</h2>
              <p className="text-xs text-slate-500">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* NAV ITEMS */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all

                      ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-slate-600 hover:bg-slate-100"
                      }
                    `}
                  >
                    <Icon size={18} />
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* FOOTER */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex gap-4 mb-4">
            {socialIcons.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.href}
                  className="text-slate-500 hover:text-blue-600 transition"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

 {/* <a
 href="Aftab_Ahmed_CV.pdf"
  download
  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg active:scale-[0.98]"
>
  <Download size={16} />
  Download CV
</a> */}

<a
  href="/Aftab_Ahmed_CV.pdf"
  download="Aftab_Ahmed_CV.pdf"
  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg active:scale-[0.98]"
>
  <Download size={16} />
  Download CV
</a>
        </div>
      </aside>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      {/* {!isSidebarOpen && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30">
          <div className="mx-2 mb-2 bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl rounded-2xl">
            <div className="flex items-center justify-around py-4">

              <Link href="/">
                <div className="flex flex-col items-center text-blue-600">
                  <Home size={20} />
                  <span className="text-[10px] mt-1">Home</span>
                </div>
              </Link>

              <Link href="/about">
                <div className="flex flex-col items-center text-slate-500 hover:text-blue-600">
                  <User size={20} />
                  <span className="text-[10px] mt-1">About</span>
                </div>
              </Link>

              <Link href="/projects">
                <div className="flex flex-col items-center text-slate-500 hover:text-blue-600">
                  <FolderKanban size={20} />
                  <span className="text-[10px] mt-1">Projects</span>
                </div>
              </Link>

              <Link href="/contact">
                <div className="flex flex-col items-center text-slate-500 hover:text-blue-600">
                  <Mail size={20} />
                  <span className="text-[10px] mt-1">Contact</span>
                </div>
              </Link>

            </div>
          </div>
        </nav>
      )} */}

{!isSidebarOpen && (
  <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30">
    <div className="mx-2 mb-2 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-xl">
      <div className="flex items-center justify-around py-2">

        {/* Home */}
        <Link href="/">
          <div
            className={`relative flex flex-col items-center px-4 py-1 transition-all duration-300 ${
              pathname === "/"
                ? "text-blue-600"
                : "text-slate-500 hover:text-blue-600"
            }`}
          >
            <Home size={24} strokeWidth={3} />
            <span className="mt-1 text-[11px] font-semibold">Home</span>

            {pathname === "/" && (
              <span className="absolute -bottom-4 h-1 w-8 rounded-full bg-blue-600"></span>
            )}
          </div>
        </Link>

        {/* About */}
        <Link href="/about">
          <div
            className={`relative flex flex-col items-center px-4 py-1 transition-all duration-300 ${
              pathname === "/about"
                ? "text-blue-600"
                : "text-slate-500 hover:text-blue-600"
            }`}
          >
            <User size={24} strokeWidth={3} />
            <span className="mt-1 text-[11px] font-semibold">About</span>

            {pathname === "/about" && (
              <span className="absolute -bottom-4 h-1 w-8 rounded-full bg-blue-600"></span>
            )}
          </div>
        </Link>

        {/* Projects */}
        <Link href="/projects">
          <div
            className={`relative flex flex-col items-center px-4 py-1 transition-all duration-300 ${
              pathname === "/projects"
                ? "text-blue-600"
                : "text-slate-500 hover:text-blue-600"
            }`}
          >
            <FolderKanban size={24} strokeWidth={3} />
            <span className="mt-1 text-[11px] font-semibold">Projects</span>

            {pathname === "/projects" && (
              <span className="absolute -bottom-4 h-1 w-8 rounded-full bg-blue-600"></span>
            )}
          </div>
        </Link>

        {/* Contact */}
        <Link href="/contact">
          <div
            className={`relative flex flex-col items-center px-4 py-1 transition-all duration-300 ${
              pathname === "/contact"
                ? "text-blue-600"
                : "text-slate-500 hover:text-blue-600"
            }`}
          >
            <Mail size={24} strokeWidth={3} />
            <span className="mt-1 text-[11px] font-semibold">Contact</span>

            {pathname === "/contact" && (
              <span className="absolute -bottom-4 h-1 w-8 rounded-full bg-blue-600"></span>
            )}
          </div>
        </Link>

      </div>
    </div>
  </nav>
)}
    </>
  );
}