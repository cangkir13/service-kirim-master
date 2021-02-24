/**
 * @author lepek13
 * controller for post/put/get member
 */

const Master_location = require("../../models/Master_location")
const Master_member = require("../../models/Master_member")

const attributesMM = [
    'id_member', 'jenis_alamat',
    'email', 'telp', 'alamat', 'nama_penerima',
]

const attributesLoc = [
    'provinsi', 'tipe', 'kabupaten',
    'kecamatan', 'kelurahan', 'kodepos', 
    'latitude', 'longitude', 'cluster'
]

const MemberController = () => {
    /**
     * @method GET
     * @route domain.com/api/master/member?id_member={id_member}&jenis_alamat={jenis_alamat}
     * @param {whcd, loccd}
     */
    const get = async(req, res) => {
        const {id_member, jenis_alamat} = req.query

        let data = await Master_member.findOne({
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

        if (!data) {
            return res.status(404).json({
                success:false,
                msg:"Member not found"
            })
        }

        return res.json({
            success:true,
            data
        })
    }

    /**
     * @method POST
     * @route domain.com/api/master/member
     * @body {id_member, jenis_almat, nama_penerima, telp, alamat, email, id_location}
     */
    const post = async(req, res) => {

        await Master_member.create(req.body)

        return res.json({
            success:true,
            data:req.body
        })
    }

    /**
     * @method PUT
     * @route domain.com/api/master/member
     * @body {id_member, jenis_almat, nama_penerima, telp, alamat, email, id_location}
     */
    const update = async(req, res) => {

        const {id_member, jenis_alamat } = req.body
        await Master_member.update(req.body, {
            where:{
                id_member, jenis_alamat
            }
        })

        return res.json({
            success:true,
            data:req.body
        })
    }

    return {
        get,
        post,
        update
    }

}

module.exports = MemberController