import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserHome from './Pages/User/UserHome/UserHome';
import React from 'react';
import AdminHome from './Pages/Admin/AdminHome';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<UserHome/>} />
        </Routes>
        <Routes>
          <Route path='/admin' element={<AdminHome/>} />
        </Routes>
      </Router>  
    </div>
  );
}
  
export default App;
 