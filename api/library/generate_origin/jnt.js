const master_jnt = require('../../models/map_ekspedisi/jnt')

module.exports = async(location) => {
    let data = await master_jnt.findOne({
        where:{
            kecamatan:location.kecamatan,
            kelurahan:location.kelurahan,
            kodepos:location.kodepos
        }
    })

    return (!data)?null :data.origin_name
}