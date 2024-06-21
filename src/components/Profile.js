import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';
import logout from "../images/logout.svg";
import settings from "../images/settings.svg";

const ProfileImage = ({ userName, userImage, userAccount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Get the data object from local storage
    let data = JSON.parse(localStorage.getItem('data'));

    // Check if the data object and token exist
    if (data && data.token) {
      // Remove the token from the data object
      delete data.token;
      
      // Save the updated data object back to local storage
      localStorage.setItem('data', JSON.stringify(data));
    }
    
    // Redirect to the home page after removing the token
    navigate('/');
  };

  return (
    <div className="profile-container">
      <div className="profile-image" onClick={toggleDropdown}>
        <img src={userImage} alt="User Avatar" />
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="menu-item-user">
            <div>
              <img src={userImage} alt="User Avatar" />
              <p>{userName}</p>
            </div>
            <div>
              <p><a className='jump' href='#'>{userAccount}</a></p>
            </div>
          </div>

          <div className="menu-item">
            <span><img src={settings} alt="Settings Icon" /></span>
            <a className='jump' href='#'>Account Settings</a>
          </div>

          <div className="menu-item" onClick={handleLogout}>
            <span><img src={logout} alt="Logout Icon" /></span>
            <a className='jump' href='#'>Logout</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
