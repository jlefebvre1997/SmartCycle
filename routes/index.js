var express = require('express');
var router = express.Router();
const Coordinates = require('../entities/Coordinates');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: process.env.MIX_DATABASE_URL });

  res.err(process.env);
});

router.get('/add', function (req, res, next) {
  let id = req.query.id;
  let lat = req.query.latitude;
  let long = req.query.longitude;

  let coord = new Coordinates(id, lat, long);
  coord.save();

  res.send("coucou");
});

module.exports = router;
