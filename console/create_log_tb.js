
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const query = sequelize.getQueryInterface()

const createTable = () => {
    // master_log_migrate
    query.createTable('master_log_migrate', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: Sequelize.STRING,
          },
          create_at:{
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()'),
          },
    });
    return query
}

module.exports = createTable