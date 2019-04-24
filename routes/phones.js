var express = require('express');
var router = express.Router();
const Phones = require('../entities/Phones');

router.get('/id', function (req, res, next) {
  let phones = Phones.build();

  phones.save().then(function(phone){
    res.set('Content-Type', 'text/html');
    res.send(new Buffer(phone.userId.toString()))
  });
});

router.get('/addPhones/:id', function (req, res, next) {
  Phones.findByPk(req.params.id)
    .then(function (phone) {
        phone.phone1 = req.query.phone1;
        phone.phone2 = req.query.phone2;
        phone.phone3 = req.query.phone3;

        phone.save().then(function (phone) {
          return res.status(200).send("OK");
        })
    })
});

module.exports = router;
