/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { login } from "../api/auth.api";
interface AuthContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  isAuthenticated: boolean;
  loginUser: (data: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

interface Props {
  children: ReactNode;
}
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const loginUser = async (data: { email: string; password: string }) => {
    const res = await login(data);
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
    setUser(res.user);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loginUser, logout }}>{children}</AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
