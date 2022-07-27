const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db.js');
const PORT = process.env.PORT || 8000;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api/adopt', require('./routes/adoptRoutes'));
app.use('/api/report', require('./routes/reportRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
