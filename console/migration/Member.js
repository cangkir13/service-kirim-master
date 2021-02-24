
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const query = sequelize.getQueryInterface()

const createTable = () => {
    // master_log_migrate
    query.createTable('master_member', {
  
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
          type: Sequelize.TEXT,
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
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()'),
        },
      });
    return query
}

module.exports = createTable