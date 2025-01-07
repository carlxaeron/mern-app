const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDb } = require('../db');

router.post('/posts', async (req, res) => {
  const db = getDb();
  const { title, content } = req.body;
  const result = await db.collection('posts').insertOne({ title, content });
  res.status(201).json(result.ops[0]);
});

router.get('/posts', async (req, res) => {
  const db = getDb();
  const posts = await db.collection('posts').find().toArray();
  res.status(200).json(posts);
});

router.put('/posts/:id', async (req, res) => {
  const db = getDb();
  const { id } = req.params;
  const { title, content } = req.body;
  const result = await db.collection('posts').updateOne(
    { _id: ObjectId(id) },
    { $set: { title, content } }
  );
  res.status(200).json(result);
});

router.delete('/posts/:id', async (req, res) => {
  const db = getDb();
  const { id } = req.params;
  const result = await db.collection('posts').deleteOne({ _id: ObjectId(id) });
  res.status(200).json(result);
});

module.exports = router;
