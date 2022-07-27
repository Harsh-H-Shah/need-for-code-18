const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emailid: {
    type: String,
    required: true,
    unique: true,
  },
  contactno: String,
  address: String,
  petofinterest: String,
  percentage: String,
  fence: String,
});

module.exports = mongoose.model('person', personSchema);
