import axios from "axios";
const base_url = "http://localhost:8080/users/"
const registerUser = async (user: any) => {
    return axios.post(`${base_url}register`, user)
        .then(res => res.data)
        .catch(error => { throw error; })
}

const loginUser = async (login: any) => {
    return axios.post(`${base_url}login`, login)
        .then(res => res.data)
        .catch(error => { throw error; })
}

const sendOtp=async(email:any)=>{
    return axios.post(`${base_url}send-otp/${email}`)
    .then(res=>res.data)
    .catch(error=>{throw error;})
}

const verifyOtp=async(email:any, otp:any)=>{
    return axios.get(`${base_url}verify-otp/${email}/${otp}`)
    .then(res=>res.data)
    .catch(error=>{throw error;})
}

const changePassword=async(email:any, password:any)=>{
    return axios.put(`${base_url}change-password`,{email,password})
    .then(res=>res.data)
    .catch(error=>{throw error;})
}

export { registerUser, loginUser, sendOtp, verifyOtp, changePassword};