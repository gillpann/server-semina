const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    urlDb: process.env.URL_MONGODB_DEV, // your MongoDB connection string
    jwtExpiration: process.env.JWT_EXPIRATION, // expiration time for JWT
    jwtSecret: process.env.JWT_SECRET, // your secret key
    gmail: process.env.GMAIL, // your gmail address
    password: process.env.PASSWORD, // your gmail password
};