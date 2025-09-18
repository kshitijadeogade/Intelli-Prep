import React, { useState } from 'react';

function PracticeInterview() {
  const [resume, setResume] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [options, setOptions] = useState({
    resume: false,
    position: false,
    company: false,
    questionType: false,
  });

  React.useEffect(() => {
    setTimeout(() => setShowForm(true), 300);
  }, []);

  const handleOptionChange = (e) => {
    setOptions({ ...options, [e.target.name]: e.target.checked });
  };

  return (
    <div className="practice-page">
      <h2 className="practice-title">Practice Interview</h2>
      <div className={`practice-form-card ${showForm ? 'show' : ''}`}>
        <form className="practice-form">
          <div className="practice-checkboxes">
            <label>
              <input type="checkbox" name="resume" checked={options.resume} onChange={handleOptionChange} /> Practice using Resume
            </label>
            <label>
              <input type="checkbox" name="position" checked={options.profile} onChange={handleOptionChange} /> Practice by Profile
            </label>
            <label>
              <input type="checkbox" name="company" checked={options.company} onChange={handleOptionChange} /> Practice by Company
            </label>
            <label>
              <input type="checkbox" name="questionType" checked={options.questionType} onChange={handleOptionChange} /> Practice by Question Type
            </label>
          </div>
          {options.resume && (
            <label className="practice-label">
              Upload Resume:
              <input type="file" accept=".pdf,.doc,.docx" className="practice-input" onChange={e => setResume(e.target.value)} />
            </label>
          )}
          {options.position && (
            <label className="practice-label">
              Select Position:
              <select value={position} className="practice-input" onChange={e => setPosition(e.target.value)}>
                <option value="">Choose...</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Other">Other</option>
              </select>
            </label>
          )}
          {options.company && (
            <label className="practice-label">
              Select Company:
              <input type="text" className="practice-input" placeholder="e.g. Google, Amazon" value={company} onChange={e => setCompany(e.target.value)} />
            </label>
          )}
          {options.questionType && (
            <label className="practice-label">
              Select Question Type:
              <select value={questionType} className="practice-input" onChange={e => setQuestionType(e.target.value)}>
                <option value="">Choose...</option>
                <option value="Technical">Technical</option>
                <option value="HR">HR</option>
                <option value="Behavioral">Behavioral</option>
                <option value="Other">Other</option>
              </select>
            </label>
          )}
          <button type="submit" className="practice-btn">Start Practice</button>
        </form>
      </div>
    </div>
  );
}

export default PracticeInterview;
