const validateBody = require('../../api/middleware/validation/validateMiddleware');
const validateQuery = require('../../api/middleware/validation/validateQuery');
const publicSchemas = require('../../api/middleware/schemas/SchemaEkspedisi');
const {MDekspWhCreate} = require('../../api/middleware/customs/MDekspedisi')

const ekspedisiRoutes = {

    // master ekspdisi
    'GET /ekspedisi' : {
        path: 'ekspedisi/EkspedisiController.get'
    },

    'POST /ekspedisi' : {
        path: 'ekspedisi/EkspedisiController.post',
        middlewares:[validateBody(publicSchemas.postEkspedisi)]
    },

    'PUT /ekspedisi/:name' : {
        path: 'ekspedisi/EkspedisiController.put',
        middlewares:[validateBody(publicSchemas.putEkspedisi)]
    },


    // ekspdisi of warehouse
    'GET /ekspedisi/warehouse' : {
        path: 'ekspedisi/EkspWHController.get'
    },

    'GET /ekspedisi/warehouse/search' : {
        path: 'ekspedisi/EkspWHController.getOne',
        middlewares:[validateQuery(publicSchemas.getOneEkspedisiWH)]
    },

}

module.exports = ekspedisiRoutes