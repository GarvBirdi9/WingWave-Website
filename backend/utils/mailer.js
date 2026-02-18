import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendNotification = async (subject, text) => {
  try {
    await resend.emails.send({
      from: "Wingwave Website <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      subject: subject,
      text: text,
    });

    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    throw error;
  }
};
