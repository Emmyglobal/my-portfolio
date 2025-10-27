// app/api/contact/route.js
export const runtime = "nodejs";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body || {};

    // Basic input validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields: name, email, and message are required." }),
        { status: 400 }
      );
    }

    // Ensure environment variables are set
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const toAddr = process.env.EMAIL_TO || "nwaforugochukwu92@gmail.com";

    if (!user || !pass) {
      console.error("Email credentials not configured. EMAIL_USER or EMAIL_PASS is missing.");
      return new Response(
        JSON.stringify({ success: false, error: "Server email configuration missing." }),
        { status: 500 }
      );
    }

    // Configure your email transport (use service or SMTP settings via env)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    // Verify transporter connection (helps surface auth/connection errors early)
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("Nodemailer verify failed:", verifyError);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to connect to email server. Check credentials." }),
        { status: 500 }
      );
    }

    const mailOptions = {
      // Use the configured sender as the From address to avoid provider rejection
      from: user,
      to: toAddr,
      replyTo: email,
      subject: subject || "New Message from Contact Form",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || "N/A"}</p><hr/><p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    // Log full error server-side for debugging (do not leak sensitive details to clients)
    console.error("Error sending mail:", error);
    const message = error && error.message ? error.message : String(error);
    return new Response(JSON.stringify({ success: false, error: message }), { status: 500 });
  }
}