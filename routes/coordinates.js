var express = require('express');
var router = express.Router();
const Coordinates = require('../entities/Coordinates');

router.get('/add', function (req, res, next) {
  let id = req.query.id;
  let lat = req.query.latitude;
  let long = req.query.longitude;

  Coordinates.findOne({
    where: {
      userId: id
    }
  }).then(function (coordinate) {
    if (coordinate) {
      coordinate.update({
        latitude: lat,
        longitude: long
      }).then(function (coordinate) {
        return res.status(200).send("OK");
      })
    } else {
      Coordinates.create({
        userId: id,
        latitude: lat,
        longitude: long
      }).then(function (coordinate) {
        return res.status(200).send("OK");
      })
    }
  });
});

module.exports = router;
