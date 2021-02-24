const validate = require('../../api/middleware/validation/validateMiddleware')
const publicSchemas = require('../../api/middleware/schemas/SchemaWarehouse')
const {MDwarehouseCreate, MDwarehouseUpdate} = require('../../api/middleware/customs/MDwarehouse')
const { MDwhVendroCreate, MDwhVendorUpdate } = require('../../api/middleware/customs/MDwhVendor')

const warehouseRoutes = {
    // get all warehouse
    'GET /warehouse' : 'warehouse/WarehouseController.get',
    // get one warehouse
    'GET /warehouse/:whcd/:loccd/show' : 'warehouse/WarehouseController.getOne',
    // create new warehouse
    'POST /warehouse' : {
        path: 'warehouse/WarehouseController.post',
        middlewares:[validate(publicSchemas.postWarehouse), MDwarehouseCreate]
    },
    // update warehouse
    'PUT /warehouse/:whcd/:loccd/update' : {
        path: 'warehouse/WarehouseController.update',
        middlewares:[validate(publicSchemas.putWarehouse), MDwarehouseUpdate]
    },
    // create origin code of vendor (courier)
    'POST /warehouse/vendor' : {
        path:'warehouse/WhVendorController.post',
        middlewares:[validate(publicSchemas.postWarehousevendor), MDwhVendroCreate]
    },

    'PUT /warehouse/vendor' : {
        path:'warehouse/WhVendorController.put',
        middlewares:[validate(publicSchemas.postWarehousevendor), MDwhVendorUpdate ]
    },

}

module.exports = warehouseRoutes