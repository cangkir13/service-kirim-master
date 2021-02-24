/**
 * @author lepek13
 * customs middlewares for create and update destination member
 */

const Master_member = require('../../models/Master_member');
const Master_location = require('../../models/Master_location');

const MDmemberCreate = async(req, res, next) => {

    const {id_member, jenis_alamat, id_location, telp } = req.body
    
    const member = await Master_member.findOne({
        where:{
            id_member, 
            jenis_alamat
        }
    })

    if (member) {
        return res.status(403).json({
            success:false,
            msg:"Id member already exist"
        })
    }

    let locations = await Master_location.findOne({
        where:{
            id:id_location
        }
    })

    if (!locations) {
        return res.status(404).json({
            success:false,
            msg:"id location not found"
        })
    }

    if (telp.length < 6 || telp.length > 15) {
        return res.status(403).json({
            success:false,
            msg:"no telp grather then 6 and less than 15 digit"
        })
    }
    delete locations['dataValues'].id
    req.body = {...req.body, ...locations['dataValues']}
    next()

}

const MDmemberUpdate = async(req, res, next) => {

    const {id_member, jenis_alamat, id_location, telp } = req.body
    
    const member = await Master_member.findOne({
        where:{
            id_member, 
            jenis_alamat
        }
    })

    if (!member) {
        return res.status(404).json({
            success:false,
            msg:"Id member not found"
        })
    }

    let locations = await Master_location.findOne({
        where:{
            id:id_location
        }
    })

    if (!locations) {
        return res.status(404).json({
            success:false,
            msg:"id location not found"
        })
    }

    if (telp.length < 6 || telp.length > 15) {
        return res.status(403).json({
            success:false,
            msg:"no telp grather then 6 and less than 15 digit"
        })
    }
    delete locations['dataValues'].id
    req.body = {...req.body, ...locations['dataValues']}
    next()

}


module.exports = { MDmemberCreate, MDmemberUpdate }