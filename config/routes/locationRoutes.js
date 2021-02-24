const validate = require('../../api/middleware/validation/validateMiddleware')
const validateQuery = require('../../api/middleware/validation/validateQuery')
const publicSchemas = require('../../api/middleware/schemas/SchemaLocation')

const locationRoutes = {
    'GET /provinsi' : 'location/LocationController.getProvinsi',
    'GET /kabupaten' : {
        path: 'location/LocationController.getKabupaten',
        middlewares:[validateQuery(publicSchemas.getKabupaten)]
    },
    'GET /kecamatan' : {
        path: 'location/LocationController.getKecamatan',
        middlewares:[validateQuery(publicSchemas.getkecamatan)]
    },
    'GET /kelurahan' : {
        path: 'location/LocationController.getKelurahan',
        middlewares:[validateQuery(publicSchemas.getKelurahan)]
    },

    // create new data area
    'POST /store_area': {
        path: 'location/LocActionController.store_arr',
        middlewares:[validate(publicSchemas.postAreaArry)]
    }
}

module.exports = locationRoutes