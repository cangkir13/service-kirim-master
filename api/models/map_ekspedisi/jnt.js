const Sequelize = require('sequelize');
const sequelize = require('../../../config/database');

const tbl = 'master_kurir_jnt';

const master_kurir_jnt = sequelize.define('master_kurir_jnt', {
  
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
  tipe: {
    type: Sequelize.STRING,
  },
  kabupaten: {
    type: Sequelize.STRING,
  },
  provinsi: {
    type: Sequelize.STRING,
  },
  origin_name: {
    type: Sequelize.STRING,
  },
  destination_name: {
    type: Sequelize.STRING,
  },
  is_cod: {
    type: Sequelize.BOOLEAN,
  },
}, {  tbl, timestamps:false, freezeTableName:true });


module.exports = master_kurir_jnt;