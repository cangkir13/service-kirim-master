const fs = require('fs')
const path = require('path')
const master_sap = require("../../api/models/map_ekspedisi/sap")
const data = './JSON/kurir_sap.json'

function IMPORT(){
    // GET data JSON
    let Fatch = path.resolve(__dirname, data)
    // Buffer
    let dataBuffer = fs.readFileSync(Fatch)
    // convert to json
    let dataJson = JSON.parse(dataBuffer).map(el => {
        delete el.update_at
        return el
    })
    // import data warehouse
    console.log('cek data master_sap default');
    let cekdata = master_sap.findOne()
    cekdata.then(result => {
        if (result) {
            console.log('Data default sudah ada');
            process.exit(1)
        }else {
            master_sap.bulkCreate(dataJson)
            // console.log(dataJson);
            console.log('Import data');
        }
    })

}

module.exports = IMPORT