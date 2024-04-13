const Review = require("../models/reviews.model.js");
const productService = require("../services/product.services.js");
async function createReview(user, reqData){
    const product = await productService.findProductById(reqData.productId);
    const review = new Review({
        user: user._id,
        product: product._id, 
        review: reqData.review,
        creatAt: new Date(),
    })
    await product.save();
    return await review.save();
}
async function getAllReview(productId){
    const product = await productService.findProductById(productId);
    return await Review.find({product: productId}).populate("user").sort({creatAt:-1});
}
module.exports = {
    createReview,
    getAllReview
}