const Joi = require('joi');

module.exports = {
    // validator create
    postWarehouse : Joi.object({
        whcd:Joi.string().required(),
        wh_head: Joi.string().required(),
        loccd: Joi.string().required(),
        fullnm: Joi.string().required(),
        address:Joi.string().required(),
        tel_hp: Joi.number().required(),
        email: Joi.string().required(),
        is_warehouse: Joi.boolean().required(),
        is_stockist: Joi.boolean().required(),
        bus_open: Joi.string().required(),
        bus_close: Joi.string().required(),
        is_cod: Joi.boolean().required(),
        status: Joi.boolean().required(),
        id_location: Joi.number().required()
    }),
    // validator update
    putWarehouse : Joi.object({
        wh_head: Joi.string().required(),
        fullnm: Joi.string().required(),
        address:Joi.string().required(),
        tel_hp: Joi.number().required(),
        email: Joi.string().required(),
        is_warehouse: Joi.boolean().required(),
        is_stockist: Joi.boolean().required(),
        bus_open: Joi.string().required(),
        bus_close: Joi.string().required(),
        is_cod: Joi.boolean().required(),
        status: Joi.boolean().required(),
        id_location: Joi.number().required()
    }),

    // validator create origin vendor
    postWarehousevendor : Joi.object({
        whcd: Joi.string().required(),
        loccd: Joi.string().required(),
        vendor: Joi.array().items({
            ekspedisi: Joi.string().required().allow(),
            origin_code: Joi.string().required().allow(null),
            is_cod: Joi.boolean().required()
        }).required()
    }),

}