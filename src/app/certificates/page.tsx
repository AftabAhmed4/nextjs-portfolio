"use client";

import React, { useState } from "react";
import { Award, Settings, Download, Calendar, CheckCircle2 } from "lucide-react";
import Topbar from "@/components/Topbar";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  category: string;
}

const certificatesData: Certificate[] = [
  {
    id: "1",
    title: "Governor House Artificial Intelligence Certificate",
    issuer: "Governor House Sindh",
    issueDate: "2025-2026",
    description:
      "Completed Artificial Intelligence program covering Python, AI fundamentals, Machine Learning basics, and modern software development.",
    category: "Artificial Intelligence",
  },
    {
  id: "2",
  title: "Google AI Seekho 2026",
  issuer: "Google",
  issueDate: "2026",
  description:
    "Completed the Google AI Seekho 2026 learning program focused on Generative AI, AI tools, prompt engineering, and practical AI skills for developers and professionals.",
  category: "Artificial Intelligence",
},
  {
    id: "3",
    title: "Next.js Certification",
    issuer: "Governor House Sindh",
    issueDate: "2022",
    description:
      "Learned Next.js App Router, Server Components, API Routes, Authentication, SEO, and deployment.",
    category: "Web Development",
  },
  {
    id: "4",
    title: "React.js Certification",
    issuer: "Governor House Sindh",
    issueDate: "2022",
    description:
      "Built modern React applications using Hooks, Context API, Routing, and State Management.",
    category: "Web Development",
  },
  {
    id: "5",
    title: "TypeScript Certification",
    issuer: "Governor House Sindh",
    issueDate: "2021",
    description:
      "Learned interfaces, generics, type safety, and TypeScript with React and Next.js.",
    category: "Programming",
  },
  {
    id: "6",
    title: "MySQL Database Certification",
    issuer: "online learning platform",
    issueDate: "2022",
    description:
      "Learned MySQL database design, SQL queries, joins, indexing, stored procedures, and optimization.",
    category: "Database",
  },
  {
    id: "7",
    title: "PostgreSQL Database Certification",
    issuer: "online learning platform",
    issueDate: "2023",
    description:
      "Mastered PostgreSQL database administration, advanced SQL queries, functions, and performance tuning.",
    category: "Database",
  },
  {
    id: "8",
    title: "Microsoft Excel Certification",
    issuer: "online learning platform",
    issueDate: "2021",
    description:
      "Advanced Microsoft Excel including formulas, pivot tables, charts, dashboards, data analysis, and reporting.",
    category: "Others",
  },
  {
    id: "9",
    title: "Professional Data Entry Certification",
    issuer: "online learning platform",
    issueDate: "2022",
    description:
      "Completed professional training in data entry, Excel automation, data management, accuracy, and productivity.",
    category: "Data Entry",
  },
  {
    id: "10",
    title: "Responsive Web Design Certification",
    issuer: "online learning platform",
    issueDate: "2020",
    description:
      "Built responsive websites using HTML5, CSS3, Flexbox, Grid, and accessibility best practices.",
    category: "Web Development",
  },
  {
    id: "11",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "online learning platform",
    issueDate: "2020",
    description:
      "Learned modern JavaScript (ES6+), DOM manipulation, algorithms, and problem-solving techniques.",
    category: "Programming",
  },
{
  id: "12",
  title: "MongoDB Database Certification",
  issuer: "online learning platform",
  issueDate: "2024",
  description:
    "Completed MongoDB database training covering CRUD operations, aggregation, indexing, schema design, data modeling, and performance optimization for modern web applications.",
  category: "Database",
},
{
  id: "13",
  title: "Data Entry Professional Certification",
  issuer: "Online Learning Platform",
  issueDate: "2024",
  description:
    "Learned professional data entry techniques, Microsoft Excel, Google Sheets, data processing, data accuracy, document management, and office productivity tools.",
  category: "Others",
},
];

const categories = ["All", "Web Development", "Database","Others"];

export default function CertificatesSection() {
    const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? certificatesData
      : certificatesData.filter((c) => c.category === selectedCategory);

  return (
     <section
  className={`
    
    px-6 py-12 
    lg:ml-72     font-sans
    transition-colors duration-300
    ${
      darkMode
        ? "bg-[#0F172A] text-white"
        : "bg-[#F8FAFC] text-[#1E293B]"
    }
  `}
>   

      {/* HEADER */}
    {/* HEADER */}
              <Topbar
  title="Certificates"
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>  

      {/* FILTERS */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 text-sm rounded-full border transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filtered.map((cert) => (
          <div
            key={cert.id}
            className="group relative bg-white/70 backdrop-blur-xl border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >

            {/* TOP BADGE */}
            <div className="flex justify-between items-start">

              <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
                {cert.category}
              </span>

              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-blue-600 transition">
              {cert.title}
            </h3>

            {/* ISSUER */}
            <p className="text-sm text-slate-500 mt-1">
              Issued by <span className="font-medium text-slate-700">{cert.issuer}</span>
            </p>

            {/* DATE */}
            <div className="flex items-center gap-2 text-xs text-slate-400 mt-3">
              <Calendar className="w-4 h-4" />
              {cert.issueDate}
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              {cert.description}
            </p>

            {/* FOOTER */}
            <div className="flex justify-between items-center mt-6">

              <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Verified
              </span>

           

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}