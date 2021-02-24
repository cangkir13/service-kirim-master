const fs = require('fs')
const path = require('path')
const Master_ekspedisi = require("../../api/models/Master_ekspedisi")
const data = './JSON/master_ekspedisi.json'

function IMPORT(){
    // GET data JSON
    let Fatch = path.resolve(__dirname, data)
    // Buffer
    let dataBuffer = fs.readFileSync(Fatch)
    // convert to json
    let dataJson = JSON.parse(dataBuffer)
    // import data warehouse

    console.log('cek data Master_ekspedisi default');
    let cekdata = Master_ekspedisi.findOne()
    cekdata.then(result => {
        if (result) {
            console.log('Data default sudah ada');
            process.exit(1)
        }else {
            Master_ekspedisi.bulkCreate(dataJson)
            console.log('Import data');
        }
    })
}

module.exports = IMPORT