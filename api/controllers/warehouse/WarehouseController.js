/**
 * @author lepek13
 * API warehouse get/post/update 
 * @param {*} req body-json
 * @param {*} res if falsy
 * @param {*} next return null
 * @param req.params for update method
 */

const Master_warehouse = require("../../models/Master_warehouse");
const Master_location = require('../../models/Master_location');

let warehouse_attributes = [
    'whcd', 'loccd', 'wh_head', 'fullnm',
    'address', 'tel_hp', 'email', 'bus_open',
    'bus_close', 'is_warehouse', 'is_stockist',
    'status', 'is_cod'
]

const WarehouseController = () => {
    /**
     * @method GET
     * @route domain.com/api/master/warehouse
     */
    const get = async(req, res) => {
        let data = await Master_warehouse.findAll({
            attributes:warehouse_attributes,
            include:[
                {
                    model:Master_location,
                    as:"location"
                }
            ]
        })

        return res.json({
            success:true,
            data
        })
    }
    
    /**
     * @method GET
     * @route domain.com/api/master/warehouse/{whcd}/{loccd}/show
     * @param {whcd, loccd}
     */
    const getOne = async(req, res) => {
        const {whcd, loccd} = req.params
        let data = await Master_warehouse.findOne({
            where:{
                whcd, loccd
            },
            attributes:warehouse_attributes,
            include:[
                {
                    model:Master_location,
                    as:"location"
                }
            ]
        });

        if (!data) {
            return res.status(404).json({
                success:false,
                msg:"warehouse not found"
            })            
        }

        return res.json({
            success:true,
            data
        })
    }

    /**
     * @method POST
     * @route domain.com/api/master/warehouse/store
     * @middlewares MDwarehouse.MDwarehouseCreate
     */
    const post = async(req, res) => {
        await Master_warehouse.create(req.body)
        
        return res.json({
            success:true,
            msg:"data has been created"
        })
    }

    /**
     * @method PUT
     * @route domain.com/api/master/warehouse/WH001/WH001/update
     * @middlewares MDwarehouse.MDwarehouseUpdate
     */
    const update = async(req, res) => {
        const {whcd, loccd} = req.params
        await Master_warehouse.update(req.body, {
            where:{
                whcd,
                loccd
            }
        })
        
        return res.json({
            success:true,
            msg:"data has been updated"
        })
    }

    return {
        get,
        getOne,
        post,
        update
    }
    
}

module.exports = WarehouseController