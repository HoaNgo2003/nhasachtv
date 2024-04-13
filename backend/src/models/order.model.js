const mongoose =require("mongoose")

const { Schema } = mongoose;
const orderSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    orderItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"orderItem"
    }],
    orderDate:{
        type: Date,
        require: true,
        default: Date.now()
    },
    deliveryDate:{
        type: Date,
    },
    diachi:{
        type: String
    },
    tennguoinhan:{
        type: String
    },
    giaohangAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'addresses'
    },
    paymentDetails:{
        paymentMethod:{
            type:String,
        },
        transactionId:{
            type: String,
        },
        paymentId:{
            type: String
        },
        paymentStatus:{
            type: String,
            default:"DANG XU LY"
        }
    },
    total:{
        type: Number,
        require: true
    },
    discount:{
        type: Number,
        require: true
    },
    orderStatus:{
        type: String,
        require: true,
    },
    totalItem:{
        type: Number,
        require: true,
    },
    creatAt:{
        type: Date,
        default: Date.now()
    }


})
const Order = mongoose.model("orders", orderSchema);
module.exports = Order;