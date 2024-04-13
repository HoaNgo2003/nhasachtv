const RatingService = require("../services/rating.services.js");
const creatRating = async(req, res)=>{
    const user = req.user;
    try{
        const reviews = RatingService.createRating(req.body,user);
        return res.status(201).send(reviews);
    }catch(error){
        return res.status(500).send({error:error.message})

    }
}
const getAllRating = async(req, res)=>{
    const productId = req.params.productId;
    try {
        const reviews = RatingService.getProductRating(productId);
        return res.status(201).send(reviews);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
}
module.exports = {
    creatRating,
    getAllRating
}