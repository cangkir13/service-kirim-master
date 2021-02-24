const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Master_ekspedisi = require('./Master_ekspedisi')

const tbl = 'master_warehouse_ekspedisi';

const Master_warehouse_ekspedisi = sequelize.define('master_warehouse_ekspedisi', {
  
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_wh: {
    type: Sequelize.STRING,
  },
  id_ekspedisi:{
    type: Sequelize.INTEGER,
  },
  origin_code: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue:true
  },
  is_cod: {
    type: Sequelize.BOOLEAN,
    defaultValue:false
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


Master_warehouse_ekspedisi.belongsTo(Master_ekspedisi, {foreignKey:'id_ekspedisi',  as: 'detail_ekspedisi', constraints: true });


module.exports = Master_warehouse_ekspedisi;