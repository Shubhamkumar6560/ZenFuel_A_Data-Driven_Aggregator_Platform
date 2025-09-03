require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 2001;

app.use(cors());
app.use(express.json());

const authRoutes = require('./authentication.js');
app.use('/auth',authRoutes);

app.listen(PORT,()=>{
    console.log('Server running on port 2001');
    
});