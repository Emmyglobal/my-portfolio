// app/api/contact/route.js
export const runtime = "nodejs";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Configure your email transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail app password
      },
    });

    const mailOptions = {
      from: email,
      to: "nwaforugochukwu21@gmail.com",
      subject: subject || "New Message from Contact Form",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending mail:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}