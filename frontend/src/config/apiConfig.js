import axois from "axios"
export const jwt = localStorage.getItem("jwt")
export const API_BASE_URL = "https://webbanhang-n7r2.onrender.com"
export const api = axois.create({
    baseURL: API_BASE_URL,
    headers:{
        "Authorization": `Bearer ${jwt}`,
        'Content-Type':'application/json'
    }
})