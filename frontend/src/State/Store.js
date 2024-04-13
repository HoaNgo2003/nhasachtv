import{applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { thunk} from "redux-thunk"
import { authReducer } from "./Auth/Reducer"
import { customerProductReducer } from "./Product/Reducer"
import { cartReducer } from "./Cart/Reducer"
import { orderReducer } from "./Order/Reducer"
import { reviewReducer } from "./Review/Reducer"
import { paymentReducer } from "./Payment/Reducer"
import { adminOrderReducer } from "./Admin/Order/Reducer"
const rootReducers = combineReducers({
    auth:authReducer,
    product: customerProductReducer,
    cart: cartReducer,
    order: orderReducer,
    review: reviewReducer, 
    payment: paymentReducer,
    adminOrder: adminOrderReducer
})
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk)) 