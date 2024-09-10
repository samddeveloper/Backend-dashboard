const bcrypt = require("bcryptjs");

const password = "password123"; // Klartextlösenordet
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

console.log(hashedPassword); // Skriv ut den hashade versionen av lösenordet
