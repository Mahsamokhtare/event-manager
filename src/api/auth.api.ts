import type { LoginDataRequest, LoginResponse, SignupDataRequest } from "../features/types/auth.types";
import { api } from "./axios";

export const signup = (data: SignupDataRequest) => api.post("/users", data);
export const login = async (data: LoginDataRequest) => {
  console.log("LOGIN DATA SENT:", data);
  const res = await api.post<LoginResponse>("/auth/login", data);
  return res.data;
};
