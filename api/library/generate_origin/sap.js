const master_sap = require('../../models/map_ekspedisi/sap')

module.exports = async(location) => {
    let data = await master_sap.findOne({
        where:{
            kecamatan:location.kecamatan,
            kelurahan:location.kelurahan,
            kodepos:location.kodepos
        }
    })

    return (!data)?null:data.tlc_code
    
}