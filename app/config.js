const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV, // your MongoDB connection string
  jwtExpiration: process.env.JWT_EXPIRATION, // expiration time for JWT
  jwtSecret: process.env.JWT_SECRET_KEY, // your secret key
  jwtRefreshTokenSecret: process.env.JWT_SECRET_KEY_REFRESH_TOKEN, // your secret key for refresh token
  jwtRefreshTokenExpiration: process.env.JWT_EXPIRATION_REFRESH_TOKEN, // expiration time for refresh token
  gmail: process.env.GMAIL, // your gmail address
  password: process.env.PASSWORD, // your gmail password
};