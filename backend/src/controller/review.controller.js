const reviewService = require("../services/reviews.services.js");
const creatReview = async(req, res)=>{
    const user = req.user;
    try{
        // console.log(user, req)
        const reviews = await reviewService.createReview(user, req.body);
        // console.log(reviews)
        return res.status(201).send(reviews);
    }catch(error){
        return res.status(500).send({error:error.message})

    }
}
const getAllReview = async(req, res)=>{
    // console.log(req)
    const productId = req.params.productId;
    // console.log(productId)
    try {
        const reviews = await reviewService.getAllReview(productId);
        return res.status(201).send(reviews);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
}
module.exports = {
    creatReview,
    getAllReview
}