import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };
  const checkTokenExpire = () => {};
  const checkLogin = () => {
    if (!user) return false;
    if (!checkTokenExpire) return false;

    return false;
  };
  return (
    <AuthContext.Provider
      value={{ user, login, logout, checkTokenExpire, checkLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
