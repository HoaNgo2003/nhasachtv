const orderService = require("../services/order.services.js");
const createOrder = async(req, res)=>{
    // console.log(req.user)
    const user = await req.user;
    // console.log(user)
    try {
        let createOrders = await orderService.createOrder(user, req.body);
        res.status(201).send(createOrders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const findOrderById = async(req, res)=>{
    const user = await req.user;
    try {
        // console.log( req.params.id)
        let createOrders = await orderService.findOrderById(req.params.id);
        // console.log(createOrder)
        res.status(201).send(createOrders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const orderHistory = async(req, res)=>{
    const user =  req.user;
    console.log(user)
    try {
        let createOrders = await orderService.usersOrderHistory(user._id, req.body);
        res.status(201).send(createOrders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
module.exports = {
    createOrder,
    findOrderById,
    orderHistory
}