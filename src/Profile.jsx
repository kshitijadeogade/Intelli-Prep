import React from 'react';

function Profile() {
  // Placeholder values, replace with real data as needed
  const mockInterviews = 12;
  const hardwareChecks = 5;
  const timeSpent = '1h 20m';

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <div className="profile-stats">
        <p><strong>Mock Interviews Attempted:</strong> {mockInterviews}</p>
        <p><strong>Hardware Score Checked:</strong> {hardwareChecks}</p>
        <p><strong>Time Spent Per Day:</strong> {timeSpent}</p>
      </div>
    </div>
  );
}

export default Profile;
