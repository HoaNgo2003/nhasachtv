import { CREATE_REVIEW_FAILURE, CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, GET_REVIEW_FAILURE, GET_REVIEW_REQUEST, GET_REVIEW_SUCCESS } from "./ActionType";

const initialState = {
    reviews : [],
    review : [],
    error: null,
    loading: false
}
export const reviewReducer = (state=initialState, action)=>{
    switch (action.type) {
        case CREATE_REVIEW_REQUEST:
        case GET_REVIEW_REQUEST:
            return{
                ...state,
                loading: true,
                error: null
            }
        case CREATE_REVIEW_SUCCESS:
            return{
                ...state,
                loading: false,
                review: action.payload,
                error: null
            }
        case CREATE_REVIEW_FAILURE:
        case GET_REVIEW_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                reviews: action.payload,
                error: null
            }
            
             
    
        default:
            return state;
    }
}