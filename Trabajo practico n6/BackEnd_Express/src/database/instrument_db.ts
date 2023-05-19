// const mongoose = require("mongoose") ;
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
// import { Instrument } from "../types";

dotenv.config()

async function connect() {
  const MONGODB_URI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;
  const client = new MongoClient(MONGODB_URI)
  try {
    const database = client.db('InstrumentsDB')
    const intruments = database.collection('instruments')
    console.log('>>> Connect to collection Instrument')

    return (intruments.find().toArray())


  } catch (err) {
    if (!err) {
      console.log('MongoDB Connection Succeeded.')
    } else {
      console.log('Error in DB connection: ', err)
    }
  } finally {
    // await client.close();
  }
}

export default connect
