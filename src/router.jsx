import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import App from './App';
import Profile from './Profile';
import HardwareScore from './HardwareScore';
import PracticeInterview from './PracticeInterview';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';

function AppRouter() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/hardware-score" 
            element={
              <ProtectedRoute>
                <HardwareScore />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/practice" 
            element={
              <ProtectedRoute>
                <PracticeInterview />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/user-profile" 
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/analytics" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppRouter;
