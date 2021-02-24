
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const query = sequelize.getQueryInterface()

const createTable = () => {
    // master_log_migrate
    query.createTable('master_location', {
  
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
      });
    return query
}

module.exports = createTable