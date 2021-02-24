const jne = require("../../models/map_ekspedisi/jne")

const jneController = () => {

    const getcode = async(req, res) => {
        const {kecamatan, kelurahan, kodepos} = req.query
        
        let data = await jne.findOne({
            where:{
                kecamatan,
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

module.exports = jneController