const Product = require("../models/product.model.js");
const Category = require("../models/category.model.js");
async function createProduct(reqData){
    let category = await Category.findOne({"name": reqData.name})
    const product = new Product({
        title: reqData.title,
        description: reqData.description,
        price: reqData.price,
        discount: reqData.discount,
        quanity: reqData.quanity,
        imageUrl: reqData.imageUrl,
        danhmuc: reqData.danhmuc,
        brand: reqData.brand
    })
    return await product.save();
}
async function deleteProduct(productId){
    const product = await findProductById(productId);
    await Product.findOneAndDelete(product);
    return "Product deleted Successfuly"
}
async function updateProduct(productId, reqData){
    return await Product.findByIdAndUpdate(productId, reqData);
}
async function findProductById(productId){
    const product = await Product.findById(productId)
    .populate("category").exec();
    if(!product){
        throw new Error("Product not found with id");

    }
    return product;
}
async function getAllProducts(reQuery){
    
    const product = await Product.find({})
    return product
}
async function creatMultipleProduct(products){
    for(let product of products){
        await createProduct(product);
    }
}
module.exports ={
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    creatMultipleProduct,
    getAllProducts
}