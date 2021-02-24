const validateBody = require('../../api/middleware/validation/validateMiddleware');
const validateQuery = require('../../api/middleware/validation/validateQuery');
const publicSchemas = require('../../api/middleware/schemas/SchemaEkspedisi');

const Routes = {
    // sap
    'GET /sap/getcode': {
        path: 'area_ekspedisi/sapController.getcode'
    },

    // rpx
    'GET /rpx/getcode': {
        path: 'area_ekspedisi/rpxController.getcode'
    },

    // jnt
    'GET /jnt/getcode': {
        path: 'area_ekspedisi/jntController.getcode'
    },

    // jne
    'GET /jne/getcode': {
        path: 'area_ekspedisi/jneController.getcode'
    },

    'GET /klink_express/getcode': {
        path: 'area_ekspedisi/klinkController.getcode'
    },
}

module.exports = Routes