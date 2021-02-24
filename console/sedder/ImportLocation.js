const fs = require('fs')
const path = require('path')
const Master_location = require("../../api/models/Master_location")
const data = './JSON/location.json'

function IMPORT(){
    // GET data JSON
    let Fatch = path.resolve(__dirname, data)
    // Buffer
    let dataBuffer = fs.readFileSync(Fatch)
    // convert to json
    let dataJson = JSON.parse(dataBuffer)
    // import data warehouse
    console.log('cek data Master_location default');
    let cekdata = Master_location.findOne()
    cekdata.then(result => {
        if (result) {
            console.log('Data default sudah ada');
            process.exit(1)
        }else {
            Master_location.bulkCreate(dataJson)
            console.log('Import data');
        }
    })
    
}

module.exports = IMPORT