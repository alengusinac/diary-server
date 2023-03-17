var express = require('express');
var router = express.Router();
var DiaryPost = require('../models/DiaryPost');

/* GET users listing. */
router.get('/', async (req, res) => {
  const diaryPosts = await DiaryPost.find().sort({ datePosted: -1 });
  res.setMaxListeners(200).json(diaryPosts);
});

router.post('/add', async (req, res) => {
  const diaryPost = await DiaryPost.create(req.body);
  res.status(201).json(diaryPost);
});

module.exports = router;
