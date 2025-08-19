import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    const response = await API.post("/login", credentials);
    return response.data.data; // já devolve { success, message, user }
  } catch (error: any) {
    // lança erro para o front tratar
    throw error.response?.data?.data || { success: false, message: "Network error" };
  }
};

// Função de cadastro
export const signupUser = async (user: {
  fullName: string;
  email: string;
  password: string;
  dateOfBirth: string;
}) => {
  const response = await API.post("/signup", user);
  return response; // { success, message, user }
};

export default API;
