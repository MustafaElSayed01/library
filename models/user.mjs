// Import necessary modules from Sequelize
import { Sequelize, DataTypes } from 'sequelize';

// Create a new instance of Sequelize with MySQL database
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    database: 'libraryJS',
    username: 'root',
    password: ''
});

// Define the User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Synchronize the User model with the database
(async () => {
    await User.sync({ alter: true });
    console.log('User model synchronized successfully.');
})();

// Export the User model
export default User;
