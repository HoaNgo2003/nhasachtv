import { api } from "../../config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_BY_USER_FAILURE, GET_ORDER_BY_USER_REQUEST, GET_ORDER_BY_USER_SUCCESS } from "./OrderType";
export const createOrder = (reqData) => async(dispatch)=>{
    dispatch({type:CREATE_ORDER_REQUEST})
    console.log(reqData);
    try {
        const {data} = await api.post(
            `/api/orders/`,
            reqData.address
        );
        console.log(data)
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })
        if(data._id){
            reqData.navigate({search:`step=3&order_id=${data._id}`});
        }

        
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: error.message
        })
    }
}
export const getOrderById = (orderId) => async(dispatch)=>{
    dispatch({type:GET_ORDER_BY_ID_REQUEST})
    // console.log(reqData);
    try {
        const {data} = await api.get(
            `/api/orders/${orderId}`
            // reqData.address
        );
         console.log("order by id", data)
        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload: error.message
        })
    }
}
export const getOrderUser = (user) => async(dispatch)=>{
    dispatch({type: GET_ORDER_BY_USER_REQUEST})
    try {
        const {data} = await api.get(`/api/orders/user`)
        dispatch({
            type:GET_ORDER_BY_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ORDER_BY_USER_FAILURE,
            payload: error.message
        })
    }
}