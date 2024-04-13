const MONGODB_URL = "mongodb+srv://hngo34048:Qzr2T8dBykxn4Jd9@cluster0.sns7qkz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoose = require("mongoose")
const connectDb = ()=>{
    return mongoose.connect(MONGODB_URL);

}
module.exports = {connectDb};