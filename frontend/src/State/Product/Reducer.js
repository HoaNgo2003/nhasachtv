import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";

const initialState = {
    products:[],
    product: null,
    loading: false,
    error: null,
    
}
export const customerProductReducer = (state=initialState, action)=>{
    switch (action.type) {
        case FIND_PRODUCT_BY_ID_REQUEST:
        case FIND_PRODUCT_REQUEST:
            return {...state, loading: true, error: null}
        case FIND_PRODUCT_BY_ID_SUCESS:
            return {...state, loading:false, error:null, product:action.payload}
        case FIND_PRODUCT_SUCCESS:
            return {...state, loading:false, error:null, products:action.payload}
        // eslint-disable-next-line no-duplicate-case
        case FIND_PRODUCT_BY_ID_SUCESS:
            return {...state, loading:false, product:action.payload, error: null}
        case FIND_PRODUCT_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return {...state, loading: false, error: action.payload}
        case DELETE_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null,
                products: state.products.map.filter((item)=>item._id!==action.payload)
            }
                    
    
        default:
            return state;
    }
}