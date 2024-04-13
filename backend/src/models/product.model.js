const mongoose =require("mongoose")

const { Schema } = mongoose;
const productSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true

    },
    discount:{
        type: Number,
        require: true
    },
    quanity:{
        type: Number,
        require: true,
    },
    brand:{
        type: String,
        require: true
    },
    imageUrl:{
        type: String,
    },
    ratings:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'ratings'
        }
    ],
    reviews:[
        {
            
            type: mongoose.Schema.Types.ObjectId,
            ref:'reviews'
        }
    ],
    numRatings:{
        type: Number,
        default: 0
    },
    danhmuc:{
        type:String
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'categories'
    },
    creatAt:{
        type: Date,
        default: Date.now()
    }
})
const Product = mongoose.model('products', productSchema);
module.exports = Product