const mongoose =require("mongoose")

const { Schema } = mongoose;
const categorySchema = new  Schema({
    name:{
        type: String,
        require: true,
        maxlength: 50
    }
    
})
const Category = mongoose.model('categories', categorySchema);
module.exports = Category;