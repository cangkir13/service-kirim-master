const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tbl = 'master_location';

const Master_location = sequelize.define('master_location', {
  
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  latitude:{
    type: Sequelize.DOUBLE
  },
  longitude:{
    type: Sequelize.DOUBLE
  },
  cluster:{
    type: Sequelize.STRING
  },
}, {  tbl, timestamps:false, freezeTableName:true });


module.exports = Master_location;