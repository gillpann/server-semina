const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    urlDb: process.env.URL_MONGODB_DEV, 
    jwtExpiration: '24h', // expiration time for JWT
    jwtSecret: 'jwtSecret', // secret key for JWT
};