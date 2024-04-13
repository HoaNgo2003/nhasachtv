const paymentService = require("../services/paymentservice.js")
const createPayment = async(req, res)=>{
    try {
        const payment = await paymentService.creatPayment(req.params.id);
        return res.status(200).send(payment);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const updatePaymentInfo = async(req, res)=>{
    try {
        await paymentService.updatePaymentInformation(req.query);
        return res.status(200).send({message:"payment infor update", success:true});

    } catch (error) {
        return res.status(500).send(error.message);
        
    }
}
module.exports = {
    createPayment,
    updatePaymentInfo
}