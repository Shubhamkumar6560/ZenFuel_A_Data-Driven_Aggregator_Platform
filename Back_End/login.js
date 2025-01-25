const express = require('express');
const app = express();
const cors = require ('cors');
app.use(cors());
app.use(express.json()); 
const dbConnect = require('./mongodb');
const e = require('express');  

app.post('/login', async (req, res) => {
    try {
      console.log("=========",req.body);
      let email = req.body.email
      let password = req.body.password
      const [db, userCollection] = await dbConnect();

      const emailData = await userCollection.find({email:email}).toArray();

  if (emailData.length > 0)
     {
      const passData = await userCollection.find({password:password}).toArray();
      if (passData.length > 0)
      {
        console.log("Email and Password are successfully validated");
        res.status(200).json({message:"Succesfuly Logged In "})
      }
      else{
        res.status(401).json({message:"Check Your Password"});
      }
   }
   else
   {
      console.log("Invalid Credentials");
      res.status(404).json({message:"Invalid Credentials"});
    } 
  }
    catch (err) 
    {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

app.listen(2001, () => {
    console.log('Running')
    })