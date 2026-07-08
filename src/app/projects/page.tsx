"use client";
import { Search, ArrowUpRight, Play, X, Globe } from "lucide-react";
import React, { useState, useMemo, ReactElement, useEffect } from "react";

import Topbar from "@/components/Topbar";

// TypeScript Interfaces
interface ProjectFeature extends Array<string> {}

interface Project {
  id: number;
  title: string;
  category: string;
  tech: string;
  image: string;
  link: string;
  video: string;
  description: string;
  features: string[];
}

type Category = "All" | "Web Apps" | "Mobile Apps" | "UI/UX" | "Backend";

const PROJECTS_DATA: Project[] = [
  { 
    id: 1, 
    title: "E-Commerce App", 
    category: "Web Apps", 
    tech: "Next.js, Tailwind CSS, Stripe", 
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop", 
    link: "https://example.com", 
    video: "https://youtu.be/dQw4w9WgXcQ",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, and Stripe payment integration.",
    features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "User Auth", "Order Tracking"]
  },
  { 
    id: 2, 
    title: "Task Management", 
    category: "Web Apps", 
    tech: "React, Node.js, MongoDB", 
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    link: "https://example.com",
    video: "https://youtu.be/jNQXAC9IVRw",
    description: "Collaborative task management application for team organization and workflow efficiency.",
    features: ["Real-time Updates", "Task Assignment", "Team Collaboration", "Progress Tracking", "Notifications"]
  },
  { 
    id: 3, 
    title: "Portfolio Website", 
    category: "UI/UX", 
    tech: "Next.js, Tailwind CSS", 
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    link: "https://example.com",
    video: "https://youtu.be/WlaqL_sE6eM?si=9fLnA-J5LNqo6KhZ",
    description: "Modern portfolio website showcasing projects with beautiful UI and smooth animations.",
    features: ["Responsive Design", "Smooth Animations", "Dark Mode", "Project Showcase", "Contact Form"]
  },
  { 
    id: 4, 
    title: "Crypto Dashboard", 
    category: "Backend", 
    tech: "Next.js, Chart.js, Coin API", 
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    link: "https://example.com",
    video: "https://youtu.be/video4",
    description: "Real-time cryptocurrency dashboard with live price tracking and market analytics.",
    features: ["Live Updates", "Interactive Charts", "Market Analysis", "Portfolio Tracking", "Alerts"]
  },
  { 
    id: 5, 
    title: "Blog Platform", 
    category: "Web Apps", 
    tech: "MERN Stack", 
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop",
    link: "https://example.com",
    video: "https://youtu.be/video5",
    description: "Full-stack blogging platform with user authentication and content management system.",
    features: ["Article Creation", "Comment System", "User Profiles", "Search Functionality", "Categories"]
  },
  { 
    id: 6, 
    title: "Weather App", 
    category: "Mobile Apps", 
    tech: "React, OpenWeather API", 
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=500&h=300&fit=crop",
    link: "https://example.com",
    video: "https://youtu.be/video6",
    description: "Beautiful weather application providing real-time weather updates and forecasts.",
    features: ["Real-time Weather", "5-Day Forecast", "Location Search", "Weather Alerts", "Beautiful UI"]
  },
];

const CATEGORIES: Category[] = ["All", "Web Apps", "Mobile Apps", "UI/UX", "Backend"];

// Helper function to extract YouTube video ID
const getYouTubeVideoId = (url: string): string | null => {
  const patterns: RegExp[] = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

export default function ProjectsSection(): ReactElement {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo<Project[]>(() => {
    return PROJECTS_DATA.filter((project: Project): boolean => {
      const matchCategory: boolean =
        activeCategory === "All" || project.category === activeCategory;

      const matchSearch: boolean =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [selectedProject]);

  return (
  <section
  className={`
  
    px-6 py-12 
    lg:ml-72 ml-0
    font-sans
    transition-colors duration-300
    ${
      darkMode
        ? "bg-[#0F172A] text-white"
        : "bg-[#F8FAFC] text-[#1E293B]"
    }
  `}
>          

      <Topbar
  title="Projects"
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">

        {/* HEADER */}

        {/* FILTER + SEARCH */}
        <div className="flex flex-col xl:flex-row justify-between gap-5 mb-10">

          {/* CATEGORY */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat: Category): ReactElement => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium
                  border transition-all whitespace-nowrap

                  ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SEARCH */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />

            <input
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="
                w-full pl-10 pr-4 py-3 rounded-xl
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                focus:ring-2 focus:ring-blue-500 outline-none
                text-sm shadow-sm
              "
            />
          </div>
        </div>

        {/* GRID SAFE WRAPPER */}
        <div className="w-full overflow-x-hidden">

          {filteredProjects.length > 0 ? (
            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-2
              xl:grid-cols-3

              gap-6 sm:gap-7 lg:gap-8
              w-full
            ">

              {filteredProjects.map((project: Project): ReactElement => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="
                    group relative overflow-hidden
                    w-full min-w-0

                    rounded-2xl sm:rounded-3xl

                    bg-white/70 dark:bg-slate-800/60
                    backdrop-blur-md

                    border border-slate-200 dark:border-slate-700

                    shadow-sm hover:shadow-2xl

                    hover:-translate-y-2

                    transition-all duration-300 ease-out

                    cursor-pointer
                  "
                >

                  {/* IMAGE */}
                  <div className="relative w-full h-40 sm:h-44 lg:h-48 bg-slate-900 overflow-hidden">

                    {/* Thumbnail Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* HOVER OVERLAY */}
                    <div className="
                      absolute inset-0
                      bg-gradient-to-tr from-blue-500/20 to-purple-500/20
                      opacity-0 group-hover:opacity-100 
                      flex items-center justify-center
                      transition-all duration-300
                    ">
                      <div className="
                        bg-white/20 backdrop-blur-sm
                        p-4 rounded-full
                        group-hover:scale-110 transition-transform
                      ">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  {/* <div className="p-4 sm:p-5 lg:p-6">

                    <h3 className="
                      text-base sm:text-lg font-bold
                      group-hover:text-blue-600
                      transition
                    ">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      {project.tech}
                    </p>

                    <div className="mt-4 sm:mt-5 flex items-center justify-between">

                      <span className="
                        text-[10px] sm:text-xs px-3 py-1 rounded-full
                        bg-slate-100 dark:bg-slate-700
                        text-slate-600 dark:text-slate-300
                        whitespace-nowrap
                      ">
                        {project.category}
                      </span>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                        className="
                          flex items-center gap-1
                          text-xs sm:text-sm font-semibold text-blue-600
                          hover:gap-2 transition-all
                        "
                      >
                        Live <ArrowUpRight className="w-4 h-4" />
                      </a>

                    </div>
                  </div> */}

                  <div className="p-5 sm:p-6">

  {/* Title */}
  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition">
    {project.title}
  </h3>

  {/* Description */}
  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
    {project.description}
  </p>

  {/* Tech Stack */}
  <div className="flex flex-wrap gap-2 mt-4">
    {project.tech.split(", ").map((tech, index) => (
      <span
        key={index}
        className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
      >
        {tech}
      </span>
    ))}
  </div>

  {/* Bottom */}
  <div className="mt-5 flex items-center justify-between">

    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
      {project.category}
    </span>

    <div className="flex items-center gap-3">

      {/* Demo */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedProject(project);
        }}
        className="flex items-center gap-1 text-red-600 hover:text-red-700 font-semibold text-sm"
      >
        <Play className="w-4 h-4 fill-current" />
        Demo
      </button>

      {/* Live */}
      {/* <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm"
      >
        Live
        <ArrowUpRight className="w-4 h-4" />
      </a> */}

    </div>
  </div>
</div>

                  {/* bottom line */}
                  <div className="
                    absolute bottom-0 left-0
                    w-0 h-[2px] bg-blue-600
                    group-hover:w-full
                    transition-all duration-300
                  " />
                </div>
              ))}

            </div>
          ) : (
            <div className="text-center py-16 text-slate-500">
              No projects found for this search.
            </div>
          )}

        </div>
      </div>

      {/* PROFESSIONAL YOUTUBE MODAL */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          {/* BACKDROP */}
          <div className="
            absolute inset-0 
            bg-black/60 backdrop-blur-sm
            animate-in fade-in duration-300
          " />

          {/* MODAL CONTENT */}
          <div 
            className={`
              relative z-10 w-full max-w-4xl
              rounded-3xl overflow-hidden
              shadow-2xl
              animate-in scale-95 fade-in duration-300
              ${
                darkMode
                  ? "bg-[#0F172A] border border-slate-700"
                  : "bg-white border border-slate-200"
              }
            `}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              className="
                absolute top-4 right-4 z-20
                p-2.5 rounded-full
                bg-gradient-to-br from-red-500/80 to-red-600/80 
                hover:from-red-600 hover:to-red-700
                dark:bg-gradient-to-br dark:from-red-600/80 dark:to-red-700/80 
                dark:hover:from-red-700 dark:hover:to-red-800
                backdrop-blur-md shadow-lg
                hover:shadow-xl
                text-white transition-all duration-200
                group
                flex items-center justify-center
              "
              title="Close modal (ESC)"
            >
              <X className="w-6 h-6 group-hover:scale-125 group-hover:rotate-90 transition-all duration-300" />
            </button>

            {/* CONTENT SECTION */}
            <div className={`p-6 sm:p-8 lg:p-10 ${darkMode ? "bg-[#0F172A]" : "bg-white"}`}>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT SIDE - YOUTUBE VIDEO */}
                <div className="lg:col-span-2 space-y-6">

                  {/* YOUTUBE VIDEO PLAYER */}
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 bg-black">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedProject.video)}?autoplay=1&modestbranding=1`}
                        title={selectedProject.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* PROJECT DESCRIPTION */}
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                      {selectedProject.title}
                    </h2>
                    <p className={`text-lg leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* FEATURES */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Key Features</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {selectedProject.features?.map((feature: string, idx: number): ReactElement => (
                        <div key={idx} className={`
                          flex items-center gap-2 p-3 rounded-lg
                          ${darkMode ? "bg-slate-800/50" : "bg-slate-100"}
                        `}>
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDE - INFO SIDEBAR */}
                <div className="lg:col-span-1 space-y-6">

                  {/* INFO CARD */}
                  <div className={`
                    p-6 rounded-2xl border
                    ${darkMode ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-200"}
                  `}>
                    <h3 className="text-lg font-bold mb-6">Project Info</h3>

                    <div className="space-y-5">

                      {/* CATEGORY */}
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-2">
                          Category
                        </p>
                        <p className="text-sm font-semibold">{selectedProject.category}</p>
                      </div>

                      {/* TECH STACK */}
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-2">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.split(", ").map((tech: string, idx: number): ReactElement => (
                            <span key={idx} className="
                              px-3 py-1 rounded-full text-xs font-medium
                              bg-blue-600/20 text-blue-600
                            ">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* PROJECT ID */}
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-2">
                          Project ID
                        </p>
                        <p className="text-sm font-mono text-slate-600 dark:text-slate-400">
                          #{String(selectedProject.id).padStart(3, '0')}
                        </p>
                      </div>

                      {/* DIVIDER */}
                      <hr className={`${darkMode ? "border-slate-700" : "border-slate-200"}`} />

                      {/* VISIT BUTTON */}
                      {/* <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          w-full flex items-center justify-center gap-2
                          px-4 py-3
                          bg-gradient-to-r from-blue-600 to-blue-700
                          text-white rounded-xl font-semibold
                          hover:shadow-lg hover:scale-105
                          transition-all
                        "
                      >
                        <Globe className="w-5 h-5" />
                        Visit Project
                      </a> */}

                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}