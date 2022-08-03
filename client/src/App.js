import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserHome from './Pages/User/UserHome/UserHome';
import React from 'react';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<UserHome/>} />
        </Routes>
      </Router>  
    </div>
  );
}
  
export default App;
