import Sequelize from "sequelize";

const { HOST, USERNAME, DATABASE, PASSWORD } = process.env;

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    port: 3306,
    dialect: 'mysql'
});

// test connection
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
};

export default sequelize;