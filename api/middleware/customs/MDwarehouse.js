/**
 * @author lepek13
 * @param {*} req body-json
 * @param {*} res if falsy
 * @param {*} next return null
 */

const Master_warehouse = require("../../models/Master_warehouse");
const Master_location = require("../../models/Master_location")
const { Op } = require("sequelize");


 // middleware for create warehouse
const MDwarehouseCreate = async(req, res, next) => {
    const {whcd, loccd, email, tel_hp, bus_open, bus_close, id_location} = req.body

    let warehouse = await Master_warehouse.findOne({
        where:{
            whcd
        }
    })

    // cek data warehouse
    if (warehouse) {
        if (warehouse.loccd === loccd) {
            return res.status(403).json({
                success:false,
                msg:`id loccd "${loccd}" is already available, please enter another`
            })
        } else if (warehouse.email === email) {
            return res.status(403).json({
                success:false,
                msg:`email "${email}" is already available, please enter another`
            })
        } else if(warehouse.tel_hp === tel_hp) {
            return res.status(403).json({
                success:false,
                msg:`Telp Number "${tel_hp}" is already available, please enter another`
            })
        }
    }

    // cek format jam tutup kantor
    if (bus_open.split(":").length < 2 ) {
        return res.status(403).json({
            success:false,
            msg:`bus_open format must be in hour and minute format such as '08:00'`
        })
    }

    // cek format jam buka kantor
    if (bus_close.split(":").length < 2) {
        return res.status(403).json({
            success:false,
            msg:`bus_close format must be in hour and minute format such as '08:00'`
        })
    }

    let location = await Master_location.findOne({
        where:{
            id:id_location
        }
    })

    // cek id lokasi
    if (!location) {
        return res.status(404).json({
            success:false,
            msg:`id location not found`
        })
    }

    req.body.location = location
    next()
}

// middleware for update warehouse
const MDwarehouseUpdate = async(req, res, next) => {
    const { bus_open, bus_close, id_location} = req.body
    const {whcd, loccd} = req.params

    let warehouse = await Master_warehouse.findOne({
        where:{   
            whcd,
            loccd  
        }
    })

    if (!warehouse) {   
        return res.status(403).json({
            success:false,
            msg:`warehouse not found`
        })
    }

    if (bus_open.split(":").length < 2 ) {
        return res.status(403).json({
            success:false,
            msg:`format bus_open mush be clock like '08:00'`
        })
    }

    if (bus_close.split(":").length < 2) {
        return res.status(403).json({
            success:false,
            msg:`format bus_close mush be clock like '08:00'`
        })
    }

    let location = await Master_location.findOne({
        where:{
            id:id_location
        }
    })

    if (!location) {
        return res.status(404).json({
            success:false,
            msg:`id location not found`
        })
    }

    next()
}

module.exports = {
    MDwarehouseCreate,
    MDwarehouseUpdate
}