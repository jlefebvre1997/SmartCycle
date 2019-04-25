module.exports = function (io) {
  var express = require('express');
  var router = express.Router();
  const Coordinates = require('../entities/Coordinates');

  router.get('/map/:id', function (req, res, next) {
    Coordinates.findOne({
      where: {
        userId: req.params.id
      }
    }).then(function (coordinate) {
      let ret = null;

      if (coordinate) {
        ret = coordinate.dataValues;
      }

      return res.render('map', { coordinate: ret })
    });
  });

  io.on('connection', function (socket) {
    socket.on('connected', function (id) {
      socket.join('map-' + id);
    })
  });

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
          io.to('map-' + coordinate.userId).emit('coordinate received', coordinate);

          res.status(200).send("OK");
        })
      } else {
        Coordinates.create({
          userId: id,
          latitude: lat,
          longitude: long
        }).then(function (coordinate) {
          io.to('map-' + coordinate.userId).emit('coordinate received', coordinate);

          res.status(200).send("OK");
        })
      }
    })
  });

  return router;
};
