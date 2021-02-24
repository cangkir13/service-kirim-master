const Joi = require('joi');

const schemas = { 

    getMember: Joi.object({
        id_member: Joi.string().required(),
        jenis_alamat: Joi.string().required()
    }),

    createMember : Joi.object({
        id_member: Joi.string().required(),
        jenis_alamat: Joi.string().required(),
        nama_penerima:Joi.string().required(),
        telp:Joi.number().required(),
        email: Joi.string().email().allow(""),
        alamat:Joi.string().required(),
        id_location:Joi.number().required(),
    }),

    getMemberWarehouse: Joi.object({
        id_member: Joi.string().required(),
        jenis_alamat: Joi.string().required(),
        whcd: Joi.string().required(),
        loccd: Joi.string().required(),
    }),

}

module.exports = schemas