
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const query = sequelize.getQueryInterface()

const createTable = () => {
    // master_log_migrate
    query.createTable('master_warehouse', {
  
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        whcd: {
          type: Sequelize.STRING,
        },
        loccd: {
          type: Sequelize.STRING,
        },
        wh_head: {
          type: Sequelize.STRING,
        },
        fullnm: {
          type: Sequelize.STRING,
        },
        address: {
          type: Sequelize.STRING,
        },
        tel_hp: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        bus_open: {
          type: Sequelize.STRING,
          defaultValue:"09:00"
        },
        bus_close: {
          type: Sequelize.STRING,
          defaultValue:"18:00"
        },
        is_warehouse:{
          type: Sequelize.BOOLEAN,
          defaultValue:true
        },
        is_stockist:{
          type: Sequelize.BOOLEAN,
          defaultValue:false
        },
        status:{
          type: Sequelize.BOOLEAN,
          defaultValue:true
        },
        is_cod:{
          type: Sequelize.BOOLEAN,
          defaultValue:false
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
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()'),
        },
      });
    return query
}

module.exports = createTable