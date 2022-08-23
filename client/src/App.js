import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserHome from './Pages/User/UserHome/UserHome';
import React from 'react';
import AdminLogin from './Pages/Admin/AdminLogin';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import ViewUsers from './Pages/Admin/ViewUsers';
import HotelLoginPage from './Pages/Hotels/HotelLoginPage';
import HotelSignUpPage from './Pages/Hotels/HotelSignUpPage';
import DestinationDetails from './Pages/User/DestinationDetails';
import AttractionDetails from './Pages/User/AttractionDetails';
import DashBoard from './Pages/Hotels/DashBoard';
import HotelBookingHomePage from './Pages/User/HotelBookingHomePage';
// import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<UserHome />} />
            <Route path='destination' element={<DestinationDetails />} />
            <Route path='attraction' element={<AttractionDetails />} />
            <Route path='hotels' element={<HotelBookingHomePage />} />
          </Route>
        </Routes>
        <Routes>
          <Route path='/admin'>
            <Route index element={<AdminDashboard />} />
            <Route path='login' element={<AdminLogin />} />
            <Route path='users' element={<ViewUsers />} />
          </Route>
        </Routes>
        <Routes>
          <Route path='/hotel'>
            <Route index element={<DashBoard />} />
            <Route path='login' element={<HotelLoginPage />} />
            <Route path='signup' element={<HotelSignUpPage />} />
          </Route>
        </Routes>
      </Router>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
