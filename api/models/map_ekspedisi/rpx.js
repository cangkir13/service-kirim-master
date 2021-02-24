const Sequelize = require('sequelize');
const sequelize = require('../../../config/database');

const tbl = 'master_kurir_rpx';

const master_kurir_rpx = sequelize.define('master_kurir_rpx', {
  
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  kodepos: {
    type: Sequelize.INTEGER,
  },
  kelurahan: {
    type: Sequelize.STRING,
  },
  kecamatan: {
    type: Sequelize.STRING,
  },
  kabupaten: {
    type: Sequelize.STRING,
  },
  provinsi: {
    type: Sequelize.STRING,
  },
  is_cod: {
    type: Sequelize.BOOLEAN,
  },
}, {  tbl, timestamps:false, freezeTableName:true });


module.exports = master_kurir_rpx;