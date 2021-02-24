const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tbllocation = require('./Master_location')

const tbl = 'master_member';

const Master_member = sequelize.define('master_member', {
  
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_member: {
    type: Sequelize.STRING,
  },
  jenis_alamat: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  telp: {
    type: Sequelize.STRING,
  },
  nama_penerima: {
    type: Sequelize.STRING,
  },
  alamat: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue:true
  },
  id_location: {
    type: Sequelize.INTEGER,
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

// relation to location 
Master_member.belongsTo(tbllocation, {foreignKey:'id_location',  as: 'location', constraints: false });


module.exports = Master_member;