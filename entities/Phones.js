const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

class Phones extends Sequelize.Model {
  constructor(userId, phone1, phone2, phone3) {
    super();

    this.userId = userId;
    this.phone1 = phone1;
    this.phone2 = phone2;
    this.phone3 = phone3;
  }
}

Phones.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: Sequelize.INTEGER,
    unique: true
  },
  phone1: Sequelize.STRING,
  phone2: Sequelize.STRING,
  phone3: Sequelize.STRING
}, sequelize, { modelName: 'phones' });
