import { api } from "../../config/apiConfig";
import { CREATE_REVIEW_FAILURE, CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, GET_REVIEW_FAILURE, GET_REVIEW_REQUEST, GET_REVIEW_SUCCESS } from "./ActionType"

export const createReview = (reqData) => async(dispatch)=>{
    dispatch({type: CREATE_REVIEW_REQUEST});
    try {
        console.log(reqData)
        const {data} = api.post(
            `/api/reviews/create/`,
            reqData
        );
        console.log(data)
        dispatch({type: CREATE_REVIEW_SUCCESS, payload:data});

        
    } catch (error) {
        dispatch({
            type: CREATE_REVIEW_FAILURE,
            payload: error.message
        })
    }
}
export const getAllReview = (productId)=>async(dispatch)=>{
    dispatch({type: GET_REVIEW_REQUEST});
    try {
        const {data} = await api.get(
            `/api/reviews/product/${productId}`
        )
        console.log(data);
        dispatch({type: GET_REVIEW_SUCCESS, payload:data})
    } catch (error) {
        dispatch({
            type:GET_REVIEW_FAILURE,
            payload: error.message
        })
    }
}