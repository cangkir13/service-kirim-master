/**
 * @author lepek13
 * *getOriginNears* get warehouse nears from destination (member) ,
 * *getMMwarehouse* get detail member location and
 * warehouse (with ekspdisi and listing availabel ekspedisi) 
 */

const geolib = require('geolib')

const Master_location = require("../../models/Master_location")
const Master_member = require("../../models/Master_member")
const Master_warehouse = require("../../models/Master_warehouse")
const Master_ekspedisi = require("../../models/Master_ekspedisi")
const Master_warehouse_ekspedisi = require("../../models/Master_warehouse_ekspedisi")

const attributesMM = [
    'id_member', 'jenis_alamat',
    'email', 'telp', 'alamat', 'nama_penerima',
]

const attributesLoc = [
    'provinsi', 'tipe', 'kabupaten',
    'kecamatan', 'kelurahan', 'kodepos', 
    'latitude', 'longitude', 'cluster'
]

let vendor_attributes = [
    'origin_code', 'is_cod', 'status'
]

let ekspedisi_attributes = [
    'name', 'label', 'image_url',
    'is_cod', 'status'
]

let warehouse_attributes = [
    'whcd', 'loccd', 'wh_head', 'fullnm',
    'address', 'tel_hp', 'email', 'bus_open',
    'bus_close', 'is_warehouse', 'is_stockist',
    'status', 'is_cod'
]


const MMWHController = () => {
    
    /**
     * @method GET
     * @route domain.com/api/master/member/nears?id_member={id_member}&jenis_alamat={jenis_alamat}
     * @param {id_member, jenis_alamat}
     */
    const getOriginNears = async(req, res) => {

        const {id_member, jenis_alamat} = req.query

        let datamember = await Master_member.findOne({
            where:{
                id_member,
                jenis_alamat
            },
            attributes:attributesMM,
            include:[
                {
                    model:Master_location,
                    as:"location",
                    attributes:attributesLoc
                }
            ]
        })

        if (!datamember) {
            return res.status(404).json({
                success:false,
                msg:"Member not found"
            })
        }

        let datawarehouse = await Master_warehouse.findAll({
            where:{
                status:1
            },
            attributes:warehouse_attributes,
            include:[
                {
                    model:Master_location,
                    as:"location",
                }
            ]
        })

        datawarehouse = datawarehouse.map((el) => {
            let data = {
                ...el['dataValues'], 
                ...el['dataValues'].location['dataValues'],
            }
            delete data.location
            delete data.id
            delete data.cluster
            
            return data
        })
        
        let nears = geolib.orderByDistance(datamember['dataValues'].location['dataValues'], datawarehouse);
        
        return res.json({
            success:true,
            member:datamember,
            warehouse:nears,
        })

    }

    /**
     * @method GET
     * @route domain.com/api/member/warehouse?id_member={id_member}&jenis_alamat={jenis_alamat}&whcd={whcd}&loccd={loccd}
     * @param {id_member, jenis_alamat, loccd, whcd}
     */
    const getMMwarehouse = async(req, res) => {
        const {id_member, jenis_alamat, whcd, loccd} = req.query

        let datamember = await Master_member.findOne({
            where:{
                id_member,
                jenis_alamat
            },
            attributes:attributesMM,
            include:[
                {
                    model:Master_location,
                    as:"location",
                    attributes:attributesLoc
                }
            ]
        })

        if (!datamember) {
            return res.status(404).json({
                success:false,
                msg:"Member not found"
            })
        }

        let datawarehouse = await Master_warehouse.findOne({
            where:{
                whcd, 
                loccd
            },
            attributes:warehouse_attributes,
            include:[
                {
                    model:Master_location,
                    as:"location",
                },
                {
                    model:Master_warehouse_ekspedisi,
                    as:"data_ekspedisi",
                    attributes:vendor_attributes,
                    include:[
                        {
                            model:Master_ekspedisi,
                            as:'detail_ekspedisi',
                            attributes: ekspedisi_attributes
                        }
                    ]
                },
            ]
        });

        if (!datawarehouse) {
            return res.status(404).json({
                success:false,
                msg:"wareouse not found"
            })
        }else if(datawarehouse.status === false){
            return res.status(403).json({
                success:false,
                msg:"wareouse not active"
            })
        } else if (datawarehouse.data_ekspedisi.length < 1) {
            return res.status(422).json({
                success:false,
                msg:"Ekspedisi belum ada untuk warehouse ini silahkan hub admin"
            })
        }

        let data = {
            member:datamember['dataValues'], 
            warehouse:datawarehouse['dataValues']
        }
        
        return res.json({
            success:true,
            data,
        })

    }

    return {
        getOriginNears,
        getMMwarehouse
    }
}

module.exports = MMWHController