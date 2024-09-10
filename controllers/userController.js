const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Hitta användaren via e-post
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      // Generera JWT-token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      res.json({ token });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Server error during login", error);
    res.status(500).json({ message: "Server error" });
  }
};
