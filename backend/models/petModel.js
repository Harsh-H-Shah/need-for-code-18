const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  imgUrl: String,
  gender: {
    type: String,
    required: true,
  },
  description: String,
  vaccinated: String,
  neutered: String,
});

module.exports = mongoose.model('Pet', petSchema);
