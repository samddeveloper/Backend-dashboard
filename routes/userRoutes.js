const express = require("express");
const { loginUser, registerUser } = require("../controllers/userController"); // Importera funktionerna
const router = express.Router();

// Definiera routes
router.post("/login", loginUser); // Route för inloggning
// router.post("/register", registerUser); // Route för registrering

module.exports = router;
