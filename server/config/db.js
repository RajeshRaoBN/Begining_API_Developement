// config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
    )

    console.log('MongoDB is Connected...')
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;