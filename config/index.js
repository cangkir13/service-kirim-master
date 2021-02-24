const publicRoutes = require('./routes/indexRoute')

const config = {
  migrate: false,
  publicRoutes,
  port: process.env.PORT || '3030',
};

module.exports = config;
