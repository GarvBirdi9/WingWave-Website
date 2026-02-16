import { sendNotification } from "../utils/mailer.js";

export const submitCareerApplication = async (req, res) => {
  console.log("📩 CAREER HIT");
  console.log(req.body);

  const { name, email, resumeLink, position, coverLetter } = req.body;

  // Basic validation
  if (!name || !email || !position) {
    return res.status(400).json({
      success: false,
      error: "Required fields missing",
    });
  }

  try {
    console.log("💼 New Career Application:", {
      name,
      email,
      position,
      resumeLink,
      coverLetter,
    });

    const textContent = `
WINGWAVE TECHNOLOGIES
--------------------------------------------------

New Career Application Received

Position Applied : ${position}

--------------------------------------------------
APPLICANT DETAILS
--------------------------------------------------

Name             : ${name}
Email            : ${email}
Resume Link      : ${resumeLink || "Not Provided"}

--------------------------------------------------
COVER LETTER
--------------------------------------------------

${coverLetter || "Not Provided"}

--------------------------------------------------

Submitted At     : ${new Date().toLocaleString()}

This is an automated notification from the Wingwave Technologies website.
`;

    await sendNotification(
      `[Wingwave] Career Application - ${position}`,
      textContent
    );

    return res.status(200).json({
      success: true,
      message: "Career application submitted successfully",
    });

  } catch (error) {
    console.error("❌ Error sending career email:", error);

    return res.status(500).json({
      success: false,
      error: "Something went wrong. Please try again later.",
    });
  }
};
