// pages/api/sendEmail.ts

import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { NextRequest, NextResponse } from "next/server";

dotenv.config();

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, email, message } = await req.json();
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER!,
        pass: process.env.GMAIL_PASS!,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER!,
      to: process.env.GMAIL_USER!,
      subject: "New message from your portfolio website",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return Response.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
