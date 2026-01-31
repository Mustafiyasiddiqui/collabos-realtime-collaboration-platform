import { Link } from "react-router-dom";
import "./Hero.css";
export default function Hero() {
  return (
    <div className="home">
      <div className="home-card">
        <h1 className="home-title">Welcome To CollabOS</h1>
        <p className="home-text">
          A developer collaboration platform to manage projects, tasks, and
          real-time teamwork.
        </p>
        <div className="home-actions">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
