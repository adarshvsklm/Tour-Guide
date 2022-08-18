import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/Admin/Sidebar/Sidebar'
import Login from '../../Components/User/Login/Login'
//test


 
function AdminDashboard() {
  const navigate = useNavigate()
  useEffect(()=>{
    const Admin=localStorage.getItem('Admin')
    if(!Admin){
      navigate('/admin/login')
    }
  },[])
  return (
    <div> 
        <Sidebar>
        {/* <h1>Admin Dashboard</h1> */}
          
            {/* <Login/> */}
        </Sidebar>        
    </div>
  )
}

export default AdminDashboard
