export interface SignupDataRequest {
  email: string;
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

export interface EventResponse {
  id: string;
  title: string;
  date: string;
  description: string;
  latitude: number;
  longitude: number;
  location: string;
}
