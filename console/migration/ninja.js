
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
        provinsi: {
          type: Sequelize.STRING,
        },
        kabupaten: {
          type: Sequelize.STRING,
        },
        kecamatan: {
          type: Sequelize.STRING,
        },
        ambon: {
          type: Sequelize.INTEGER,
        },
        bandung: {
          type: Sequelize.INTEGER,
        },
        jakarta: {
          type: Sequelize.INTEGER,
        },
        jambi: {
          type: Sequelize.INTEGER,
        },
        jayapura: {
          type: Sequelize.INTEGER,
        },
        kendari: {
          type: Sequelize.INTEGER,
        },
        kupang: {
          type: Sequelize.INTEGER,
        },
        makassar: {
          type: Sequelize.INTEGER,
        },
        manado: {
          type: Sequelize.INTEGER,
        },
        medan: {
          type: Sequelize.INTEGER,
        },
        sorong: {
          type: Sequelize.INTEGER,
        },
        surabaya: {
          type: Sequelize.INTEGER,
        },
        tangerang: {
          type: Sequelize.INTEGER,
        },
        bogor: {
          type: Sequelize.INTEGER,
        },
        service: {
          type: Sequelize.STRING(15),
          defaultValue: 'Standard'
        },
        is_cod: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
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