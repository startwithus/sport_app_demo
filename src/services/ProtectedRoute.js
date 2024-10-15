import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import Profile from '../profile/Profile';
import Layout from '../layout/Layout';
import '../profile/profile.css'
import { MdOutlineMenu } from "react-icons/md";
const ProtectedRoute = ({ Children }) => {
  const isAuthenticated = localStorage.getItem('token');
  const [profileOpen, setProfileOpen] = useState(false)
  // if (!isAuthenticated) {
  //     return <Navigate to="/login" replace />;
  // }

  // return children;
  return (
    isAuthenticated ?
      <>
        <Layout>
          <div className='home-profile-container' style={{paddingTop:"5rem"}}>
            <div className='layout-container padding'>
              <div className='profile-menu-icon' onClick={() => setProfileOpen(!profileOpen)}>
                <MdOutlineMenu style={{ color: "white", fontSize: "1.5rem" }} />
              </div>
              <div className={`home-profile-section ${profileOpen ? "home-active-section" : ""}`}>
                <div className={`profile-main-container ${profileOpen ? "active-profile" : ""}`}> <Profile profileOpen={profileOpen} setProfileOpen={setProfileOpen} /></div>

                <div className='children-container'>
                  {Children}
                </div>
              </div>
            </div>

          </div>
        </Layout>

      </>

      : <Navigate to={'/login'} replace />
  )
};


export default ProtectedRoute