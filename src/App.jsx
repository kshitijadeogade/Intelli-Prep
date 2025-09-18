
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="landing-bg">
      <div className="navbar-vertical">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/profile" className="nav-btn">Profile</Link>
        <Link to="/practice" className="nav-btn">Practice</Link>
  <Link to="/hardware-score" className="nav-btn">Score</Link>
      </div>
      <div className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Intelliprep</h1>
            <p className="hero-subtitle">AI & IoT Powered Mock Interview Platform</p>
            <button className="cta-btn">Try Demo</button>
          </div>
          <div className="hero-image">
            {/* Interview-themed image. Replace with your own asset if available. */}
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Interview" className="illustration" />
          </div>
        </div>
        <div className="card-section">
          <div className="info-card">
            <h2>About Intelliprep</h2>
            <p>
              Intelliprep is an innovative platform that leverages Artificial Intelligence and IoT technology to provide realistic mock interview experiences. Our hardware kit enables real-time feedback and analytics, helping users prepare for interviews more effectively.
            </p>
            <ul>
              <li>AI-driven question generation and evaluation</li>
              <li>IoT hardware kit for real-time monitoring</li>
              <li>Detailed analytics and feedback</li>
              <li>Personalized interview practice</li>
            </ul>
          </div>
          <div className="video-card">
            <h2>Demo: Using the Hardware Kit</h2>
            <div className="video-wrapper">
              {/* Replace the src below with your actual demo video URL */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
