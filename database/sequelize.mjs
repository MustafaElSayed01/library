import { Sequelize, DataTypes } from 'sequelize';

// Create a new instance of Sequelize with MySQL database
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'libraryJS',
  username: 'root',
  password: ''
});

// Define your models and perform database operations as needed

// Example model definition
class User extends Sequelize.Model {}
User.init({
  // attributes
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// Test connection and synchronize models (if needed)
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Synchronize all defined models to the database
    await sequelize.sync();
    console.log('Models synchronized successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
