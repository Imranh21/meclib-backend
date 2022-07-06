const Request = require("../../models/RequestBook")

const RequestCheck = async (req, res) => {
    const {userid, bookid} = req.query
    try {
        const request = await Request.find({bookId: bookid, userId: userid})
        if(request.length !== 0){
            res.status(200).json({message: "Success", requested: true})
        } else {
            res.status(200).json({requested: false})

        }
    } catch (err){
        console.log(err)
    }
}

module.exports = RequestCheck