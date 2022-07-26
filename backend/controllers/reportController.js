const Report = require('../models/reportModel');

//@desc file a report
//@route POST /api/report
//@access Public
const postReport = async (req, res) => {
  const report = req.body;
  try {
    const newReport = await Report.create(report);
    res.status(201).json(newReport);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  postReport,
};
