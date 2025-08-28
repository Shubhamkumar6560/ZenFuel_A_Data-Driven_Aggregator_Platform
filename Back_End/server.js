const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./authentication.js');

app.use('/auth',authRoutes);

app.listen(2001,()=>{
    console.log('Server running on port 2001');
    
});