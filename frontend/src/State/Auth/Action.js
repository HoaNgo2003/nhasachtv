import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTYpe";
const registerRequest = ()=>({type:REGISTER_REQUEST});
const registerSuccess = (user)=>({type:REGISTER_SUCCESS, payload:user});
const registerFailure = (error)=>({type:REGISTER_FAILURE, payload: error});
const loginRequest = ()=>({type:LOGIN_REQUEST});
const loginSuccess = (user)=>({type:LOGIN_SUCCESS, payload:user});
const loginFailure = (error)=>({type:LOGIN_FAILURE, payload: error});
const token = localStorage.getItem("jwt");
export const register = (userData) => async (dispath)=>{
    dispath(registerRequest());
    try {
        // console.log(userData)
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const user= response.data;
        if(user.jwt){
            localStorage.setItem("jwt", user.jwt);
        }
        
        // conso/le.log(user)

        dispath(registerSuccess(user.jwt));
    } catch (error) {
        dispath(registerFailure(error.message))
    }
}
export const login = (userData) => async (dispath)=>{
    dispath(loginRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
        const user= response.data;
        if(user.jwt){
            localStorage.setItem("jwt", user.jwt);
        }
        console.log(user)

        dispath(loginSuccess(user.jwt));
    } catch (error) {
        dispath(loginFailure(error.message))
    }
}
const getUserRequest = ()=>({type:GET_USER_REQUEST});
const getUserSuccess = (user)=>({type:GET_USER_SUCCESS, payload:user});
const getUserFailure = (error)=>({type:GET_USER_FAILURE, payload: error});
export const getUSer = (jwt) => async (dispath)=>{
    dispath(getUserRequest());
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers:{
                "Authorization": `Bearer ${jwt}`
            }
        });
        const user= response.data;
        // console.log(user)
        dispath(getUserSuccess(user));
    } catch (error) {
        dispath(getUserFailure(error.message))
    }
}
export const logout = ()=>(dispath)=>{
    dispath({type:LOGOUT, payload:null})
}