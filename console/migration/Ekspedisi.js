
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const query = sequelize.getQueryInterface()

const createTable = () => {
    // master_log_migrate
    query.createTable('master_ekspedisi', {
  
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING(20),
        },
        label: {
          type: Sequelize.STRING(20),
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
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()'),
        },
      });
    return query
}

module.exports = createTable