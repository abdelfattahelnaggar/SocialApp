import axios from "axios";

export async function signupUser(formData){
    try {
        const API = `${import.meta.env.VITE_BASE_URL}/users/signup`
        const {data} = await axios.post(API, formData)
        return data
    } catch (error) {
        console.error("Signup Error:", error);
        throw error;
    }
}