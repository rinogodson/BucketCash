import api from "./api";


export const registerUser = async (userData) => {
  try {
   const response = await api.post('/api/auth/register', userData)
    return response.data
  } catch (error) {
    console.log("Registration error :\(")
  }
}
