const express = require("express");
const router = express.Router();

// Route för att hämta metrics för en specifik användare baserat på ID
router.get("/metrics/:id", (req, res) => {
  const userId = req.params.id;
  // Här kan du hämta data från din databas baserat på userId
  // Exempel: Hämta från en MongoDB-databas
  // const metrics = await MetricsModel.find({ userId });

  // Temporär dummy-data
  res.json([{ metric: "Example Metric", value: 42 }]);
});

module.exports = router;
