const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.MIX_DATABASE_URL);

const Phones = sequelize.define('phone', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: true,
  },
  phone1: {type: Sequelize.STRING, allowNull: true,},
  phone2: {type: Sequelize.STRING, allowNull: true,},
  phone3: {type: Sequelize.STRING, allowNull: true,},
});

module.exports = Phones;
