const fs = require('fs')
const path = require('path')
const Master_warehouse_ekspedisi = require("../../api/models/Master_warehouse_ekspedisi")
const data = './JSON/warehouse_ekspedisi.json'

function IMPORT(){
    // GET data JSON
    let Fatch = path.resolve(__dirname, data)
    // Buffer
    let dataBuffer = fs.readFileSync(Fatch)
    // convert to json
    let dataJson = JSON.parse(dataBuffer).map((el) => {
        delete el.warhouse
        return el
    })
    // import data warehouse
    console.log('cek data Master_warehouse_ekspedisi default');
    let cekdata = Master_warehouse_ekspedisi.findOne()
    cekdata.then(result => {
        if (result) {
            console.log('Data default sudah ada');
            process.exit(1)
        }else {
            Master_warehouse_ekspedisi.bulkCreate(dataJson)
            console.log('Import data');
        }
    })

}

module.exports = IMPORT