const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobRoutes = require("./routes/jobs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;

// ✅ CORS Setup
const corsOptions = {
  origin: [
    "https://codsoft-job-board.netlify.app", // include this!
    "http://localhost:3000",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON bodies

// ✅ Test route
app.get("/", (req, res) => {
  res.send("API is working 🎉");
});

// ✅ Job routes
app.use("/api/jobs", jobRoutes);

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB error:", err));
