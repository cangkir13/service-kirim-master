const jne = require("../../models/map_ekspedisi/klink")
const {Op} = require('sequelize')

const klinkController = () => {

    const getcode = async(req, res) => {
        const {whcd, kelurahan, kodepos} = req.query
        
        let data = await jne.findOne({
            where:{
                whcd:{
                    [Op.substring]:whcd
                },
                kelurahan,
                kodepos
            }
        })

        if (!data) {
            return res.status(404).json({
                success:false,
                msg:`kelurahan '${kelurahan}' and kodepos '${kodepos}' as Destination not found`
            })
        }

        return res.json({
            success:true,
            data:data
        })

    } 

    return {
        getcode
    }

}

module.exports = klinkController