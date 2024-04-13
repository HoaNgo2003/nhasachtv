const mongoose = require("mongoose");
const {Schema} = mongoose;
const paymentSchema = new Schema({
    totalItem:{
        type: Number,
        require: true,
    },
    order:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"orders" 
        }
    ],
    totalPrice:{
        type: Number,
        require: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
    
    

})
const Payment = mongoose.model("payment", paymentSchema)
module.exports = Payment