import React, { useState } from 'react';
import navIconImage from "../../assets/menu_icon.png"
import navLogoImage from "../../assets/ramblingsvintagelogo.png"
import "./NavBar.css"
import { Link, useNavigate, } from 'react-router-dom';



export const NavBar = () => {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleServiceClick = (serviceNumber) => {
    console.log("clicked")
    alert(`You clicked Service ${serviceNumber}`);
    
    // Optionally, you can close the dropdown by setting isDropdownOpen to false
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar">
        
        <div className="userSection">
            <div className="userProfilePic-box">
                <img className="userProfilePic" alt="User Profile Pic" src={navIconImage}/>
            </div>
        <div className="userBox"> userprofile@gmail.com </div>
       </div>
       
       <div className="logoBox">
        <img className= "nav-logo" src={navLogoImage} alt="Dropdown Button" />
       </div>

      <div className="nav-itemDropDown">
        <button onClick={toggleDropdown} className="dropdown-button">
        <img className= "nav-Icon" src={navIconImage} alt="Dropdown Button" />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">

            <Link to="/items">
            <div className="dropdown-item" onClick={() => handleServiceClick(1)}>Home</div>
            </Link>

            <Link to="/favorites">
            <div className="dropdown-item" onClick={() => handleServiceClick(2)}>Favorites</div>
            </Link>

            <Link to="/lists">
            <div className="dropdown-item" onClick={() => handleServiceClick(3)}>Curated List</div>
            </Link>


{localStorage.getItem("ramblings_user") ? (
    <Link
      className="navbar-link"
      to=""
      onClick={() => {
        localStorage.removeItem("ramblings_user")
        navigate("/", { replace: true })
      }}
    >
      <div className="dropdown-item">
      Logout
      </div>
    </Link>
) : (
  ""
)}

          </div>
        )}
      </div>

    </div>
  );
}


