import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import infoRoutes from "./routes/info.js";
import contactRoutes from "./routes/contact.js";
import careerRoutes from "./routes/careers.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

// Routes
app.use("/api", infoRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/careers", careerRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Wingwave backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
