import {saveToExcel} from '../utils/excel.js';

export const submitContactForm = (req, res) => {
  console.log("📩 CONTACT HIT");
  console.log(req.body);
  const { name, email, company, subject, message, inquiryType } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  // For now: just log (later you can add DB / email)
  console.log("📩 New Contact Message:", {
    name,
    email,
    company,
    subject,
    inquiryType,
    message,
  });

  try {
    saveToExcel('contact_responses.xlsx', req.body);

    return res.status(200).json({
      success: true,
      message: 'Contact form saved',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
};
