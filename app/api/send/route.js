// import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL

export async function POST(req,resend) {
    const{body} = req
    const{email,subject,message} = body
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["gcastromonte@gmail.com",email],
      subject: subject,
      react: <><p>{message}</p></>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
