const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Importera databasanslutningen
const metricsRoutes = require("./routes/metricsRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

// Anslut till databasen
connectDB(); // Anropa anslutningen här

// Middleware för att tillåta CORS från din frontend på Vercel
app.use(
  cors({
    origin: "https://dashboard-bzzkcvzx1-sammies-projects-4f71ae26.vercel.app/", // Ersätt med din Vercel frontend URL
    credentials: true, // Om du skickar cookies eller autentisering, behåll detta
  })
);

app.use(express.json());

// Routes
app.use("/api", metricsRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
