
import React, { useEffect, useLayoutEffect } from "react";

import "../styles/homepage.css";
import Profile from "../components/Profile";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
function HomePage() {
  const user = {
    name: "Mohamed Zaki",
    image:
      "http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g",
    account: "mo.Zaki@gmail.com",
  };

  const rssList = [
    "https://feeds.bbci.co.uk/news/world/rss.xml",
    "https://feeds.bbci.co.uk/news/uk/rss.xml",
    "https://feeds.bbci.co.uk/news/business/rss.xml",
    "https://feeds.bbci.co.uk/news/technology/rss.xml",
    "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
  ];

  return (
    <>
      <div className="homepage-container">
      
        <div className="homepage-header">
          <div className="homepage-header-left">
            <span className="homepage-icon" />
            <p className="homepage-name"></p>
            <div className="homepage-search-wrapper">
              {/* search functionallity #todo_4 */}
              <input
                className="search-input"
                type="text"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="feather feather-search"
                viewBox="0 0 24 24"
              >
                <defs />
                <circle cx={11} cy={11} r={8} />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>
          <div className="homepage-header-right">
            <>
              <Profile
                userName={user.name}
                userImage={user.image}
                userAccount={user.account}
              />
            </>
          </div>
 
        </div>

        <div className="flex-homepage">
        <div className="homepage-sidebar">
            <Link to="/home" className="homepage-sidebar-link active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
            <Link to="/home/addFeed" className="homepage-sidebar-link">
              <svg
                className="add-btn-homepage-icon"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={12} y1={5} x2={12} y2={19} />
                <line x1={5} y1={12} x2={19} y2={12} />
              </svg>
            </Link>
            <Link to="/home/addFeed" className="homepage-sidebar-link">
              <div className="homepage-svg_writer">
            <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pen</title> <path d="M30.75 7.002c0-0 0-0.001 0-0.002 0-0.207-0.084-0.395-0.219-0.531l-5-5c-0.136-0.136-0.324-0.22-0.531-0.22s-0.395 0.084-0.531 0.22v0l-20.999 20.999c-0.087 0.088-0.153 0.198-0.189 0.321l-0.001 0.005-2 7c-0.018 0.062-0.029 0.133-0.029 0.207 0 0.413 0.335 0.748 0.748 0.748 0.001 0 0.001 0 0.002 0h-0c0.001 0 0.002 0 0.003 0 0.075 0 0.146-0.011 0.214-0.033l-0.005 0.001 6.788-2c0.124-0.037 0.23-0.101 0.315-0.186l-0 0 21.212-21c0.137-0.135 0.223-0.323 0.223-0.531v-0zM8.395 27.334l-5.299 1.561 1.572-5.502 15.335-15.335 3.931 3.892zM25 10.895l-3.937-3.898 3.937-3.937 3.938 3.937z"></path> </g></svg>
            </div>
            </Link>
            
      
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default HomePage;

