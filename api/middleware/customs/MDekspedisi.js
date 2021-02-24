/**
 * @author lepek13
 * middleware for add ekspedisi for warehouse
 */

const Master_ekspedisi = require('../../models/Master_ekspedisi')
const Master_warehouse = require('../../models/Master_warehouse')
const Master_warehouse_ekspedisi = require('../../models/Master_warehouse_ekspedisi')

const MDekspWhCreate = async(req, res, next) => {
    const {whcd, loccd, vendor} = req.body

    // proses check warehouse check 
    let warehouse = await Master_warehouse.findOne({
        where:{
            whcd, loccd
        }
    })
    if (!warehouse) {
        return res.status(404).json({
            success:false,
            msg:"Warehouse not found"
        })
    }

    
    // proses check ekspdisi exist warehouse list ekpspedisi
    let ekspeksis = []
    for (let i = 0; i < vendor.length; i++) {
        let whekspdi = await Master_warehouse_ekspedisi.findOne({
            where:{
                ekspedisi :vendor[i],
                id_wh : warehouse['dataValues'].id
            }
        })    

        if (whekspdi) {
            ekspeksis.push(vendor[i])
        }
    }

    if (ekspeksis.length > 0) {
        return res.status(403).json({
            success:false,
            msg:"ekspedisi already exist for this office",
            data: ekspeksis
        })
    }

    let vendor_list = []
    // proses check ekspedisi available in master ekspedisi
    let notEkpdisi = []    
    for (let i = 0; i < vendor.length; i++) {
        let ekspedisi = await Master_ekspedisi.findOne({
            where:{
                name:vendor[i]
            }
        })    

        if (!ekspedisi) {
            notEkpdisi.push(vendor[i])
        }else{
            vendor_list.push({
                id_wh : warehouse['dataValues'].id,
                id_ekspedisi : ekspedisi.id,
                ekspedisi: ekspedisi.name
            })
        }
    }

    if (notEkpdisi.length > 0) {
        return res.status(403).json({
            success:false,
            msg:"ekspdisi not found",
            data:notEkpdisi
        })
    }
    
    req.body.vendor = vendor_list

    next()
}

module.exports = {MDekspWhCreate}