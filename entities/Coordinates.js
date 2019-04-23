const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://user:password@mysql.smartcycle_default:3306/database');

class Coordinates extends Sequelize.Model {
  constructor(id, lat, long) {
    super();

    this.id = id;
    this.lat = lat;
    this.long = long;
  }

  saveItself() {
    sequelize.sync().then(function () {
      Coordinates.create({
        id: this.id,
        lat: this.lat,
        long: this.long,
      })
    })
  }
}

Coordinates.init({
  id: Sequelize.UUID,
  lat: Sequelize.FLOAT,
  long: Sequelize.FLOAT,
}, { sequelize, modelName: 'coordinates'});
