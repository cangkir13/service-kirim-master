/**
 * @author lepek13
 * @param req.body (json) array object
 * [{
 *      "provinsi":"string", "kabupaten":"string",
 *      "kecamatan":"string", "kelurahan":"sting",
 *      "kodepos":"number", "cluster":"bolean",
 *      "latitude":"number", "longitude":"number" 
 * }]
 */
const Master_location = require("../../models/Master_location")

const LocActionController = () => {
    const store_arr = async(req, res) => {
        const {body} = req

        await Master_location.bulkCreate(body)

        return res.json({
            success:true,
            data:body
        })
    }

    return {
        store_arr
    }
}

module.exports = LocActionController