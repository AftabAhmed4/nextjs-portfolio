"use client";
import React, { useState } from "react";
import { ArrowLeft, Globe } from "lucide-react";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import { useParams } from "next/navigation";

const PROJECTS_DATA = [
  { 
    id: 1, 
    title: "E-Commerce App", 
    category: "Web Apps", 
    tech: "Next.js, Tailwind CSS, Stripe", 
    image: "/project1.png", 
    link: "#", 
    video: "/videos/project1.mp4",
    description: "A full-featured e-commerce platform built with Next.js and Stripe for seamless payment processing.",
    features: ["Product catalog", "Shopping cart", "Stripe integration", "User authentication", "Order management"]
  },
  { 
    id: 2, 
    title: "Task Management", 
    category: "Web Apps", 
    tech: "React, Node.js, MongoDB", 
    image: "/project2.png", 
    link: "#", 
    video: "/videos/project2.mp4",
    description: "A collaborative task management app that helps teams organize their workflows efficiently.",
    features: ["Real-time updates", "Task assignment", "Team collaboration", "Progress tracking", "Notifications"]
  },
  { 
    id: 3, 
    title: "Portfolio Website", 
    category: "UI/UX", 
    tech: "Next.js, Tailwind CSS", 
    image: "/project3.png", 
    link: "#", 
    video: "/videos/project3.mp4",
    description: "A modern portfolio website showcasing projects and skills with beautiful UI design.",
    features: ["Responsive design", "Smooth animations", "Dark mode", "Project showcase", "Contact form"]
  },
  { 
    id: 4, 
    title: "Crypto Dashboard", 
    category: "Backend", 
    tech: "Next.js, Chart.js, Coin API", 
    image: "/project4.png", 
    link: "#", 
    video: "/videos/project4.mp4",
    description: "Real-time cryptocurrency dashboard with live price tracking and analytics.",
    features: ["Live price updates", "Interactive charts", "Market analysis", "Portfolio tracking", "Price alerts"]
  },
  { 
    id: 5, 
    title: "Blog Platform", 
    category: "Web Apps", 
    tech: "MERN Stack", 
    image: "/project5.png", 
    link: "#", 
    video: "/videos/project5.mp4",
    description: "A full-stack blogging platform with user authentication and content management.",
    features: ["Article creation", "Comment system", "User profiles", "Search functionality", "Category filtering"]
  },
  { 
    id: 6, 
    title: "Weather App", 
    category: "Mobile Apps", 
    tech: "React, OpenWeather API", 
    image: "/project6.png", 
    link: "#", 
    video: "/videos/project6.mp4",
    description: "A beautiful weather app that provides real-time weather updates and forecasts.",
    features: ["Real-time weather", "5-day forecast", "Location search", "Weather alerts", "Beautiful UI"]
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  const [darkMode, setDarkMode] = useState(false);
  
  const project = PROJECTS_DATA.find(p => p.id === projectId);

  if (!project) {
    return (
      <section className={`min-h-screen px-6 py-12 md:px-16 lg:px-24 lg:ml-72 ml-0 font-sans ${darkMode ? "bg-[#0F172A] text-white" : "bg-[#F8FAFC] text-[#1E293B]"}`}>
        <Topbar title="Project Not Found" darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex items-center justify-center h-96">
          <p className="text-lg">Project not found</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`min-h-screen px-6 py-12 md:px-16 lg:px-24 lg:ml-72 ml-0 font-sans transition-colors duration-300 ${darkMode ? "bg-[#0F172A] text-white" : "bg-[#F8FAFC] text-[#1E293B]"}`}>
      <Topbar title="Project Details" darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {/* BACK BUTTON */}
        <Link href="/projects">
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
        </Link>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE - VIDEO */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl">
              {/* VIDEO PLAYER */}
              <div className="relative w-full bg-black">
                <video
                  className="w-full h-auto"
                  controls
                  controlsList="nodownload"
                  poster="/project-poster.png"
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* PROJECT INFO */}
            <div className="mt-10 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-lg">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">{project.title}</h2>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1 rounded-full bg-blue-600/20 text-blue-600 text-sm font-medium">
                  {project.category}
                </span>
                <span className="px-4 py-1 rounded-full bg-purple-600/20 text-purple-600 text-sm font-medium">
                  {project.tech}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              {/* FEATURES */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="space-y-3">
                  {project.features?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* LIVE LINK */}
              <a
                href={project.link}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
              >
                <Globe className="w-5 h-5" />
                Visit Live Project
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-lg sticky top-24">
              <h3 className="text-lg font-bold mb-6">Project Info</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    Category
                  </p>
                  <p className="text-sm font-medium">{project.category}</p>
                </div>

                <div>
                  <p className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    Technologies
                  </p>
                  <p className="text-sm font-medium">{project.tech}</p>
                </div>

                <div>
                  <p className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    Project ID
                  </p>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">#{project.id}</p>
                </div>

                <hr className="border-slate-200 dark:border-slate-700" />

                <a
                  href={project.link}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  <Globe className="w-4 h-4" />
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
