const express = require('express');
const router = express.Router();
const connect = require('../db');

// Get all users
router.get('/', async (req, res) => {
  try{
  const db = await connect();
  const users = await db.collection('users').find().toArray();
  res.json(users);
  }catch(err){
    console.log(err)
  }
});

// Get a single user by ID
router.get('/:id', async (req, res) => {
  const db = await connect();
  const user = await db.collection('users').findOne({ _id: req.params.id });
  res.json(user);
});

// Create a new user
router.post('/', async (req, res) => {
  try{
  const db = await connect();
  const user = req.body;
  await db.collection('users').createIndex({ "email": 1 },{ unique: true })
  await db.collection('users').createIndex({ "username":1 },{ unique: true })
  await db.collection('users').insertOne(user);
  res.status(200).json("User created successfully");
  }catch(err){
    res.status(400)
  }
});

// Update a user
router.put('/:id', async (req, res) => {
  const db = await connect();
  const user = req.body;
  delete user._id; 
  const result = await db.collection('users').updateOne({ _id: req.params.id }, { $set: user });
  res.json(result);
});

// Delete a user
router.delete('/:id', async (req, res) => {
  const db = await connect();
  const result = await db.collection('users').deleteOne({ _id: req.params.id });
  res.json(result);
});

module.exports = router;
