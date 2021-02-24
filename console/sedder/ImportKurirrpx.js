const fs = require('fs')
const path = require('path')
const master_rpx = require("../../api/models/map_ekspedisi/rpx")
const data = './JSON/kurir_rpx.json'

function IMPORT(){
    // GET data JSON
    let Fatch = path.resolve(__dirname, data)
    // Buffer
    let dataBuffer = fs.readFileSync(Fatch)
    // convert to json
    let dataJson = JSON.parse(dataBuffer)
    // import data warehouse
    console.log('cek data master_rpx default');
    let cekdata = master_rpx.findOne()
    cekdata.then(result => {
        if (result) {
            console.log('Data default sudah ada');
            process.exit(1)
        }else {
            master_rpx.bulkCreate(dataJson)
            console.log('Import data');
        }
    })

}

module.exports = IMPORT