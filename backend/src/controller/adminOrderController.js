const orderService = require("../services/order.services.js");
const getAllOrders = async(req, res)=>{
    try {
        const orders= await orderService.getAllOrders();
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const confirmOrders = async(req, res)=>{
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.confirmOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
}
const shipOrders = async(req, res)=>{
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.shipOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
}
const deliveryOrders = async(req, res)=>{
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deliveryOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
}
const cancelOrder = async(req, res)=>{
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.cancelOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
}
const deleteOrder = async(req, res)=>{
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deleteOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
}
module.exports = {
    getAllOrders,
    confirmOrders,
    shipOrders,
    deleteOrder,
    cancelOrder,
    deliveryOrders
}