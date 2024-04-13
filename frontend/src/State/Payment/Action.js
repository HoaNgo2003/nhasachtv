import { API_BASE_URL, api } from "../../config/apiConfig";
import { CREATE_ORDER_REQUEST } from "../Order/OrderType"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType";
export const creatPayment = (orderId)=>async(dispatch)=>{
    dispatch({type:CREATE_ORDER_REQUEST});
    try {
        const {data} = await api.post(`/api/payments/${orderId}`,
    {})
    dispatch({type:CREATE_PAYMENT_SUCCESS, payload:data})
   
    
     
    } catch (error) {
        dispatch({type:CREATE_PAYMENT_FAILURE, payload: error.message})
    }
}
export const updatePayment = (reqData)=> async(dispatch)=>{
    dispatch({type:UPDATE_PAYMENT_REQUEST});
    try {
        const {data} = await api.get(`/api/payments?paymentId=${reqData.paymentId}&orderId=${reqData.orderId}`);
        dispatch({type:UPDATE_PAYMENT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE, payload: error.message})
    }
}
 