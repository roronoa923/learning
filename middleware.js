const mid1 = async (req,res,next)=>{
    return res.json({Message:"Boom this is a middleware"})
    next()
}
module.exports = { mid1 };