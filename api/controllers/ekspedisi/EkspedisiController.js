/**
 * @author lepek13
 * controller for get, post, put master ekspedisi
 */

const Master_ekspedisi = require("../../models/Master_ekspedisi")

const EkspedisiController = () => {
    /**
     * @method PUT
     * @route domain.com/api/master/ekspedisi
     */
    const get = async(req, res) => {
        let data = await Master_ekspedisi.findAll()

        data = data.map((el) => {
            let element = el['dataValues']
            delete element.create_at
            delete element.update_at
            delete element.id
            return el
        })

        return res.json({
            success:true,
            data
        })
    }

    /**
     * @method POST
     * @route domain.com/api/master/ekspedisi
     * @body {name, label, image_url, is_cod, status}
     */
    const post = async(req, res) => {

        let ekspedisi = await Master_ekspedisi.findOne({
            where:{
                name:req.body.name
            }
        })

        if(ekspedisi)
        {
            return res.status(403).json({
                success:false,
                msg:"ekspdisi already exist"
            })
        }

        await Master_ekspedisi.create(req.body)
        
        return res.json({
            success:true,
            msg:"Ekpedisi has been added",
            data:req.body
        })
    }

    /**
     * @method PUT
     * @route domain.com/api/master/ekspedisi
     * @body {name, label, image_url, is_cod, status}
     */
    const put = async(req, res) => {
        let ekspdisiname = req.params.name
        
        let ekspdisi = await Master_ekspedisi.findOne({
            where:{
                name:ekspdisiname
            }
        })

        if (!ekspdisi) {
            return res.status(404).json({
                success:false,
                msg:"Ekspedisi not found"
            })
        }

        await Master_ekspedisi.update(req.body, {
            where:{
                name:ekspdisiname
            }
        })

        return res.json({
            success:true,
            msg:"Ekspedisi has been updated",
            data:req.body
        })
    }

    return {
        get,
        post,
        put
    }

}

module.exports = EkspedisiController