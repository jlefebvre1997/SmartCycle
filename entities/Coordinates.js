const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.MIX_DATABASE_URL);

const Coordinates = sequelize.define('coordinate', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  latitude: Sequelize.FLOAT,
  longitude: Sequelize.FLOAT,
  userId: {
    type: Sequelize.INTEGER,
    unique: true
  },
}, { sequelize, modelName: 'coordinates'});

module.exports = Coordinates;
