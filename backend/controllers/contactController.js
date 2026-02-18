import { sendNotification } from "../utils/mailer.js";

export const submitContactForm = async (req, res) => {
  console.log("📩 CONTACT HIT");
  console.log(req.body);

  const { name, email, company, subject, message, inquiryType } = req.body;

  // Basic validation
  if (!name || !email || !message || !inquiryType) {
    return res.status(400).json({
      success: false,
      error: "Required fields missing",
    });
  }

  try {
    console.log("📩 New Contact Message:", {
      name,
      email,
      company,
      subject,
      inquiryType,
      message,
    });

    // Plain text professional email content
    const textContent = `
WINGWAVE TECHNOLOGIES
--------------------------------------------------

New Contact Inquiry Received

Inquiry Type : ${inquiryType}
Subject      : ${subject || "N/A"}

--------------------------------------------------
CONTACT DETAILS
--------------------------------------------------

Name         : ${name}
Email        : ${email}
Company      : ${company || "N/A"}

--------------------------------------------------
MESSAGE
--------------------------------------------------

${message}

--------------------------------------------------

Submitted At     : ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}

This is an automated notification from the Wingwave Technologies website.
`;

    await sendNotification(
      `[Wingwave] Contact Inquiry - ${inquiryType}`,
      textContent,
    );

    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("❌ Error sending contact email:", error);

    return res.status(500).json({
      success: false,
      error: "Something went wrong. Please try again later.",
    });
  }
};
