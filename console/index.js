const yargs = require('yargs')

const comment = yargs.argv
const comment_type = comment._

if (comment_type[0] === 'migrate') {
    require('./create_log_tb')()
    require('./migration')
    console.log('LAGI MIGRASI TUNGGU SEBENTAR');
} else if (comment_type[0] === 'sedder') {
    if (comment_type[1] !== undefined) {
        let order = comment_type[1]
        switch (order) {
            case 'location':
                require('./sedder/ImportLocation')()
                console.log('proses import', order)
                break;
            case 'ekspedisi':
                require('./sedder/ImportEkpedisi')()
                console.log('proses import', order)
                break     
            case 'warehouse':
                require('./sedder/ImportWarehouse')()
                console.log('proses import', order)
                break
            case 'kurirs':
                console.log('proses import', order)
                require('./sedder/importAllkurir')
                break
            case 'member':
                console.log('proses import', order)
                require('./sedder/ImportMember')()
                break    
            case "warehouse_ekspedisi":
                console.log('proses import', order)
                require('./sedder/ImportWarehouseEkspedisi')()
                break 
            default:
                console.log(`comment '${order}' tidak di temukan`)

                break;
        }
        // importData[comment_type[1]]
        
    }else {
        console.log('mau kirim apa ya?')
    }
}else{
    console.log('Perhatikan langkah anda');
}


console.log(comment)