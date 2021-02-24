/**
 * @author lepek13
 * controller get location provinsi-latitude
 */

const masterdb = require('../../models/Master_location');
const Sequelize = require('sequelize')

const LocationController = () => {
    
    const getProvinsi = async(req, res) => {
        let data = await masterdb.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('provinsi')) ,'provinsi'],
            ]
        })

        return res.json({
            success:true,
            data
        })
    }

    const getKabupaten = async(req, res) => {
        const {provinsi} = req.query
        let data = await masterdb
          .findAll({
            where:{
              provinsi
            },
            attributes: [
                    [Sequelize.fn('DISTINCT', Sequelize.col('kabupaten')) ,'kabupaten'],
                ]
          });

        if (data.length < 1) {
            return res.status(404).json({
                success:false,
                msg:"data not found"
            })
        }

        return res.json({ 
            success:true, data
        });
    }

    const getKecamatan = async(req, res) => {
        let {provinsi, kabupaten } = req.query
        
        let data = await masterdb
            .findAll({
                raw: true,
                attributes: [
                        [Sequelize.fn('DISTINCT', Sequelize.col('kecamatan')) ,'kecamatan'],
                    ],

                where : {
                    provinsi,
                    kabupaten
                }
            });
        
        if (data.length < 1) {
            return res.status(404).json({
                success:false,
                msg:"data not found"
            })
        }  
          
        return res.json({success:true, data});
    }

    const getKelurahan = async(req, res) => {
        let {provinsi, kabupaten, kecamatan } = req.query

        let data = await masterdb
            .findAll({
                raw:true,
                attributes: [
                    'id', 'provinsi', 'kabupaten', 'kecamatan', 'kelurahan', 'kodepos', 'latitude', 'longitude', 'cluster'
                        
                    ],

                where : {
                    provinsi,
                    kabupaten,
                    kecamatan
                }
            });

        if (data.length < 1) {
            return res.status(404).json({
                success:false,
                msg:"data not found"
            })
        }  
            
        return res.json({success:true, data});    

    }

    return {
        getProvinsi,
        getKabupaten,
        getKecamatan,
        getKelurahan
    }
    
}

module.exports = LocationController