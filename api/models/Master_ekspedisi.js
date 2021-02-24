const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tbl = 'master_ekspedisi';

const Master_ekspedisi = sequelize.define('master_ekspedisi', {
  
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  label: {
    type: Sequelize.STRING,
  },
  image_url: {
    type: Sequelize.STRING,
  },
  is_cod: {
    type: Sequelize.BOOLEAN,
    defaultValue:false
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue:true
  },
  create_at:{
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  update_at:{
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {  tbl, timestamps:false, freezeTableName:true });

// Master_ekspedisi.hasMany(master_warehouse_ekspedisi, {foreignKey:'id_ekspdisi',  as: 'detail_ekspedisi', constraints: true })

module.exports = Master_ekspedisi;