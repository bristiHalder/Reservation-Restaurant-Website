const mongoose = require('mongoose');

// MongoDB Atlas connection string
const connectionString = 'mongodb+srv://22cd3009:foAVBUWO1zgtjJxV@reserve.gzrcjl0.mongodb.net/';

// Connect to MongoDB Atlas
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Log error if failed to connect
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Log success message if connected
db.once('open', function() {
  console.log('Connected to MongoDB Atlas');
});

module.exports = db;