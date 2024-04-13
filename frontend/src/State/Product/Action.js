import { API_BASE_URL, api } from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";


export const findProducts = ()=>async(dispatch)=>{
    dispatch({type: FIND_PRODUCT_REQUEST})
    try {
        const {data} = await api.get('/api/products');
         
        dispatch({type:FIND_PRODUCT_SUCCESS, payload:data});
        console.log(data)
    } catch (error) {
        dispatch({type:FIND_PRODUCT_FAILURE, payload:error.message});
        
    }
}
export const findProductsById = (reqData)=>async(dispatch)=>{
    const {productId} = reqData;
    dispatch({type: FIND_PRODUCT_BY_ID_REQUEST})
    try {
        const {data} = await  api.get(`/api/products/id/${productId}`);
        dispatch({type:FIND_PRODUCT_BY_ID_SUCESS, payload:data});

    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:error.message});
        
    }
}
export const createProduct = (product)=>async(dispatch)=>{
        try {
            dispatch({type:CREATE_PRODUCT_REQUEST})
            const {data} = await api.post(`${API_BASE_URL}/api/admin/products`, product);
            dispatch({type:CREATE_PRODUCT_SUCCESS, payload:data})
        } catch (error) {
        dispatch({type:CREATE_PRODUCT_FAILURE, payload:error.message});
            
        }
}
export const deleteProduct = (productId)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_PRODUCT_REQUEST})
        const {data} = await api.delete(`${API_BASE_URL}/api/admin/products/${productId}`);
        dispatch({type:DELETE_PRODUCT_SUCCESS, payload:productId})
    } catch (error) {
    dispatch({type:DELETE_PRODUCT_FAILURE, payload:error.message});
        
    }
}