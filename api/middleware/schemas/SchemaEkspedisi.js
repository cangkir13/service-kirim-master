const Joi = require('joi');

const schemas = { 

    postEkspedisi: Joi.object({
        name: Joi.string().required(),
        label: Joi.string().required(),
        image_url:Joi.string().uri().required(),
        is_cod:Joi.boolean().required(),
        status:Joi.boolean().required()
    }),

    putEkspedisi: Joi.object({
        label: Joi.string().required(),
        image_url:Joi.string().uri().required(),
        is_cod:Joi.boolean().required(),
        status:Joi.boolean().required()
    }),

    postEkspedisiWH: Joi.object({
        whcd: Joi.string().required(),
        loccd: Joi.string().required(),
        vendor: Joi.array().required()
    }),

    getOneEkspedisiWH: Joi.object({
        whcd: Joi.string().required(),
        loccd: Joi.string().required(),
    }),
}

module.exports = schemas