const mongoose =require("mongoose")

const { Schema } = mongoose;
const AddressSchema = new  Schema({
    firstName:{
        type: String, 
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    diachi:{
        type: String,
        require: true
    }, 
    sodienthoai:{
        type: String,
        require: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        require: true
    }

})
const Address = mongoose.model("addresses", AddressSchema);
module.exports = Address;