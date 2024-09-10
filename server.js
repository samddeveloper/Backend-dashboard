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

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", metricsRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
