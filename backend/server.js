const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db.js');
const PORT = process.env.PORT || 8000;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/adopt', require('./routes/adoptRoutes'));
app.use('/api/report', require('./routes/reportRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
