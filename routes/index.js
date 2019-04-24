var express = require('express');
var router = express.Router();
const Coordinates = require('../entities/Coordinates');
const Phones = require('../entities/Phones');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Ma grosse bite en plâtre" });
});

router.get('/id', function (req, res, next) {
  let phones = Phones.build();

  phones.save().then(function(phone){
    res.json({id: phone.id})
  });
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
