import nodemailer from "nodemailer";

export async function sendEmail(subject, htmlContent) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Wingwave Website" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject,
    html: htmlContent,
  });
}
