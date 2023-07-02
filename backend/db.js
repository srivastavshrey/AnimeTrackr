const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config()

const url = process.env.connetionURL||'';
const dbName = 'userCluster';

async function connect() {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    console.log('Connected to MongoDB');
    return db;
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
}

module.exports = connect;
