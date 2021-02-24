
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const query = sequelize.getQueryInterface()

const createTable = () => {
    // master_log_migrate
    query.createTable('master_kurir_jne', {
  
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        origin_name: {
          type: Sequelize.STRING(120),
        },
        destination_name: {
          type: Sequelize.STRING(20),
        },
        tlc: {
          type: Sequelize.STRING(10),
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
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
        },
        is_cod:{
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