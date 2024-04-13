import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType";

const initialState = {
    payment: null,
    loading: false,
    error: null
}
export const paymentReducer = (state=initialState, action)=>{
    switch (action.type) {
        case CREATE_PAYMENT_REQUEST:
        case UPDATE_PAYMENT_REQUEST:
            return {
                ...state,
                loading: true,
                
            }
        case CREATE_PAYMENT_SUCCESS:
        case UPDATE_PAYMENT_SUCCESS:
            return {
                ...state,
                payment: action.payload,
                loading:false
            }
        case CREATE_PAYMENT_FAILURE:
        case UPDATE_PAYMENT_FAILURE:
            return{
                ...state,
                error: action.payload
            }
            
    
        default:
            return state;
    }
}