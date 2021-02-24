const master_jne = require('../../models/map_ekspedisi/jne')

module.exports = async(location) => {
    let data = await master_jne.findOne({
        where:{
            kabupaten:location.kabupaten
        }
    })

    return (!data)?null:data.origin_name
}