const fs = require('fs')
const path = require('path')
const master_jne = require("../../api/models/map_ekspedisi/jne")
const data = './JSON/kurir_jne.json'

function IMPORT(){
    // GET data JSON
    let Fatch = path.resolve(__dirname, data)
    // Buffer
    let dataBuffer = fs.readFileSync(Fatch)
    // convert to json
    let dataJson = JSON.parse(dataBuffer)
    // import data warehouse
    console.log('cek data master_jne default');
    let cekdata = master_jne.findOne()
    cekdata.then(result => {
        if (result) {
            console.log('Data default sudah ada');
            process.exit(1)
        }else {
            master_jne.bulkCreate(dataJson)
            console.log('Import data');
        }
    })

}

module.exports = IMPORT