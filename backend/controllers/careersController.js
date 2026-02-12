import {saveToExcel} from '../utils/excel.js';

export const submitCareerApplication = (req, res) => {
  console.log("📩 CAREER HIT");
  console.log(req.body);
  const { name, email, resumeLink, position, coverLetter } = req.body;

  if (!name || !email || !resumeLink) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  console.log("💼 New Career Application:", {
    name,
    email,
    position,
    resumeLink,
    coverLetter,
  });

  try {
    saveToExcel('career_applications.xlsx', req.body);

    return res.status(200).json({
      success: true,
      message: 'Career application saved',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
};
