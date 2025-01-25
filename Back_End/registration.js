const express = require('express')
const app = express()
app.use(express.json());
const cors = require('cors')
const dbConnect = require('./mongodb');
app.use(cors())
app.post('/register', async (req, res) => {
    try {
      console.log("test==========================",req.body);
    const [db, userCollection] = await dbConnect();

      const body =req.body;
      const validateEmail=req.body.email;
      console.log("validateEmail",validateEmail);
      
      const data1 = await userCollection.find({email :validateEmail}).toArray();
      
if (data1.length>0){
console.log("Found Email",data1);

}
      const data = await userCollection.insertOne(body);
      console.log(data);
      res.send(data);

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

app.listen(2001, () => {
    console.log('Running')
    })

