import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // API base URL - Update this to match your backend
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

  useEffect(() => {
    console.log('AuthProvider mounted');
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        // Set the token in axios headers
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        // Verify the token with the backend
        const response = await axios.get(`${API_BASE_URL}/auth/verify`);
        setUser(response.data.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (usernameOrEmail, password) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        usernameOrEmail,
        password
      });

      const { token, user: userData } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('token', token);
      
      // Set token in axios headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser(userData);
      setIsAuthenticated(true);
      
      return { success: true, user: userData };
    } catch (error) {
      console.error('Login failed:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Login failed' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);

      const { token, user: newUser } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('token', token);
      
      // Set token in axios headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser(newUser);
      setIsAuthenticated(true);
      
      return { success: true, user: newUser };
    } catch (error) {
      console.error('Signup failed:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Signup failed' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateProfile = async (profileData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/auth/profile`, profileData);
      setUser(response.data.user);
      return { success: true, user: response.data.user };
    } catch (error) {
      console.error('Profile update failed:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Profile update failed' 
      };
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    updateProfile
  };

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        color: '#3b4cca'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;