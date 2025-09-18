import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import HardwareScore from './HardwareScore';
import PracticeInterview from './PracticeInterview';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hardware-score" element={<HardwareScore />} />
        <Route path="/practice" element={<PracticeInterview />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
