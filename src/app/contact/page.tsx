// "use client";

// import React, { useState } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   User,
//   MessageSquare,
// } from "lucide-react";
// import Topbar from "@/components/Topbar";

// export default function ContactSection() {
//      const [darkMode, setDarkMode] = useState(false);
//   return (
  
// <section
//   className={`
//     min-h-screen
//     px-6 py-12 md:px-16 lg:px-24
//     lg:ml-72 ml-0
//     font-sans
//     transition-colors duration-300
//     ${
//       darkMode
//         ? "bg-[#0F172A] text-white"
//         : "bg-[#F8FAFC] text-[#1E293B]"
//     }
//   `}
// >
//         {/* HEADER */}
//               <Topbar
//   title="Contact"
//   darkMode={darkMode}
//   setDarkMode={setDarkMode}
// />  

//       {/* GRID */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//         {/* LEFT PANEL */}
//         <div className="relative rounded-3xl p-8 bg-white/70 backdrop-blur-xl border border-slate-200 shadow-sm overflow-hidden">

//           {/* glow background */}
//           <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl" />
//           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/40 rounded-full blur-3xl" />

//           <h2 className="text-2xl font-bold mb-3">Let’s Build Something</h2>
//           <p className="text-sm text-slate-600 mb-8 leading-relaxed">
//             I’m available for freelance work, full-time roles, or collaboration.
//             Feel free to reach out anytime.
//           </p>

//           {/* INFO CARDS */}
//           <div className="space-y-4">

//             <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition">
//               <div className="p-3 rounded-xl bg-blue-50">
//                 <Mail className="w-5 h-5 text-blue-600" />
//               </div>
//               <div>
//                 <p className="text-xs text-slate-400">Email</p>
//                 <p className="text-sm font-medium">tayyabali@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition">
//               <div className="p-3 rounded-xl bg-emerald-50">
//                 <Phone className="w-5 h-5 text-emerald-600" />
//               </div>
//               <div>
//                 <p className="text-xs text-slate-400">Phone</p>
//                 <p className="text-sm font-medium">+92 300 1234567</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition">
//               <div className="p-3 rounded-xl bg-rose-50">
//                 <MapPin className="w-5 h-5 text-rose-600" />
//               </div>
//               <div>
//                 <p className="text-xs text-slate-400">Location</p>
//                 <p className="text-sm font-medium">Karachi, Pakistan</p>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8">

//           <h2 className="text-2xl font-bold mb-6">
//             Send Message
//           </h2>

//           <form className="space-y-6">

//             {/* NAME */}
//             <div>
//               <label className="text-xs text-slate-500">Your Name</label>
//               <div className="mt-2 flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 bg-slate-50">
//                 <User className="w-4 h-4 text-slate-400" />
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full bg-transparent outline-none text-sm"
//                 />
//               </div>
//             </div>

//             {/* EMAIL */}
//             <div>
//               <label className="text-xs text-slate-500">Email</label>
//               <div className="mt-2 flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 bg-slate-50">
//                 <Mail className="w-4 h-4 text-slate-400" />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full bg-transparent outline-none text-sm"
//                 />
//               </div>
//             </div>

//             {/* MESSAGE */}
//             <div>
//               <label className="text-xs text-slate-500">Message</label>
//               <div className="mt-2 flex items-start gap-3 px-4 py-3 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 bg-slate-50">
//                 <MessageSquare className="w-4 h-4 text-slate-400 mt-1" />
//                 <textarea
//                   rows={5}
//                   placeholder="Write your message..."
//                   className="w-full bg-transparent outline-none text-sm resize-none"
//                 />
//               </div>
//             </div>

//             {/* BUTTON */}
//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.01] transition"
//             >
//               <Send className="w-4 h-4" />
//               Send Message
//             </button>

//           </form>

//         </div>
//       </div>
//     </section>
//   );
// }















// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function sendEmail() {
//     if (!name || !email || !message) {
//       alert("Please fill all fields ❌");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("/api/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name,
//           message,
//           email,
         
//         }),
//       });

//       const data = await res.json();
//       setLoading(false);

//       if (data.success) {
//         alert("Email Sent Successfully ✅");
//         setName("");
//         setEmail("");
//         setMessage("");
//       } else {
//         alert(data.message || "Error Sending Email ❌");
//       }
//     } catch (error) {
//       setLoading(false);
//       alert("Server Error ❌");
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      
//       <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-8">
        
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-extrabold text-gray-800">
//             📧 Email System
//           </h1>
//           <p className="text-gray-500 text-sm mt-2">
//             Send message instantly with modern UI
//           </p>
//         </div>

//         <div className="space-y-5">

//           {/* Name */}
//           <input
//             type="text"
//             value={name}
//             placeholder="Enter your full name"
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
//           />

//           {/* Message */}
//           <textarea
//             value={message}
//             placeholder="Write your message..."
//             rows={5}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
//           />

//           {/* Button */}
//           <button
//             onClick={sendEmail}
//             disabled={loading}
//             className="w-full py-3 rounded-xl font-semibold text-white transition
//             bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
//             disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//           >
//             {loading ? (
//               <>
//                 <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
//                 Sending...
//               </>
//             ) : (
//               "Send Email 🚀"
//             )}
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }














"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import Topbar from "@/components/Topbar";

export default function ContactSection() {
  const [darkMode, setDarkMode] = useState(false);

  // ✅ FORM STATE
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [modal, setModal] = useState({
  open: false,
  type: "success" as "success" | "error",
  title: "",
  message: "",
});

const showModal = (
  type: "success" | "error",
  title: string,
  message: string
) => {
  setModal({
    open: true,
    type,
    title,
    message,
  });
};

  
  // const sendMessage = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();

  //   if (!form.name || !form.email || !form.message) {
  //     alert("Please fill all fields ❌");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const res = await fetch("/api/send-email", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //     });

  //     const data = await res.json();
  //     setLoading(false);

  //     if (data.success) {
  //       alert("Message Sent Successfully ✅");

  //       // reset form
  //       setForm({
  //         name: "",
  //         email: "",
  //         message: "",
  //       });
  //     } else {
  //       alert(data.message || "Failed to send message ❌");
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     alert("Server Error ❌");
  //   }
  // };

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    showModal(
      "error",
      "Missing Fields",
      "Please fill in all required fields."
    );
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setLoading(false);

    if (res.ok && data.success) {
      showModal(
        "success",
        "Message Sent",
        data.message || "Your message has been sent successfully."
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      showModal(
        "error",
        "Oops!",
        data.message || "Failed to send message."
      );
    }
  } catch {
    setLoading(false);

    showModal(
      "error",
      "Server Error",
      "Something went wrong. Please try again."
    );
  }
};

  return (
    <section
      className={`
      
        px-2 py-12
        lg:ml-72 
        font-sans
        transition-colors duration-300
        ${
          darkMode
            ? "bg-[#0F172A] text-white"
            : "bg-[#F8FAFC] text-[#1E293B]"
        }
      `}
    >


      {/* HEADER */}
      <Topbar 
        title="Contact"
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {modal.open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

    <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden animate-[zoom_.25s_ease]">

      <div
        className={`h-2 ${
          modal.type === "success"
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      />

      <div className="p-8 text-center">

        <div
          className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center ${
            modal.type === "success"
              ? "bg-green-100"
              : "bg-red-100"
          }`}
        >
          {modal.type === "success" ? (
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        <h2 className="text-2xl font-bold mt-6">
          {modal.title}
        </h2>

        <p className="text-slate-500 mt-3 leading-relaxed">
          {modal.message}
        </p>

        <button
          onClick={() =>
            setModal((prev) => ({
              ...prev,
              open: false,
            }))
          }
          className={`mt-8 w-full py-3 rounded-xl font-semibold text-white transition ${
            modal.type === "success"
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          OK
        </button>

      </div>
    </div>

  </div>
)}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">

        {/* LEFT PANEL (UNCHANGED UI) */}
        <div className="relative rounded-3xl p-8 bg-white/70 backdrop-blur-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/40 rounded-full blur-3xl" />

          <h2 className="text-xl font-bold mb-3">
            Let’s Build Something
          </h2>

          <p className="text-sm text-slate-600 mb-8 leading-relaxed">
            I’m available for freelance work, full-time roles, or collaboration.
            Feel free to reach out anytime.
          </p>

          <div className="space-y-4">

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition">
              <div className="p-3 rounded-xl bg-blue-50">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-black">Email</p>
                <p className="text-xs font-medium text-slate-900 dark:text-black">aftabahmedcbspakistan@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition">
              <div className="p-3 rounded-xl bg-emerald-50">
                <Phone className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Phone</p>
                <p className="text-xs font-medium text-slate-900">+92 348 2275246</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition">
              <div className="p-3 rounded-xl bg-rose-50">
                <MapPin className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="text-xs font-medium text-slate-900">Karachi, Pakistan</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM (LOGIC ADDED) */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 py-8  mb-8">

     <h2 className="text-xl font-bold mb-6 text-slate-900">
  Send Message
</h2>

          <form onSubmit={sendMessage} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="text-xs text-slate-500">Your Name</label>
              <div className="mt-2 flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 bg-slate-50">
                <User className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-transparent outline-none text-sm text-slate-600"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-xs text-slate-500">Email</label>
              <div className="mt-2 flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 bg-slate-50">
                <Mail className="w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none text-sm text-slate-600"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-xs text-slate-500">Message</label>
              <div className="mt-2 flex items-start gap-3 px-4 py-3 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 bg-slate-50">
                <MessageSquare className="w-4 h-4 text-slate-400 mt-1" />
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full bg-transparent outline-none text-sm resize-none text-slate-600"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex cursor-pointer items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.01] transition disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 cursor-pointer" />
                  Send Message
                </>
              )}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}