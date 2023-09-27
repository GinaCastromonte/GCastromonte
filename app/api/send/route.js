// import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const  body  = await req.json();
  
  const { email, subject, message } = body;
  
  try {
    const data = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: "gcastromonte@me.com",
      subject: subject,
      react: (
        <>
        <h3>{email} contacted you</h3>
          <p>{message}</p>
        </>
      ),
    });

      if (data.success) {
      return NextResponse.json({ success: true, message: "Email sent successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Failed to send email" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to send email" });
  }
}




