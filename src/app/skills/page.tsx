"use client";

import React, { useState, useMemo } from "react";
import {
  Code2,
  Server,
  Layout,
  Database,
  Settings,
  Palette,
} from "lucide-react";
import Topbar from "@/components/Topbar";

export default function SkillsSection() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    { name: "React.js", category: "Frontend", level: 95, icon: <Code2 className="w-4 h-4 text-blue-500" /> },
    { name: "Next.js", category: "Frontend", level: 95, icon: <span className="text-[10px] font-black dark:text-white text-black px-1.5 py-0.5 rounded border border-neutral-300 dark:border-neutral-700">N</span> },
    { name: "TypeScript", category: "Frontend", level: 95, icon: <span className="text-[10px] font-bold bg-blue-600 text-white px-1.5 py-0.5 rounded">TS</span> },
    { name: "JavaScript", category: "Frontend", level: 96, icon: <span className="text-[10px] font-bold bg-yellow-500 text-black px-1.5 py-0.5 rounded">JS</span> },
    { name: "Tailwind CSS", category: "Frontend", level: 100, icon: <Layout className="w-4 h-4 text-sky-400" /> },
    { name: "HTML5", category: "Frontend", level: 100, icon: <span className="text-[10px] font-bold bg-orange-500 text-white px-1.5 py-0.5 rounded">H</span> },
    { name: "CSS3", category: "Frontend", level: 100, icon: <span className="text-[10px] font-bold bg-blue-400 text-white px-1.5 py-0.5 rounded">C</span> },
    { name: "Node.js", category: "Backend", level: 94, icon: <Server className="w-4 h-4 text-green-500" /> },
    { name: "Express.js", category: "Backend", level: 90, icon: <Server className="w-4 h-4 text-gray-500" /> },
    { name: "REST API", category: "Backend", level: 98, icon: <span className="text-[9px] font-bold bg-purple-500 text-white px-1 py-0.5 rounded">API</span> },
    { name: "MongoDB", category: "Database", level: 85, icon: <Database className="w-4 h-4 text-emerald-600" /> },
    { name: "MySQL", category: "Database", level: 90, icon: <Database className="w-4 h-4 text-blue-600" /> },
    { name: "PostgreSQL", category: "Database", level: 80, icon: <Database className="w-4 h-4 text-indigo-600" /> },
    { name: "Git", category: "Tools & Others", level: 90, icon: <span className="text-[10px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded">Git</span> },
    { name: "GitHub", category: "Tools & Others", level: 90, icon: <span className="text-[10px] font-bold dark:bg-white dark:text-black bg-black text-white px-1.5 py-0.5 rounded">GH</span> },
    { name: "VS Code", category: "Tools & Others", level: 95, icon: <span className="text-[10px] font-bold bg-blue-700 text-white px-1.5 py-0.5 rounded">VS</span> },
    { name: "Postman", category: "Tools & Others", level: 90, icon: <span className="text-[9px] font-bold bg-orange-500 text-white px-1 py-0.5 rounded">PM</span> },
    { name: "Firebase", category: "Tools & Others", level: 75, icon: <span className="text-[10px] font-bold bg-yellow-500 text-black px-1.5 py-0.5 rounded">FB</span> },
    { name: "Vercel", category: "Tools & Others", level: 85, icon: <span className="text-[10px] font-bold dark:bg-white dark:text-black bg-black text-white px-1.5 py-0.5 rounded">V</span> },
    { name: "Netlify", category: "Tools & Others", level: 80, icon: <span className="text-[10px] font-bold bg-teal-500 text-white px-1.5 py-0.5 rounded">N</span> },
    { name: "JWT Authentication", category: "Backend", level: 95, icon: <span className="text-[9px] font-bold bg-indigo-600 text-white px-1 py-0.5 rounded">JWT</span> },
    { name: "Responsive Design", category: "Frontend", level: 95, icon: <Layout className="w-4 h-4 text-pink-500" /> },
    { name: "UI/UX Design", category: "Frontend", level: 85, icon: <Palette className="w-4 h-4 text-purple-500" /> },
  ];

  const services = [
    {
      title: "Frontend Development",
      category: "Frontend",
      description: "Modern UI/UX with React, Next.js & Tailwind",
      icon: <Layout className="w-4 h-4" />,
    },
    {
      title: "Backend Engineering",
      category: "Backend",
      description: "Secure APIs & scalable Node.js systems",
      icon: <Server className="w-4 h-4" />,
    },
    {
      title: "Database Architecture",
      category: "Database",
      description: "Optimized MongoDB & PostgreSQL design",
      icon: <Database className="w-4 h-4" />,
    },
    {
      title: "API Integration",
      category: "Backend",
      description: "Stripe, REST, GraphQL & third-party systems",
      icon: <Server className="w-4 h-4" />,
    },
    {
      title: "Performance Optimization",
      category: "Tools & Others",
      description: "Speed, SEO & scalable architecture",
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Tools & Others"];

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skills;
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") return services;
    return services.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      className={`min-h-screen px-4 sm:px-6 md:px-8 py-8 lg:ml-72 ml-0 font-sans transition-colors duration-300 ${
        darkMode ? "bg-[#0F172A] text-white" : "bg-[#F8FAFC] text-[#1E293B]"
      }`}
    >
      {/* HEADER */}
      <Topbar title="Skills" darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* HORIZONTAL CATEGORY TAGS BAR */}
      <div className="mt-6 mb-8 w-full sticky top-[64px] z-10 py-2 backdrop-blur-md bg-transparent">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scroll-smooth snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1 text-xs font-medium rounded-full whitespace-nowrap snap-center transition-all duration-200 border ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : darkMode
                    ? "bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200"
                    : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-slate-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* RESPONSIVE STRUCTURE MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 items-start">
        
        {/* LEFT CARD: TECHNICAL SKILLS */}
        <div
          className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 border xl:col-span-7 ${
            darkMode
              ? "bg-slate-900/40 backdrop-blur-xl border-slate-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
              : "bg-white border-slate-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          }`}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className={`text-xs sm:text-sm font-bold tracking-tight uppercase ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Technical Stack
            </h2>
            <span className="text-[10px] px-2 py-0.5 rounded font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500">
              {filteredSkills.length} Items
            </span>
          </div>

          {filteredSkills.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No modules found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 max-h-[70vh] overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {filteredSkills.map((skill) => (
                <div key={skill.name} className="group flex items-center gap-3 py-1">
                  {/* ICON BLOCK */}
                  <div
                    className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-105 ${
                      darkMode 
                        ? "bg-slate-900 border-slate-800 text-slate-300" 
                        : "bg-slate-50 border-slate-100 text-slate-600"
                    }`}
                  >
                    {skill.icon}
                  </div>

                  {/* DATA PROGRESS LINE */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className={`font-semibold truncate ${darkMode ? "text-slate-200" : "text-slate-700"}`}>
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-mono ${darkMode ? "text-slate-500" : "text-slate-400"}`}>{skill.level}%</span>
                    </div>

                    <div className={`h-1 w-full rounded-full overflow-hidden ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}>
                      <div
                        className="h-full rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT CARD: SERVICES */}
        <div
          className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 border xl:col-span-5 ${
            darkMode
              ? "bg-slate-900/40 backdrop-blur-xl border-slate-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
              : "bg-white border-slate-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          }`}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className={`text-xs sm:text-sm font-bold tracking-tight uppercase ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Services Offered
            </h2>
            <span className="text-[10px] px-2 py-0.5 rounded font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-500">
              {filteredServices.length} Caps
            </span>
          </div>

          {filteredServices.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No capability matches.</p>
          ) : (
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {filteredServices.map((s) => (
                <div
                  key={s.title}
                  className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-300 ${
                    darkMode
                      ? "bg-slate-900/60 border-slate-800/50 hover:bg-slate-800 text-slate-300"
                      : "bg-slate-50/70 border-slate-100 hover:bg-white hover:shadow-md text-slate-700"
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-lg shrink-0 ${
                      darkMode ? "bg-slate-800 text-indigo-400" : "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    {s.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className={`font-bold text-xs sm:text-sm tracking-tight ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      {s.title}
                    </h3>
                    <p className={`text-[11px] mt-0.5 leading-normal ${darkMode ? "text-slate-400" : "text-slate-500"} truncate sm:whitespace-normal`}>
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}