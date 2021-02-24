const fs = require('fs')
const path = require('path')
const Master_warehouse = require("../../api/models/Master_warehouse")
const data = './JSON/data_warehouse.json'

function IMPORT(){
    // GET data JSON
    let Fatch = path.resolve(__dirname, data)
    // Buffer
    let dataBuffer = fs.readFileSync(Fatch)
    // convert to json
    let dataJson = JSON.parse(dataBuffer)
    // import data warehouse
    console.log('cek data Master_warehouse default');
    let cekdata = Master_warehouse.findOne()
    cekdata.then(result => {
        if (result) {
            console.log('Data default sudah ada');
            process.exit(1)
        }else {
            Master_warehouse.bulkCreate(dataJson)
            console.log('Import data');
        }
    })

}

module.exports = IMPORT