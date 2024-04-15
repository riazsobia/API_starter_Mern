const router = require('express').Router();
const db = require('../models');

// BASE ROUTE - /api/games

// index route - return data for all the games
// actual route - GET /api/games
router.get('/', (req, res) => {
  db.Game.find({}, (err, foundGames) => {
    if (err) return console.log(err);
    
    res.json(foundGames);
  });
});


// actual route - GET /api/games/:id
router.get('/:id', (req, res) => {
  db.Game.findById(req.params.id, (err, foundGame) => {
    if (err) return console.log(err);
    
    res.json(foundGame);
  });
});


// actual route - POST /api/games
router.post('/', (req, res) => {
  db.Game.create(req.body, (err, savedGame) => {
    if (err) return console.log(err);
    
    res.json(savedGame);
  });
});

// Update Route - Allow us to update a game
// actual route - PUT /api/games/:id
router.put('/:id', (req, res) => {
  db.Game.findByIdAndUpdate(
    req.params.id, // finds the Game with id passed in from URL
    req.body, // passes in data to update a game from the req.body
    {new: true}, // We want to updated game returned in the callback
    (err, updatedGame) => { // function called after update completes
      if (err) return console.log(err);
      
      res.json(updatedGame);
    });
});


// actual route - DELETE /api/games/:id
router.delete('/:id', (req, res) => {
  db.Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
    if (err) return console.log(err);

    res.json({ message: 'Successfully deleted a game' });
  });
});


module.exports = router;
