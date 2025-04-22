import React, { createContext, useState, useEffect, useCallback } from 'react';


import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('bucketcash_token'));
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);


  const saveToken = (newToken, userData) => {
    setToken(newToken);
    setUser(userData);
    localStorage.setItem('bucketcash_user', JSON.stringify(userData))
    localStorage.setItem('bucketcash_token', newToken);

    if (newToken) {
      api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    }
    else {
      delete api.defaults.headers.common['Authorization'];
    }
    setErr(null)
  }


  const removeToken = useCallback(() => {
    setToken(null);
    setUser({});
    localStorage.removeItem('bucketcash_token');
    localStorage.removeItem('bucketcash_user');
    delete api.defaults.headers.common['Authorization'];
    console.log("logged out successfully")

  }, []);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else {
      delete api.defaults.headers.common['Authorization'];
    }
  }, [token])

  const loginAction = async (credentials) => {
    setIsLoading(true);
    setErr(null)
    try {
      const response = await api.post('/api/auth/login', credentials);
      if (response.data.token) {
        saveToken(response.data.token, response.data.username);
        console.log(response.data.username)
        console.log("Logged in successfully")
        return true;
      }
      setIsLoading(false);
    } catch (error) {
      setErr(error.response.data.message);
      setIsLoading(false);
      removeToken();
      return false
    }
  }

  const logoutAction = () => {
    removeToken();
  }

  const value = {
    token,
    user,
    isLoading,
    err,
    setErr,
    loginAction,
    logoutAction,
    saveToken,
    removeToken
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
