const rpx = require("../../models/map_ekspedisi/jnt")

const jntController = () => {

    const getcode = async(req, res) => {
        const {kelurahan, kodepos} = req.query
        
        let data = await rpx.findOne({
            where:{
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
            data
        })

    } 

    return {
        getcode
    }

}

module.exports = jntController