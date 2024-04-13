const mongoose = require("mongoose")

const { Schema } = mongoose;
const userSchema = new Schema({
    firstName:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    role:{
        type: String,
         
        default:"CUSTOMER",
    },
    mobile:{
        type:String,
    },
    address:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    paymentInfor:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"addresses"
    }],
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ratings"
        }
    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],
    creatAt:{
        type: Date,
        default: Date.now()
    }
})
const User = mongoose.model("users", userSchema);
module.exports = User