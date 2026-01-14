export interface SignupDataRequest {
  email: string;
  name?: string; // Optional if your form has a name field
  password: string;
}

export interface SignUpResponse {
  id: number;
  name?: string;
  email: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginDataRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
  };
}
