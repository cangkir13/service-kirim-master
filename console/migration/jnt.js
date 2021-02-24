
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const query = sequelize.getQueryInterface()

const createTable = () => {
    // master_log_migrate
    query.createTable('master_kurir_jnt', {
  
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
          type: Sequelize.STRING(50),
        },
        destination_name: {
          type: Sequelize.STRING(50),
        },
        is_cod: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
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