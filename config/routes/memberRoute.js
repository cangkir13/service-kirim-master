const validateBody = require('../../api/middleware/validation/validateMiddleware');
const validateQuery = require('../../api/middleware/validation/validateQuery');
const publicSchemas = require('../../api/middleware/schemas/SchemaMember');
const {MDmemberCreate, MDmemberUpdate} = require('../../api/middleware/customs/MDmember')

const locationRoutes = {
    'GET /member/warehouse' : {
        path: 'member/MMWHController.getMMwarehouse',
        middlewares: [validateQuery(publicSchemas.getMemberWarehouse)]
    },

    'GET /member/nears' : {
        path: 'member/MMWHController.getOriginNears',
        middlewares: [validateQuery(publicSchemas.getMember)]
    },

    'GET /member' : {
        path: 'member/MemberController.get',
        middlewares: [validateQuery(publicSchemas.getMember)]
    },

    'POST /member': {
        path: 'member/MemberController.post',
        middlewares: [validateBody(publicSchemas.createMember), MDmemberCreate]
    },

    'PUT /member': {
        path: 'member/MemberController.update',
        middlewares: [validateBody(publicSchemas.createMember), MDmemberUpdate]
    },
    
}

module.exports = locationRoutes