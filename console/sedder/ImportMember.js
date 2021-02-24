const fs = require('fs')
const path = require('path')
const Master_member = require("../../api/models/Master_member")
const data = './JSON/data_member.json'


function IMPORT(){
    // GET data JSON
    let Fatch = path.resolve(__dirname, data)
    // Buffer
    let dataBuffer = fs.readFileSync(Fatch, 'utf-8')
    // convert to json
    let dataJson = JSON.parse(dataBuffer).filter( function(el) {
        delete el.create_at
        // el.nama_penerima.substring(0, 250)
        let nama = el.nama_penerima
        let email = el.email
        
        el.nama_penerima = nama.length > 255 ? nama.substring(0, 255): nama
        el.email = email.length > 255 ? email.substring(0, 100): email
        return el
    })
    // console.log(dataJson)
    
    // import data 
    console.log('cek data master_member default', dataJson.length);
    let cekdata = Master_member.findOne()
    cekdata.then(result => {
        if (result) {
            console.log('Data default sudah ada');
            process.exit(1)
        }else {
            Master_member.bulkCreate(dataJson)
            console.log('Import data');
        }
    })
}

module.exports = IMPORT