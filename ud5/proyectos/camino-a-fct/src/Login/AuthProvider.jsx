import React, { createContext, useContext, useState } from 'react';
// createContext => Se usa para crear un contexto, que nos permitirá compartir información de autenticación entre distintos componentes.
// useContext => Permite acceder al contexto desde cualquier componente.


//Se crea el contexto AuthContext, que almacenará la información de autenticación (usuario, login, logout).
const AuthContext = createContext();


// AuthProvider es un componente proveedor que envolverá a otros componentes y les permitirá acceder al contexto.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Recuperar usuario desde localStorage si existe
    return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;
  });

  const [admin, setAdmin] = useState(() => {
    // Recuperar usuario desde localStorage si existe
    return sessionStorage.getItem('administrador') ? JSON.parse(sessionStorage.getItem('administrador')) : null;
  });

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

  const loginNoLogeada = (userData) => setUser(userData);

  const loginOutNoLogeada = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout ,loginNoLogeada,loginOutNoLogeada}}>
      {children}
    </AuthContext.Provider>
  );
};

//es un custom hook que facilita el acceso al contexto de autenticación.
export const useAuth = () => useContext(AuthContext);
