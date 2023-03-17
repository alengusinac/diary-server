const mongoose = require('mongoose');

const DiaryPostSchema = mongoose.Schema({
  author: String,
  body: String,
  datePosted: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model('DiaryPost', DiaryPostSchema);
