
const { MongoClient } = require('mongodb');
require("dotenv").config();

async function dbConnect() {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    const db = client.db('ZenFuel');
    const userCollection = await db.collection('Authentication');

    return [db, userCollection];

  } catch (error) {
    console.error('Error while connecting to mongodb', error);
    throw error;
  }
}
module.exports = dbConnect;