const fs = require('fs')
const path = require('path')
const master_stockist = require("../../api/models/map_ekspedisi/stockist")
const data = './JSON/kurir_stockist.json'

function IMPORT(){
    // GET data JSON
    let Fatch = path.resolve(__dirname, data)
    // Buffer
    let dataBuffer = fs.readFileSync(Fatch)
    // convert to json
    let dataJson = JSON.parse(dataBuffer)
    // import data warehouse
    console.log('cek data master_stockist default');
    let cekdata = master_stockist.findOne()
    cekdata.then(result => {
        if (result) {
            console.log('Data default sudah ada');
            process.exit(1)
        }else {
            master_stockist.bulkCreate(dataJson)
            console.log('Import data');
        }
    })

}

module.exports = IMPORT