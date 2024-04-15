// imports
const express = require('express');
const cors = require('cors');
const gamesController = require('./controllers/gamesController');

const port = process.env.PORT || 4000;
const app = express();

// middleware
// Adds CORS middleware to our app
// Allow our Express server to accept requests from our React Application.
app.use(cors());

// TODO: Add json parsing to get the form data
// Allows us to access the form data and add it to
// req.body
app.use(express.json());

// API routes
app.use('/api/games', gamesController);

// listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
