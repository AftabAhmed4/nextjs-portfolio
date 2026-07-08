"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Code2,
  Layout,
  GraduationCap,
  Sun,
  MapPin,
} from "lucide-react";
import Topbar from "@/components/Topbar";

type IconType = "work" | "code" | "web" | "education";

interface ExperienceItem {
  id: number;
  role: string;
   subtitle?: string;
  company: string;
  location: string;
  duration: string;
  years: string;
  points: string[];
  skills: string[];
  iconType: IconType;
  iconBg: string;
  textColor: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    subtitle: "Software Engineer",
    company: "Remote Solutions",
    location: "Karachi, Pakistan",
    duration: "2023 - Present",
    years: "(1.5+ Years)",
    iconType: "work",
    iconBg: "bg-violet-600 shadow-[0_0_15px_rgba(124,58,237,0.5)]",
    textColor: "text-violet-600",
    points: [
      "Developed and maintained responsive web applications using React.js and Next.js.",
      "Built scalable full-stack applications using Node.js and Express.js.",
      "Integrated REST APIs and MySQL databases.",
      "Collaborated with designers and backend teams.",
      "Optimized website performance and user experience.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
    ],
  },

  {
    id: 2,
    role: "Full Stack Developer",
    subtitle: "Software Engineer",
    company: "Romtech Solutions",
    location: "Lahore, Pakistan",
    duration: "2022 - 2023",
    years: "(1 Year)",
    iconType: "code",
    iconBg: "bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]",
    textColor: "text-blue-600",
    points: [
      "Built MERN stack applications.",
      "Developed RESTful APIs.",
      "Optimized MongoDB databases.",
      "Implemented authentication with JWT.",
      "Fixed bugs and improved application performance.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
    ],
  },

  {
    id: 3,
    role: "Junior Web Developer",
    subtitle: "Frontend Developer",
    company: "CBS Pakistan",
    location: "Karachi, Pakistan",
    duration: "2021 - 2022",
    years: "(1 Year)",
    iconType: "web",
    iconBg: "bg-emerald-600 shadow-[0_0_15px_rgba(5,150,105,0.5)]",
    textColor: "text-emerald-600",
    points: [
      "Built responsive websites using HTML, CSS, and JavaScript.",
      "Created reusable UI components.",
      "Worked with Bootstrap and Tailwind CSS.",
      "Maintained existing client websites.",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
];

function renderIcon(type: IconType) {
  const iconClass = "w-5 h-5 text-white";
  

  switch (type) {
    case "work":
      return <Briefcase className={iconClass} />;
    case "code":
      return <Code2 className={iconClass} />;
    case "web":
      return <Layout className={iconClass} />;
    case "education":
      return <GraduationCap className={iconClass} />;
  }
    
}

export default function Experience() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    // <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <section
  className={`
   
      px-6 py-12 
   
    lg:ml-72 
    font-sans
    transition-colors duration-300
    ${
      darkMode
        ? "bg-[#0F172A] text-white"
        : "bg-[#F8FAFC] text-[#1E293B]"
    }
  `}
>           {/* HEADER */}
              <Topbar
  title="Experience"
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>  
  

      <div className="px-4 sm:px-6 md:px-10  lg:px-12 xl:px-16 2xl:px-20 py-8 ">

        <div className="max-w-5xl mx-auto">

  

          {/* TIMELINE */}
          <div className="relative pl-6 sm:pl-10">

            {/* LINE */}
            <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-[2px] bg-slate-200" />

            <div className="space-y-8 sm:space-y-10">

              {experienceData.map((item) => (
                <div
                  key={item.id}
                  className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 group"
                >

                  {/* ICON */}
                  <div className="flex items-start">
                    <div
                      className={`z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${item.iconBg} group-hover:scale-105 transition`}
                    >
                      {renderIcon(item.iconType)}
                    </div>
                  </div>

                  {/* CARD */}
                  <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition">

                    {/* TOP */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <h3 className={`text-base sm:text-lg font-bold ${item.textColor}`}>
                        {item.role}
                      </h3>

                      <span className="text-xs bg-slate-100 px-3 py-1 rounded-full w-fit">
                        {item.duration}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-slate-700 mt-1">
                      {item.company}
                    </p>

                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>

                    {/* POINTS */}
                    <ul className="mt-4 space-y-2">
                      {item.points.map((p, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-500 flex">
                          <span className="mr-2 mt-1 h-1 w-1 bg-slate-400 rounded-full" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    {/* SKILLS */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((s, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}