import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const contextvalue = {
    user,
    login(data) {
      setUser(data);
    },
    logout() {
      setUser(null);
    },
    islogged() {
      return !!user;
    },
  };

  return (
    <AuthContext.Provider value={contextvalue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
