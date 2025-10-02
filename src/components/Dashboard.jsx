import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Welcome to Intelliprep Dashboard</h1>
          <div className="user-info">
            <span>Hello, {user?.firstName} {user?.lastName}!</span>
            <button onClick={handleLogout} className="logout-btn-header">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="welcome-section">
          <div className="welcome-card">
            <h2>Dashboard Overview</h2>
            <p>Welcome to your personalized Intelliprep dashboard. Here you can practice interviews, check your hardware score, and manage your profile.</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">🎯</div>
            <h3>Practice Interview</h3>
            <p>Start your AI-powered mock interview session with real-time feedback and analysis.</p>
            <Link to="/practice" className="card-button">
              Start Practice
            </Link>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📊</div>
            <h3>Hardware Score</h3>
            <p>View your hardware performance metrics and IoT device connectivity status.</p>
            <Link to="/hardware-score" className="card-button">
              View Score
            </Link>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">👤</div>
            <h3>Profile</h3>
            <p>Manage your personal information, view your progress, and update your settings.</p>
            <Link to="/user-profile" className="card-button">
              View Profile
            </Link>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📈</div>
            <h3>Progress Analytics</h3>
            <p>Track your improvement over time with detailed performance analytics.</p>
            <Link to="/analytics" className="card-button">
              View Analytics
            </Link>
          </div>
        </div>

        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-icon">🎤</span>
              <div className="activity-content">
                <p><strong>Last Interview Session</strong></p>
                <span className="activity-date">No sessions yet - Start your first practice!</span>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">🔧</span>
              <div className="activity-content">
                <p><strong>Hardware Status</strong></p>
                <span className="activity-date">Ready for connection</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;