
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const query = sequelize.getQueryInterface()

const createTable = () => {
    // master_log_migrate
    query.createTable('master_warehouse_ekspedisi', {
  
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_wh: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        id_ekspedisi:{
          type: Sequelize.INTEGER,
          primaryKey: true,
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
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()'),
        },
      });
    return query
}

module.exports = createTable