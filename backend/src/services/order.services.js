const cartService = require("../services/cart.services.js");
const Address = require("../models/address.model.js")
const OrderItem = require("../models/orderItem.model.js")
const Order = require("../models/order.model.js")
async function createOrder(user, shippAddress) {
    console.log(shippAddress)
    let address;
    const sodienthoai = shippAddress.sodienthoai
    if (shippAddress.sodienthoai) {
        let isExist = await Address.findOne({sodienthoai});
        address = isExist;
    } else {
        address = new Address(shippAddress);
        address.user = user;
        // console.log(address)
        await address.save();
        user.address.push(address);
        await user.save();
    }
    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];
    for (const item of cart.cartItem) {
        const orderItem = new OrderItem({
            price: item.price,
            product: item.product,
            quanity: item.quanity,
            discount: item.discount,
           
        })
        const creatOrderItem = await orderItem.save();
        orderItems.push(creatOrderItem);
    }
    const createOrder = new Order({
        user,
        tennguoinhan: shippAddress.firstName+" "+shippAddress.lastName,
        orderItems,
        total: cart.price,
        discount: cart.discount,
        totalItem: cart.totalItem,
        giaohangAddress: address,
        diachi: shippAddress.address
    })
    const saveOrder = await createOrder.save();
    return saveOrder;
}
async function placeOrder(orderId) {
    const order = await findOrderById(orderId);
    order.paymentDetails.paymentStatus = "PLACED";
    order.paymentDetails.paymentStatus = "COMPLETED";
    return await order.save();
}
async function confirmOrder(orderId) {
    const order = await findOrderById(orderId);
    order.paymentDetails.paymentStatus = "XAC NHAN";
    return await order.save();
}
async function shipOrder(orderId) {
    const order = await findOrderById(orderId);
    order.paymentDetails.paymentStatus = "SHIPPED";
    return await order.save();
}
async function deliveryOrder(orderId) {
    const order = await findOrderById(orderId);
    order.paymentDetails.paymentStatus = "DELIVERED";
    return await order.save();
}
async function cancelOrder(orderId) {
    const order = await findOrderById(orderId);
    order.paymentDetails.paymentStatus = "CANCEL";
    return await order.save();
}
async function findOrderById(orderId) {
    // console.log(orderId)
    const order = await Order.findById(orderId)
        .populate({path: "user", populate:{path:"address"}})
        .populate({ path: "orderItems", populate: { path: "product" } })
        .populate("giaohangAddress")
    return order
}
async function usersOrderHistory(userId) {
    try {
        const orders = await Order.find({ user: userId})
            .populate({ path: "orderItems", populate: { path: "product" } })
            // console.log(orders)
        return orders;
        
    } catch (error) {
        throw new Error(error.message)
    }
}
async function getAllOrders() {
    return await Order.find()
        .populate({ path: "orderItems", populate: { path: "product" } })
        .populate("user")
}
async function deleteOrder(orderId) {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id)
}
module.exports = {
    createOrder, placeOrder, confirmOrder, shipOrder, deliveryOrder, deleteOrder
    , getAllOrders, cancelOrder, usersOrderHistory, findOrderById
}
