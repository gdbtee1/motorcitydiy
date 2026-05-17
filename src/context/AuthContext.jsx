import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signup = (email) => {
    setUser({
      email,
      plan: "Free",
    });
  };

  const login = (email) => {
    setUser({
      email,
      plan: "Free",
    });
  };

  const logout = () => {
    setUser(null);
  };

  const upgradePlan = (plan) => {
    setUser((prev) => ({
      ...prev,
      plan,
    }));
  };

  return (
    <AuthContext.Provider
      value={{ user, signup, login, logout, upgradePlan }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);