import React, { useState } from 'react';
import '../styles/Profile.css';
import logout from "../images/logout.svg";
import settings from "../images/settings.svg";
const ProfileImage = ({ userName, userImage,userAccount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
             <span><img src={ settings}/></span>
            <a className='jump' href='#'>
            Account Settings
          </a>
          </div>

          <div className="menu-item" >
            <span><img src={ logout}/></span>
            <a  className='jump' href='#'>Logout</a></div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
