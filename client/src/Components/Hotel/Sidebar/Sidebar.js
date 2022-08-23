import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './sidebar.css';
import axios from 'axios';
import { serverUrl } from '../../../serverUrl';
import { useEffect } from 'react';

const Sidebar = ({ children }) => {
  // const [acitve,setActive] = useState()

  let location = useLocation();
  let active = location.pathname;

  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem('Admin');
    await axios
      .get(`${serverUrl}/admin/logout`, { withCredentials: true })
      .then((res) => {
        navigate('/admin/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main id='main' className={show ? 'space-toggle main' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div
          className='header-toggle '
          style={{ color: '#c4bff2' }}
          onClick={() => setShow(!show)}
        >
          <i className='fas fa-bars'></i>
        </div>
         <Link className='float-end text-white nav-link-icon'to=''  >
            complete registration
        </Link>
      </header>
      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='' className='nav-logo'>
              {/* <i className="fas fa-home-alt nav-link-icon "  ></i>
              <span className="nav-logo-name">Home</span> */}
            </Link>
            <div className='nav-list'>
              <Link
                to='/admin'
                className={`nav-link   ${active == '/hotel' ? 'active' : null}`}
              >
                <i className='fas fa-tachometer nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link
                to='/admin/users'
                className={`nav-link   ${
                  active == '/admin/users' ? 'active' : null
                }`}
              >
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>Users</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'>Hotel</span>
              </Link>
            </div>
          </div>
          {/* <Link    className="nav-link"> */}
          <div onClick={handleLogout} className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </div>
          {/* </Link> */}
        </nav>
      </aside>
      {/* <h1>Content</h1> */}
      {children}
    </main>
  );
};

export default Sidebar;
