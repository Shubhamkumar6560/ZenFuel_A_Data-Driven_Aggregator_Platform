const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const router = express.Router();
const dbConnect = require('./mongodb'); 
const axios = require("axios");

require("dotenv").config();

const JWT_TOKEN = process.env.JWT_TOKEN;
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN;

const generateToken = (user) =>
{
  const accessToken = jwt.sign(
    {
      id:user._id,
      email:user.email,
    },
    JWT_TOKEN,
    {expiresIn:"15m"}
  )

const refreshToken = jwt.sign(
  {
    id: user._id,
    email: user.email,
  },
  JWT_REFRESH_TOKEN,
  {expiresIn:"7d"}
);

return {accessToken ,refreshToken}
};

router.use(cookieParser());

// Securing Routes =================================

const authenticate =(req , res ,next) =>
{
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token,JWT_TOKEN,(err,decode)=>
  {
    if(err) return res.status(403).json({ message: "Invalid or expired token" });
    req.user = decode;
    next();
  });
};


// ================== REGISTER API ==================

router.post('/register', async (req, res) => {
  try {
    console.log("Register request body:", req.body);
    const [db, userCollection] = await dbConnect();

    const { email, password } = req.body;

    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const result = await userCollection.insertOne({ email, password:hashedPassword });
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
      return res.status(400).json({ message: "User Not Found" });
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect Password" });
    }

     const { accessToken, refreshToken } = generateToken(user);
     res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });



    console.log("Email and Password are successfully validated");

    res.status(200).json({ message: "Successfully Logged In" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


// ==============GOOGLE LOGIN API ====================

router.post('/google_login', async (req, res) => {
  try {
    const { token } = req.body;
    console.log("Incoming token (login):", token);

    const [db, userCollection] = await dbConnect();

    // Verify token with Google
    const response = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    const { email } = response.data;

    // Check if user exists
    const user = await userCollection.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found, please register first"
      });
    }

    const { accessToken, refreshToken } = generateToken(user);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    res.status(200).json({
      message: `Welcome back, ${user.name}!`,
      user: {
        email: user.email,
        name: user.name,
        picture: user.picture,
        provider: user.authProvider
      }
    });

  } catch (err) {
    console.error("Google login error:", err.response?.data || err.message);
    res.status(500).json({ error: "Google login failed" });
  }
});



// ==============GOOGLE REGISTER API ====================

router.post('/google_register', async (req, res) => {
  try {
    const { token } = req.body;
    console.log("Incoming token (register):", token);

    const [db, userCollection] = await dbConnect();

    // Verify token with Google
    const response = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    const { sub: googleId, name, email, picture } = response.data;

    let user = await userCollection.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already exists, please login instead"
      });
    }

    const newUser = {
      name,
      email,
      password: null,
      picture,
      googleId,
      authProvider: "google"
    };

    const insertResult = await userCollection.insertOne(newUser);
    user = await userCollection.findOne({ _id: insertResult.insertedId });


    const { accessToken, refreshToken } = generateToken(user);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    res.status(201).json({
      message: `${user.name} successfully registered`,
      user: {
        email: user.email,
        name: user.name,
        picture: user.picture,
        provider: user.authProvider
      }
    });

  } catch (err) {
    console.error("Google register error:", err.response?.data || err.message);
    res.status(500).json({ error: "Google registration failed" });
  }
});


module.exports = router;
