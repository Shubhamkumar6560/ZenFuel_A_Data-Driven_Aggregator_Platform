const express = require('express');
const router = express.Router();
const dbConnect = require('./mongodb'); 

// ================== REGISTER API ==================
router.post('/register', async (req, res) => {
  try {
    console.log("Register request body:", req.body);
    const [db, userCollection] = await dbConnect();

    const { email, password } = req.body;

    // Check if email already exists
    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const result = await userCollection.insertOne({ email, password });
    console.log("User registered:", result);

    res.status(200).json({ message: "User registered successfully", data: result });
      // console.log("User registered:",res.status);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ================== LOGIN API ==================
router.post('/login', async (req, res) => {
  try {
    console.log("Login request body:", req.body);
    const { email, password } = req.body;
    const [db, userCollection] = await dbConnect();

    const user = await userCollection.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect Password" });
    }

    console.log("Email and Password are successfully validated");

    res.status(200).json({ message: "Successfully Logged In" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
