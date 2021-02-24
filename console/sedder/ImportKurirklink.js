const fs = require('fs')
const path = require('path')
const master_klink = require("../../api/models/map_ekspedisi/klink")
const data = './JSON/kurir_klink.json'

function IMPORT(){
    // GET data JSON
    let Fatch = path.resolve(__dirname, data)
    // Buffer
    let dataBuffer = fs.readFileSync(Fatch)
    // convert to json
    let dataJson = JSON.parse(dataBuffer)
    // import data warehouse
    console.log('cek data master_klink default');
    let cekdata = master_klink.findOne()
    cekdata.then(result => {
        if (result) {
            console.log('Data default sudah ada');
            process.exit(1)
        }else {
            master_klink.bulkCreate(dataJson)
            console.log('Import data');
        }
    })

}

module.exports = IMPORT