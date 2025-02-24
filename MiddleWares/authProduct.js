const authProduct = (req,res,next) =>{
    const {name,price,category} = req.body
    if(!name || !price || !category){
        return res.status(400).json({
            error:"Product name,price and category are required"
        })
    }
    next()
}


module.exports = authProduct