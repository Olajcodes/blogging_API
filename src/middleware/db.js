const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/BlogAPI';

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    logger.info('MongoDB connection error:', error);
    process.exit(1); // Exit the process if failed to connect to MongoDB
  }
}

module.exports = connectDB;
