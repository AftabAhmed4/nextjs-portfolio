"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { Menu, X, Sun, Moon } from "lucide-react";


import { motion } from "framer-motion";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import { TypeAnimation } from "react-type-animation";
export default function Portfolio() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);



  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
    { value: "12", label: "Technologies" },
  ];

  return (
    <div
      className={` flex flex-col pt-10 md:flex-row font-sans transition-colors duration-300
      ${darkMode ? "dark bg-[#0F172A] text-white" : "bg-[#F8FAFC] text-[#1E293B]"}`}
    >
      {/* MAIN */}
      
      <main className="flex-1 lg:ml-72 w-full">
           <Topbar
  title="Home"
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-24 space-y-16">

      

          {/* HERO */}
<section className="grid lg:grid-cols-2 gap-10 p-8 items-center">

  {/* TEXT */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="order-2 lg:order-1 text-center lg:text-left space-y-6"
  >

    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium dark:bg-green-900/30 dark:text-green-300">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      Available for Work
    </div>

<h1 className="text-4xl sm:text-5xl lg:text-4xl xl:text-6xl font-black leading-tight">
  Aftab <span className="text-blue-500">Ahmed</span>
</h1>

   <h2 className="text-lg sm:text-xl text-blue-600 dark:text-slate-300 font-semibold">
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

 <p className="text-slate-500 dark:text-slate-400 leading-8 max-w-2xl mx-auto lg:mx-0 text-base sm:text-md">

  <TypeAnimation
    sequence={[
      "I specialize in building fast, scalable, and high-performance web applications with modern UI/UX.",
      10000,
      "From responsive front-end interfaces to secure back-end systems, I create seamless digital experiences.",
      10000,
      "I work with Next.js, React, TypeScript, Node.js and modern web technologies.",
      10000,
    ]}
    speed={50}
    repeat={Infinity}
    cursor={true}
  />

  <br />

  Using{" "}
  <span className="font-semibold text-blue-600">Next.js</span>,{" "}
  <span className="font-semibold text-sky-500">React</span>,{" "}
  <span className="font-semibold text-indigo-500">TypeScript</span>, Node.js and modern web technologies.

</p>

    <div className="flex flex-col sm:flex-row gap-4 pt-2">
  {/* <Link
  href="/contact"
  className="relative z-50 inline-block cursor-pointer px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300"
>
  Hire Me
</Link> */}
<Link
  href="/contact"
  className="
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    sm:px-7
    sm:py-3.5
    rounded-xl
    bg-gradient-to-r
    from-blue-600
    to-indigo-600
    text-white
    font-semibold
    text-sm
    sm:text-base
    shadow-lg
    hover:from-blue-700
    hover:to-indigo-700
    hover:shadow-xl
    hover:-translate-y-1
    active:scale-95
    transition-all
    duration-300
    focus:outline-none
    focus:ring-4
    focus:ring-blue-500/30
  "
>
  Hire Me
</Link>
<Link
  href="/projects"
  className="
    inline-block
    cursor-pointer
    px-7 py-3 rounded-xl
    border border-slate-300 dark:border-slate-600
    bg-white dark:bg-slate-800
    text-slate-900 dark:text-white
    font-medium
    hover:scale-105 hover:-translate-y-0.5
    hover:text-blue-600 dark:hover:text-blue-400
    transition-all duration-300
    transform-gpu
  "
>
  View Projects
</Link>
    </div>

  </motion.div>

  {/* IMAGE */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="order-1 lg:order-2 flex justify-center"
  >
    <div className="
      relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[300px] lg:h-[300px]  xl:w-[420px] xl:h-[420px]
      rounded-full overflow-hidden
      border-[8px] border-white dark:border-slate-700
      shadow-[0_20px_60px_rgba(0,0,0,0.25)]
      hover:scale-105 transition duration-500
    ">

    <Image
  src="/aftab.png"
  alt="profile"
  fill
  className="object-cover"
/>

      {/* glow effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>

    </div>
  </motion.div>

</section>
{/* STATS */}
{/* STATS */}
<section className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

    {stats.map((stat, i) => (
      <div
        key={i}
        className="
          relative overflow-hidden
          rounded-3xl
          p-6 sm:p-8
          bg-white dark:bg-slate-900
          border border-slate-200 dark:border-slate-700
          shadow-lg hover:shadow-2xl
          transition-all duration-500
          hover:-translate-y-2
          group
        "
      >
        {/* Background Glow */}
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />

        {/* Number */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-cyan-400">
          {stat.value}
        </h2>

        {/* Label */}
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 uppercase tracking-wider">
          {stat.label}
        </p>

        {/* Bottom Line */}
        <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-500"></div>
      </div>
    ))}

  </div>
</section>
        </div>
      </main>
    </div>
  );
}