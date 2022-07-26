const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contactno: {
    type: String,
    required: true,
  },
  emailid: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
  },
  abusername: {
    type: String,
  },
  contactabuser: String,
  pincode: String,
  abusedetail: String,
  imgUrl: String,
});

module.exports = mongoose.model('report', reportSchema);
