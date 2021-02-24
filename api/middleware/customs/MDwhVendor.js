/**
 * middleware warehouse code and ekspedisi (vendor)
 */

const Master_warehouse = require('../../models/Master_warehouse');
const Master_ekspedisi = require('../../models/Master_ekspedisi');
const Master_warehouse_ekspedisi = require('../../models/Master_warehouse_ekspedisi');

const MDwhVendroCreate = async(req, res, next) => {
    const {body} = req
    const {whcd, loccd, vendor} = req.body
    // find warehouse is exist
    let data = await Master_warehouse.findOne({
        where:{
            whcd,
            loccd,
        }
    })
    // return false jika kode warehouse tidak ada
    if (!data) {
        return res.json({
            success:false,
            msg:"Warehouse code not found"
        })
    }

    // tampung ekspedis yang tidak ada
    let nonEkpdisi = []
    // tampung data eksepdisi yg ada
    let valdateOrg = []

    for (let i = 0; i < vendor.length; i++) {
        let cekEks = await Master_ekspedisi.findOne({
            where:{
                name:vendor[i].ekspedisi
            }
        })
        
        if(!cekEks){
            nonEkpdisi.push(vendor[i])
        }else{
            valdateOrg.push({
                ekspedisi:vendor[i].ekspedisi,
                id_ekspedisi:cekEks.id,
                id_wh:data.id,
                origin_code:vendor[i].origin_code,
                is_cod:vendor[i].is_cod
            })
        }
    }

    // return jika ekspedisi tidak tersedia
    if (nonEkpdisi.length > 0) {
        return res.status(403).json({
            success:false,
            msg:"ekspedisi not found",
            data:nonEkpdisi
        })
    }

    // tampungan wh ekspedisi pada table
    let whEkspedisiExist = [] 
    for (let index = 0; index < valdateOrg.length; index++) {
        let cekWheks = await Master_warehouse_ekspedisi.findOne({
            where:{
                id_wh:valdateOrg[index].id_wh,
                id_ekspedisi:valdateOrg[index].id_ekspedisi,
            }
        })

        if (cekWheks) {
          whEkspedisiExist.push(valdateOrg[index].ekspedisi) 
        }
    }

    // return false jika ekspedis pernah di tambahkan
    if (whEkspedisiExist.length > 0) {
        return res.status(403).json({
            success:false,
            msg:"ekspedisi sudah pernah di tambahkan, silahkan tambahkan ekspedisi lain",
            data:whEkspedisiExist
        })
    }

    // delet element ekspedisi name
    let dataImport = valdateOrg.map(el => {
        delete el.ekspedisi
        return el
    })
    
    // input pada body
    body.result = dataImport   

    next();
}

// middleware update vendor warehouse
const MDwhVendorUpdate = async(req, res, next) => {
    const {body} = req
    const {whcd, loccd, vendor} = req.body
    
    let data = await Master_warehouse.findOne({
        where:{
            whcd,
            loccd
        }
    })
    
    if (!data) {
        return res.json({
            success:false,
            msg:"Warehouse code not found"
        })
    }

    // tampung ekspedis yang tidak ada
    let nonEkpdisi = []
    // tampung data eksepdisi yg ada
    let valdateOrg = []

    for (let i = 0; i < vendor.length; i++) {
        let cekEks = await Master_ekspedisi.findOne({
            where:{
                name:vendor[i].ekspedisi
            }
        })
        
        if(!cekEks){
            nonEkpdisi.push(vendor[i])
        }else{
            valdateOrg.push({
                ekspedisi:vendor[i].ekspedisi,
                id_ekspedisi:cekEks.id,
                id_wh:data.id,
                origin_code:vendor[i].origin_code,
                is_cod:vendor[i].is_cod
            })
        }
    }

    // return jika ekspedisi tidak tersedia
    if (nonEkpdisi.length > 0) {
        return res.status(403).json({
            success:false,
            msg:"ekspedisi not found",
            data:nonEkpdisi
        })
    }

    // tampungan wh ekspedisi pada table
    let whEkspedisinotExist = [] 
    for (let index = 0; index < valdateOrg.length; index++) {
        let cekWheks = await Master_warehouse_ekspedisi.findOne({
            where:{
                id_wh:valdateOrg[index].id_wh,
                id_ekspedisi:valdateOrg[index].id_ekspedisi,
            }
        })
        // cek data is exist in table
        if (!cekWheks) {
            // push data exit to cek available
            whEkspedisinotExist.push(valdateOrg[index].ekspedisi) 
        }
    }

    // return false jika ekspedis belum pernah di tambahkan
    if (whEkspedisinotExist.length > 0) {
        return res.status(403).json({
            success:false,
            msg:"ekspedisi belum di tambahkan, silahkan tambahkan ekspedisi dahulu",
            data:whEkspedisinotExist
        })
    }

    // console.log(valdateOrg)
    body.result = valdateOrg

    next();
}


module.exports = {MDwhVendroCreate , MDwhVendorUpdate}