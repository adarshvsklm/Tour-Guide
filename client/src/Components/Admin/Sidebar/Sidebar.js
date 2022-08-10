import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = ({children}) => {
  const [show, setShow] = useState(false);
  return (
    <main id="main" className={show ? "space-toggle main" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" style={{color:'#c4bff2'}} onClick={() => setShow(!show)}>
          <i className="fas fa-bars"></i>
        </div>
      </header>
      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <i className="fas fa-home-alt nav-link-icon " style={{color:'#bba4f8'}}></i>
              <span className="nav-logo-name">Home</span>
            </Link>
            <div className="nav-list">
              <Link to="/dashboard" className="nav-link active">
                <i className="fas fa-tachometer nav-link-icon"></i>
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link to="/hotel" className="nav-link">
                <i className="fas fa-hotel nav-link-icon"></i>
                <span className="nav-link-name">Hotel</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">Hotel</span>
              </Link>
            </div>
          </div>
          <Link to="/logout" className="nav-link">
            <i className="fas fa-sign-out nav-link-icon"></i>
            <span className="nav-link-name">Logout</span>
          </Link>
        </nav>
      </aside>
      <h1>Content</h1>
      {children}
    </main>
  );
};

export default Sidebar;