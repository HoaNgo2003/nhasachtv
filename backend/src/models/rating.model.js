const mongoose =require("mongoose")

const { Schema } = mongoose;
const ratingSchema = new  Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        require: true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products',
        require: true
    },
    rating:{
        type: Number,
        require: true
    },
    creatAt:{
        type: Date,
        default: Date.now()
    }
})
const Rating = mongoose.model('ratings', ratingSchema);
module.exports = Rating;
 