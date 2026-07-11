

// import { NextResponse, NextRequest } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: NextRequest) {
//   try {
//     const { email, name, message } = await req.json();

//     console.log({email, name, message });

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//     auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_APP_PASSWORD,
//   },
//     });

//     await transporter.verify();

//     const mailOptions = {
//       from: '"Tayyab" <tayyabcbspakistan@gmail.com>',
//       to: email,
//       subject: "New Message - Portfolio Contact Form",
// html: `
// <div style="
//   font-family: Inter, Arial, sans-serif;
//   max-width: 640px;
//   margin: auto;
//   background: #ffffff;
//   border: 1px solid #e5e7eb;
//   border-radius: 14px;
//   overflow: hidden;
//   box-shadow: 0 10px 25px rgba(0,0,0,0.08);
// ">

//   <!-- HEADER -->
//   <div style="
//     background: linear-gradient(135deg, #2563eb, #4f46e5);
//     padding: 24px;
//     text-align: center;
//     color: white;
//   ">
//     <h1 style="margin:0;font-size:22px;letter-spacing:0.5px;">
//       📩 New Contact Message
//     </h1>
//     <p style="margin:6px 0 0;font-size:13px;opacity:0.9;">
//       You received a new message from your website
//     </p>
//   </div>

//   <!-- BODY -->
//   <div style="padding: 28px;">

//     <p style="margin:0 0 20px;color:#374151;font-size:15px;line-height:1.6;">
//       A user has submitted a message through your contact form. Details are below:
//     </p>

//     <!-- INFO BOX -->
//     <div style="
//       background:#f9fafb;
//       border:1px solid #e5e7eb;
//       border-radius:12px;
//       padding:16px;
//     ">

//       <p style="margin:0 0 10px;font-size:14px;color:#111827;">
//         <strong>Name:</strong> ${name || "N/A"}
//       </p>

//       <p style="margin:0 0 10px;font-size:14px;color:#111827;">
//         <strong>Email:</strong> ${email}
//       </p>

//     </div>

//     <!-- MESSAGE -->
//     <div style="
//       margin-top:18px;
//       padding:18px;
//       background:#ffffff;
//       border-left:4px solid #4f46e5;
//       border-radius:10px;
//       font-size:14px;
//       color:#374151;
//       line-height:1.7;
//       white-space:pre-line;
//     ">
//       ${message}
//     </div>

//     <!-- CTA -->
//     <div style="text-align:center;margin-top:28px;">
//       <a href="mailto:${email}" style="
//         display:inline-block;
//         padding:10px 18px;
//         background:#4f46e5;
//         color:#ffffff;
//         text-decoration:none;
//         border-radius:8px;
//         font-size:13px;
//         font-weight:500;
//       ">
//         Reply to User
//       </a>
//     </div>

//   </div>

//   <!-- FOOTER -->
//   <div style="
//     background:#f3f4f6;
//     padding:14px;
//     text-align:center;
//     font-size:12px;
//     color:#6b7280;
//   ">
//     © ${new Date().getFullYear()} Your Portfolio Contact System
//   </div>

// </div>
// `
//     };


//     await transporter.sendMail(mailOptions);




//     return NextResponse.json({
//       success: true,
//       message: "Emails sent successfully",
//     });

//   } catch (error: any) {
//     console.log("ERROR:", error);

//     return NextResponse.json({
//       success: false,
//       message: error?.message || "Something went wrong",
//     });
//   }
// }







// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import type { NextRequest } from "next/server";

// // =======================
// // EMAIL TRANSPORTER
// // =======================
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.GMAIL_USER as string,
//     pass: process.env.GMAIL_APP_PASSWORD as string,
//   },
// });

// // =======================
// // TYPES
// // =======================
// type ContactPayload = {
//   email: string;
//   name: string;
//   message: string;
// };

// // =======================
// // POST API ROUTE
// // =======================
// export async function POST(req: NextRequest) {
//   try {
//     const body: ContactPayload = await req.json();

//     const { email, name, message } = body;
//     // 👇 ADD HERE
// const ADMIN_EMAIL = "aftabahmedcbspakistan@gmail.com";

// if (email === ADMIN_EMAIL) {
//   return NextResponse.json(
//     {
//       success: false,
//      message: "⚠️ Please enter your email address. This email is admin email . Kindly use another email to continue."
//     },
//     { status: 400 }
//   );
// }

//     if (!email || !name || !message) {
//       return NextResponse.json(
//         { success: false, message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     console.log({ email, name, message });

//     // =========================
//     // 1️⃣ EMAIL TO ADMIN
//     // =========================
//     await transporter.sendMail({
//       from: `"Website Contact" <${process.env.GMAIL_USER}>`,
//       to: "aftabahmedcbspakistan@gmail.com",
//       subject: `New Message from ${name}`,
//   html: `
// <div style="
//   font-family: Arial, sans-serif;
//   max-width: 600px;
//   margin: auto;
//   background: #ffffff;
//   border: 1px solid #e5e7eb;
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0 10px 25px rgba(0,0,0,0.08);
// ">

//   <!-- HEADER -->
//   <div style="
//     background: linear-gradient(135deg, #2563eb, #4f46e5);
//     padding: 20px;
//     text-align: center;
//     color: white;
//   ">
//     <h1 style="margin:0;font-size:20px;">
//       📩 New Contact Message
//     </h1>
//     <p style="margin:5px 0 0;font-size:13px;opacity:0.9;">
//       You received a new message from your website
//     </p>
//   </div>

//   <!-- BODY -->
//   <div style="padding: 24px;">

//     <p style="font-size:14px;color:#374151;margin-bottom:20px;line-height:1.6;">
//       A user has sent you a message through your contact form.
//     </p>

//     <!-- INFO CARD -->
//     <div style="
//       background:#f9fafb;
//       border:1px solid #e5e7eb;
//       border-radius:10px;
//       padding:16px;
//       margin-bottom:18px;
//     ">

//       <p style="margin:0 0 10px;font-size:14px;color:#111827;">
//         <strong>👤 Name:</strong> ${name}
//       </p>

//       <p style="margin:0;font-size:14px;color:#111827;">
//         <strong>📧 Email:</strong> ${email}
//       </p>

//     </div>

//     <!-- MESSAGE BOX -->
//     <div style="
//       background:#ffffff;
//       border-left:4px solid #4f46e5;
//       padding:16px;
//       border-radius:8px;
//       font-size:14px;
//       color:#374151;
//       line-height:1.7;
//       white-space:pre-line;
//     ">
//       ${message}
//     </div>

//     <!-- CTA -->
//     <div style="text-align:center;margin-top:25px;">
//       <a href="mailto:${email}" style="
//         display:inline-block;
//         padding:10px 18px;
//         background:#4f46e5;
//         color:#ffffff;
//         text-decoration:none;
//         border-radius:8px;
//         font-size:13px;
//         font-weight:500;
//       ">
//         Reply to User
//       </a>
//     </div>

//   </div>

//   <!-- FOOTER -->
//   <div style="
//     background:#f3f4f6;
//     padding:12px;
//     text-align:center;
//     font-size:12px;
//     color:#6b7280;
//   ">
//     © ${new Date().getFullYear()} Contact Form Notification
//   </div>

// </div>
// `
//     });

//     // =========================
//     // 2️⃣ AUTO REPLY USER
//     // =========================
//     await transporter.sendMail({
//       from: `"Portfolio Team" <${process.env.GMAIL_USER}>`,
//       to: email,
//       subject: "We received your message ✔️",
//  html: `
// <div style="
//   font-family: Inter, Arial, sans-serif;
//   max-width: 600px;
//   margin: auto;
//   background: #ffffff;
//   border: 1px solid #e5e7eb;
//   border-radius: 14px;
//   overflow: hidden;
//   box-shadow: 0 12px 30px rgba(0,0,0,0.08);
// ">

//   <!-- HEADER -->
//   <div style="
//     background: linear-gradient(135deg, #111827, #1f2937);
//     padding: 24px;
//     text-align: center;
//     color: white;
//   ">
//     <h1 style="margin:0;font-size:20px;letter-spacing:0.5px;">
//       ✅ Message Received
//     </h1>
//     <p style="margin:6px 0 0;font-size:13px;opacity:0.8;">
//       We’ve successfully received your request
//     </p>
//   </div>

//   <!-- BODY -->
//   <div style="padding: 26px;">

//     <p style="font-size:15px;color:#111827;margin-bottom:14px;">
//       Hi <b>${name}</b>, 👋
//     </p>

//     <p style="font-size:14px;color:#374151;line-height:1.7;">
//       Thank you for reaching out. We’ve received your message and our team will review it shortly.
//       You can expect a response within <b>24–48 hours</b>.
//     </p>

//     <!-- MESSAGE BOX -->
//     <div style="
//       margin-top:18px;
//       background:#f9fafb;
//       border-left:4px solid #2563eb;
//       padding:16px;
//       border-radius:10px;
//       font-size:14px;
//       color:#374151;
//       line-height:1.6;
//       white-space:pre-line;
//     ">
//       <b style="color:#111827;">Your Message:</b><br/>
//       ${message}
//     </div>

//     <!-- INFO BOX -->
//     <div style="
//       margin-top:20px;
//       padding:14px;
//       background:#ffffff;
//       border:1px solid #e5e7eb;
//       border-radius:10px;
//       font-size:13px;
//       color:#6b7280;
//     ">
//       💡 If you need urgent support, reply directly to this email.
//     </div>

//     <!-- SIGNATURE -->
//     <div style="margin-top:25px;">
//       <p style="margin:0;font-size:14px;color:#111827;">
//         Best Regards,
//       </p>
//       <p style="margin:5px 0 0;font-weight:bold;color:#111827;">
//         Your Support Team 🚀
//       </p>
//     </div>

//   </div>

//   <!-- FOOTER -->
//   <div style="
//     background:#f3f4f6;
//     padding:14px;
//     text-align:center;
//     font-size:12px;
//     color:#6b7280;
//   ">
//     © ${new Date().getFullYear()} All rights reserved
//   </div>

// </div>
// `
//     });

//     // =========================
//     // RESPONSE
//     // =========================

//     return NextResponse.json({
//       success: true,
//       message: "Message sent successfully. Please check your inbox or spam folder for confirmation.",
//     });
//   } catch (error: unknown) {
//     console.error("EMAIL ERROR:", error);

//     const errMessage =
//       error instanceof Error ? error.message : "Something went wrong";

//     return NextResponse.json(
//       {
//         success: false,
//         message: errMessage,
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";



// =======================
// TYPES
// =======================
type ContactPayload = {
  email: string;
  name: string;
  message: string;
};

// =======================
// POST API ROUTE
// =======================
export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { email, name, message } = body;

    // 1️⃣ Input Validation (Pehle empty check)
    if (!email || !name || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // 2️⃣ Admin Email Check
    const ADMIN_EMAIL = "aftabahmedcbspakistan@gmail.com";
    if (email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      return NextResponse.json(
        {
          success: false,
          message: "⚠️ Please enter your email address. This email is admin email. Kindly use another email to continue."
        },
        { status: 400 }
      );
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { success: false, message: "Email service is not configured properly" },
        { status: 500 }
      );
    }

    console.log({ email, name, message });

    // Dynamic Time Formatter (PKT / Local Time)
    const currentDateTime = new Date();
    const formattedDate = currentDateTime.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Karachi" // Pakistan Standard Time ke liye safe fallback
    });


    // =======================
    // EMAIL TRANSPORTER
    // =======================
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER as string,
        pass: process.env.GMAIL_APP_PASSWORD as string,
      },
    });

    // =========================
    // 1️⃣ EMAIL TO ADMIN (No await - Background process)
    // =========================
    transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: `New Message from ${name}`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08);">
  <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 20px; text-align: center; color: white;">
    <h1 style="margin:0;font-size:20px;">📩 New Contact Message</h1>
    <p style="margin:5px 0 0;font-size:13px;opacity:0.9;">Received on: ${formattedDate}</p>
  </div>
  <div style="padding: 24px;">
    <p style="font-size:14px;color:#374151;margin-bottom:20px;line-height:1.6;">A user has sent you a message through your contact form.</p>
    <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:16px; margin-bottom:18px;">
      <p style="margin:0 0 10px;font-size:14px;color:#111827;"><strong>👤 Name:</strong> ${name}</p>
      <p style="margin:0 0 10px;font-size:14px;color:#111827;"><strong>📧 Email:</strong> ${email}</p>
      <p style="margin:0;font-size:14px;color:#111827;"><strong>🕒 Time:</strong> ${formattedDate}</p>
    </div>
    <div style="background:#ffffff; border-left:4px solid #4f46e5; padding:16px; border-radius:8px; font-size:14px; color:#374151; line-height:1.7; white-space:pre-line;">
      ${message}
    </div>
    <div style="text-align:center;margin-top:25px;">
      <a href="mailto:${email}" style="display:inline-block; padding:10px 18px; background:#4f46e5; color:#ffffff; text-decoration:none; border-radius:8px; font-size:13px; font-weight:500;">Reply to User</a>
    </div>
  </div>
  <div style="background:#f3f4f6; padding:12px; text-align:center; font-size:12px; color:#6b7280;">
    © ${currentDateTime.getFullYear()} Contact Form Notification
  </div>
</div>
`
    }).catch(err => console.error("Admin Email Error:", err)); // Background fail safe

    // =========================
    // 2️⃣ AUTO REPLY USER (No await - Background process)
    // =========================
    transporter.sendMail({
      from: `"Portfolio Team" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We received your message ✔️",
      html: `
<div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 14px; overflow: hidden; box-shadow: 0 12px 30px rgba(0,0,0,0.08);">
  <div style="background: linear-gradient(135deg, #111827, #1f2937); padding: 24px; text-align: center; color: white;">
    <h1 style="margin:0;font-size:20px;letter-spacing:0.5px;">✅ Message Received</h1>
    <p style="margin:6px 0 0;font-size:13px;opacity:0.8;">We’ve successfully received your request</p>
  </div>
  <div style="padding: 26px;">
    <p style="font-size:15px;color:#111827;margin-bottom:14px;">Hi <b>${name}</b>, 👋</p>
    <p style="font-size:14px;color:#374151;line-height:1.7;">
      Thank you for reaching out. We’ve received your message on <b>${formattedDate}</b> and our team will review it shortly.
      You can expect a response within <b>24–48 hours</b>.
    </p>
    <div style="margin-top:18px; background:#f9fafb; border-left:4px solid #2563eb; padding:16px; border-radius:10px; font-size:14px; color:#374151; line-height:1.6; white-space:pre-line;">
      <b style="color:#111827;">Your Message:</b><br/>
      ${message}
    </div>
    <div style="margin-top:20px; padding:14px; background:#ffffff; border:1px solid #e5e7eb; border-radius:10px; font-size:13px; color:#6b7280;">
      💡 If you need urgent support, reply directly to this email.
    </div>
    <div style="margin-top:25px;">
      <p style="margin:0;font-size:14px;color:#111827;">Best Regards,</p>
      <p style="margin:5px 0 0;font-weight:bold;color:#111827;">Your Support Team 🚀</p>
    </div>
  </div>
  <div style="background:#f3f4f6; padding:14px; text-align:center; font-size:12px; color:#6b7280;">
    © ${currentDateTime.getFullYear()} All rights reserved
  </div>
</div>
`
    }).catch(err => console.error("User Email Error:", err)); // Background fail safe

    // =========================
    // IMMEDIATE RESPONSE
    // =========================
    return NextResponse.json({
      success: true,
      message: "Message sent successfully. Please check your inbox or spam folder for confirmation.",
    });

  } catch (error: unknown) {
    console.error("API SYSTEM ERROR:", error);
    const errMessage = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json(
      { success: false, message: errMessage },
      { status: 500 }
    );
  }
}