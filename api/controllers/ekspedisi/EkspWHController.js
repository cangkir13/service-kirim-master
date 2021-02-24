/**
 * @author lepek13
 * controller ekspdisi of warehouse 
 * with middleware /middleware/customs/MDekspedisi.js
 */


const Master_warehouse = require("../../models/Master_warehouse")
const Master_warehouse_ekspedisi = require("../../models/Master_warehouse_ekspedisi")
const Master_ekspedisi = require("../../models/Master_ekspedisi")

let warehouse_attributes = [
    'whcd', 'loccd', 'wh_head', 'fullnm',
    'is_warehouse', 'is_stockist',
    'status', 'is_cod'
]

let vendor_attributes = [
    'origin_code', 'is_cod', 'status'
]

let ekspedisi_attributes = [
    'name', 'label', 'image_url',
    'is_cod', 'status'
]

const EkspWHController = () => {
    /**
     * get all ekspdisi or warehouse
     * @method GET
     * @route domain.com/api/master/ekspedisi/warehouse
     */
    const get = async(req, res) => {
        let data = await Master_warehouse.findAll({
            attributes:warehouse_attributes,
            include:[
                {
                    model:Master_warehouse_ekspedisi,
                    as:"data_ekspedisi",
                    attributes:vendor_attributes,
                    include:[
                        {
                            model:Master_ekspedisi,
                            as:'detail_ekspedisi',
                            attributes: ekspedisi_attributes
                        }
                    ]
                },
               
            ]
        })

        return res.json({
            success:true,
            data
        })
    }

    /**
     * get all ekspdisi or warehouse
     * @method GET
     * @route domain.com/api/master/ekspedisi/warehouse
     * @param {whcd, loccd}
     */
    const getOne = async(req, res) => {

        const {whcd, loccd} = req.query

        let data = await Master_warehouse.findOne({
            where:{
                whcd, loccd
            },
            attributes:warehouse_attributes,
            include:[
                {
                    model:Master_warehouse_ekspedisi,
                    as:"data_ekspedisi",
                    attributes:vendor_attributes,
                    include:[
                        {
                            model:Master_ekspedisi,
                            as:'detail_ekspedisi',
                            attributes: ekspedisi_attributes
                        }
                    ]
                },
               
            ]
        })

        if (!data) {
            return res.status(404).json({
                success:false,
                msg:"warhouse not found"
            })
        }

        return res.json({
            success:true,
            data
        })
    }

    const post = async(req, res) => { 

        const {vendor} = req.body
        
        await Master_warehouse_ekspedisi.bulkCreate(vendor)
        
        return res.json({
            success:true,
            msg:"data has been added",
            data:vendor
        })

    }

    return {
        get,
        getOne,
        post
    }

}

module.exports = EkspWHController