import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //const [user, setUser] = UseStorageState("usuario",null);
  
  const [user, setUser] = useState(() => {
    // Recuperar usuario desde localStorage si existe
    return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;
  });

  // guardar en localStorage la ssion
  const login = (userData) => {
    setUser(userData);
    //para convertirlo en cadena json JSON.stringify
    sessionStorage.setItem('user', JSON.stringify(userData)); 
  };

  // Eliminar del almacenamiento
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user'); 
  };
  //const login = (userData) => setUser(userData);
  //const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
