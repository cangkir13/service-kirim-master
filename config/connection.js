const development = {
  database: 'db_kirim_master_tes',
  username: 'root',
  password: 'klink*9',
  host: 'localhost',
  dialect: 'mysql' ,
};


const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect:  'mysql' ,
};

module.exports = {
  development,
  production,
};
