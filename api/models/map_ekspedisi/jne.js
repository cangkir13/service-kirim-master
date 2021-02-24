const Sequelize = require('sequelize');
const sequelize = require('../../../config/database');

const tbl = 'master_kurir_jne';

const master_kurir_jne = sequelize.define('master_kurir_jne', {
  
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  origin_name: {
    type: Sequelize.STRING,
  },
  destination_name: {
    type: Sequelize.STRING,
  },
  tlc: {
    type: Sequelize.STRING,
  },
  provinsi: {
    type: Sequelize.STRING,
  },
  tipe: {
    type: Sequelize.STRING,
  },
  kabupaten: {
    type: Sequelize.STRING,
  },
  kecamatan: {
    type: Sequelize.STRING,
  },
  kelurahan: {
    type: Sequelize.STRING,
  },
  kodepos: {
    type: Sequelize.INTEGER,
  },
  
  
}, {  tbl, timestamps:false, freezeTableName:true });


module.exports = master_kurir_jne;