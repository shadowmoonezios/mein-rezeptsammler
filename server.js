const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Enable CORS for all requests
app.use(cors());
// Parse incoming JSON requests
app.use(express.json());

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/rezeptsammler';
// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Backend läuft!');
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 5000;
// Start the server and log the listening port
app.listen(PORT, () => {
  console.log(`Server läuft auf Port: ${PORT}`);
});