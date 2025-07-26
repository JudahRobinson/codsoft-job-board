const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobRoutes = require("./routes/jobs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;

// ✅ CORS Setup - Allow frontend on localhost:3000
const corsOptions = {
  origin: "http://localhost:3000", // frontend dev origin
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
};

app.use(cors(corsOptions)); // Must be before routes
app.use(express.json());    // To parse JSON bodies

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("API is working 🎉");
});

// ✅ API Routes
app.use("/api/jobs", jobRoutes);

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB error:", err));
