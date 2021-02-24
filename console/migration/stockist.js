
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const query = sequelize.getQueryInterface()

const createTable = () => {
    // master_log_migrate
    query.createTable('master_kurir_stockist', {
  
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        whcd: {
          type: Sequelize.STRING(20),
        },
        provinsi: {
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
        price: {
          type: Sequelize.INTEGER,
        },
        service: {
          type: Sequelize.STRING(15),
        },
        is_cod: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
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