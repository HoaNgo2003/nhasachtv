import axois from "axios"
export const jwt = localStorage.getItem("jwt")
export const API_BASE_URL = "http://localhost:4000"
export const api = axois.create({
    baseURL: API_BASE_URL,
    headers:{
        "Authorization": `Bearer ${jwt}`,
        'Content-Type':'application/json'
    }
})