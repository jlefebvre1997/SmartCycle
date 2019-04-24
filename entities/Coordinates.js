const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.MIX_DATABASE_URL);

class Coordinates extends Sequelize.Model {
  constructor(userId, lat, long) {
    super();

    this.latitude = lat;
    this.longitude = long;
    this.userId = userId;
  }
}

Coordinates.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  latitude: Sequelize.FLOAT,
  longitude: Sequelize.FLOAT,
  userId: Sequelize.STRING,
}, { sequelize, modelName: 'coordinates'});

module.exports = Coordinates;
