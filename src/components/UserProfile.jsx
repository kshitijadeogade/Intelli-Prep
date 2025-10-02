import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './UserProfile.css';

const UserProfile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    education: '',
    experience: '',
    skills: '',
    bio: ''
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        username: user.username || '',
        email: user.email || '',
        phone: user.phone || '',
        dateOfBirth: user.dateOfBirth || '',
        education: user.education || '',
        experience: user.experience || '',
        skills: user.skills || '',
        bio: user.bio || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // In a real app, this would call an API to update the user profile
      await updateProfile(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    // Reset form data to original user data
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        username: user.username || '',
        email: user.email || '',
        phone: user.phone || '',
        dateOfBirth: user.dateOfBirth || '',
        education: user.education || '',
        experience: user.experience || '',
        skills: user.skills || '',
        bio: user.bio || ''
      });
    }
    setIsEditing(false);
  };

  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-circle">
            {user?.firstName?.[0]}{user?.lastName?.[0]}
          </div>
        </div>
        <div className="profile-info">
          <h1>{user?.firstName} {user?.lastName}</h1>
          <p className="username">@{user?.username}</p>
          <p className="email">{user?.email}</p>
        </div>
        <div className="profile-actions">
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              Edit Profile
            </button>
          ) : (
            <div className="action-buttons">
              <button onClick={handleSave} disabled={isSaving} className="save-btn">
                {isSaving ? 'Saving...' : 'Save'}
              </button>
              <button onClick={handleCancel} className="cancel-btn">
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>First Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="profile-input"
                />
              ) : (
                <div className="profile-value">{formData.firstName || 'Not provided'}</div>
              )}
            </div>

            <div className="form-group">
              <label>Last Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="profile-input"
                />
              ) : (
                <div className="profile-value">{formData.lastName || 'Not provided'}</div>
              )}
            </div>

            <div className="form-group">
              <label>Username</label>
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="profile-input"
                />
              ) : (
                <div className="profile-value">{formData.username || 'Not provided'}</div>
              )}
            </div>

            <div className="form-group">
              <label>Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="profile-input"
                />
              ) : (
                <div className="profile-value">{formData.email || 'Not provided'}</div>
              )}
            </div>

            <div className="form-group">
              <label>Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="profile-input"
                  placeholder="Enter your phone number"
                />
              ) : (
                <div className="profile-value">{formData.phone || 'Not provided'}</div>
              )}
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              {isEditing ? (
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="profile-input"
                />
              ) : (
                <div className="profile-value">{formData.dateOfBirth || 'Not provided'}</div>
              )}
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Professional Information</h2>
          <div className="form-grid">
            <div className="form-group full-width">
              <label>Education</label>
              {isEditing ? (
                <textarea
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="profile-textarea"
                  placeholder="Enter your educational background"
                  rows="3"
                />
              ) : (
                <div className="profile-value">{formData.education || 'Not provided'}</div>
              )}
            </div>

            <div className="form-group full-width">
              <label>Experience</label>
              {isEditing ? (
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="profile-textarea"
                  placeholder="Enter your work experience"
                  rows="3"
                />
              ) : (
                <div className="profile-value">{formData.experience || 'Not provided'}</div>
              )}
            </div>

            <div className="form-group full-width">
              <label>Skills</label>
              {isEditing ? (
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="profile-textarea"
                  placeholder="Enter your skills (comma separated)"
                  rows="2"
                />
              ) : (
                <div className="profile-value">{formData.skills || 'Not provided'}</div>
              )}
            </div>

            <div className="form-group full-width">
              <label>Bio</label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="profile-textarea"
                  placeholder="Tell us about yourself"
                  rows="4"
                />
              ) : (
                <div className="profile-value">{formData.bio || 'Not provided'}</div>
              )}
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Interview Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Interviews Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Total Practice Hours</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">--</div>
              <div className="stat-label">Average Score</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">--</div>
              <div className="stat-label">Best Performance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;