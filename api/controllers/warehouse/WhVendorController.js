/**
 * controller post/put setting origin vendor of warehouse
 */

const Master_warehouse_ekspedisi = require("../../models/Master_warehouse_ekspedisi")

const WhVendorController = () => {
    /**
     * @method POST
     * @route domain.com/api/master/warehouse/vendor
     * @middlewares MDwhVendor.MDwhVendroCreate
     */
    const post = async(req, res) => {
        const {body} = req
        
        await Master_warehouse_ekspedisi.bulkCreate(body.result)
        
        return res.json({
            success:true,
            msg:"Data has been added",
            result : body.vendor,
        })
    }

    /**
     * @method PUT
     * @route domain.com/api/master/warehouse/vendor
     * @middlewares MDwhVendor.MDwhVendorUpdate
     */
    const put = async(req, res) => {
        const {body} = req
        const {result} = body
        
        for (let index = 0; index < result.length; index++) {
            await Master_warehouse_ekspedisi.update({
                origin_code:result[index].origin_code,
                is_cod: result[index].is_cod
            }, {
                where:{
                    id_wh:result[index].id_wh,
                    id_ekspedisi:result[index].id_ekspedisi,
                }
            })
        }

        return res.json({
            success:true,
            msg:"data has been updated",
            data:result.map(el => el.ekspedisi)
        })
    }

    return {
        post,
        put
    }
}

module.exports = WhVendorController