const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tbl = 'master_log_migrate';

const Master_log_migrate = sequelize.define('master_log_migrate', {
  
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  create_at:{
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {  tbl, timestamps:false, freezeTableName:true });


module.exports = Master_log_migrate;