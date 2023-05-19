export default {
    development: {
        username: process.env.DB_DEV_USERNAME,
        password: process.env.DB_DEV_PASSWORD,
        database: process.env.DB_DEV_NAME,
        host: process.env.DB_DEV_HOST,
        dialect: 'mysql'
    },
    test: {

    },
    production: {

    }
};