const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to enable CORS
app.use(cors());

// Create a Mongoose schema for the user data
const reservationSchema = new mongoose.Schema({
    day: {
      type: String,
      required: true
    },
    hour: {
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    numberOfPersons: {
      type: Number,
      required: true,
      min: 1
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  
// Create a Mongoose model using the schema
const Reservation = mongoose.model('Reservation', reservationSchema);

app.post('/book-table', async (req, res) => {
    try {
      // Extract day, hour, fullName, phoneNumber, and numberOfPersons from the request body
      const { day, hour, fullName, phoneNumber, numberOfPersons } = req.body;
  
      // Create a new reservation instance
      const newReservation = new Reservation({
        day,
        hour,
        fullName,
        phoneNumber,
        numberOfPersons
      });
  
      // Save the new reservation to the database
      await newReservation.save();
  
      // Respond with a success message and the reservation data
      res.status(201).json({ message: 'Table booked successfully.', reservation: newReservation });
    } catch (error) {
      // If there's an error, send a 500 response with the error message
      res.status(500).json({ message: 'Failed to book table.', error: error.message });
    }
  });
  

  // Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });