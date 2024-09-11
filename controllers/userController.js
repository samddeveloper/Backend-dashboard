const loginUser = async (req, res) => {
  // Ignorera email och lösenord och returnera alltid framgång
  const token = "fake-jwt-token"; // En generisk token

  return res.json({
    token, // Returnera en token som alltid fungerar
    message: "Login successful",
  });
};

module.exports = { loginUser };
