const Joi = require('joi');

const schemas = { 

    getKabupaten: Joi.object({
        provinsi: Joi.string().required()
    }),

    getkecamatan: Joi.object({
        provinsi: Joi.string().required(),
        kabupaten: Joi.string().required()
    }),

    getKelurahan: Joi.object({
        provinsi: Joi.string().required(),
        kabupaten: Joi.string().required(),
        kecamatan: Joi.string().required(),
    }),

    // schema new data
    postAreaArry : Joi.array().required().items({
        provinsi:Joi.string().required(),
        kabupaten: Joi.string().required(),
        kecamatan: Joi.string().required(),
        kelurahan:Joi.string().required(),
        kodepos: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        cluster: Joi.string().required(),
    }),
  
}; 
module.exports = schemas;