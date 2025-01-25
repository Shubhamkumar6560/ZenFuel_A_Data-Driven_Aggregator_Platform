
const { MongoClient } = require('mongodb');
async function dbConnect() {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const db = client.db('ZenFuel');
    const userCollection = await db.collection('Registration');
    
    console.log("Mongo Connnected");

    return [db, userCollection];

  } catch (error) {
    console.error('Error while connecting to mongodb', error);
    throw error;
  }
}
module.exports = dbConnect;