const Payment = require("../models/payment.model.js");
const orderService = require("./order.services.js")
const creatPayment = async(orderId)=>{
    try {
        const order = await orderService.findOrderById(orderId);
        const paymentRequest = new Payment({
            totalPrice: order.price,
            totalItem: order.quanity,
            user: order.user,          
            order
        })
       const paymentCreate=  await paymentRequest.save();
       return paymentCreate;
    } catch (error) {
        throw new Error(error.message)

    }
}
const findPaymentById = async(paymentId)=>{
    const payment = await Payment.findById(paymentId).populate("orders");
    return payment;
}
const updatePaymentInformation = async (reqData)=>{
    const paymentId = requestData.paymentId;
    const orderId = reqData.orderId;
    try {
        const order = await orderService.findOrderById(orderId);
        const payment = await findPaymentById(paymentId);
        order.paymentDetails.paymentId = paymentId;
        order.paymentDetails.paymentStatus="COMPLETED";
        order.orderStatus ="XAC NHAN DON HANG"
        await order.save()
        const resData ={
            message:"Dat hang thanh cong",
            success:true
        }
        return resData;
        
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports = {
    creatPayment,
    updatePaymentInformation
}