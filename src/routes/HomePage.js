import React, { useEffect, useState } from "react";
import "../styles/homepage.css";
import Profile from "../components/Profile";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { SubscriptionsSvg } from "../svgIcons/SubscriptionsSvg";
import { DiscoverThin } from "../svgIcons/DiscoverSvg";
import Alert from "../components/Alert";
import { useSelector } from "react-redux";
import briefimg from '../assets/Eo_circle_red_white_letter-b.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAnchor } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const location = useLocation();
  const [iconActiveId, setIconActiveId] = useState(null);
  let notifySliceState = useSelector((state) => state.notifyState)

   useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setIconActiveId(1);
        break;
      case "/home/addFeed":
        setIconActiveId(2);
        break;
      case "/home/subscriptions":
        setIconActiveId(3);
        break;
      case "/home/discover":
        setIconActiveId(4);
        break;
         case "/home/publicAPI":
        setIconActiveId(5);
        break;
      default:
        setIconActiveId(1);
    }
  }, [location.pathname]);

 
  const user = {
    name: "Mohamed Zaki",
    image:
      "http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g",
    account: "mo.Zaki@gmail.com",
  };
console.log(notifySliceState);
  return (
    <>
    {notifySliceState.message.payload && <Alert 
    type={notifySliceState.type}
    alertText={notifySliceState.message.payload} />}
    <div className="homepage-container">
        <div className="homepage-header">
          <div className="homepage-header-left">
            {/* #Note_case svg problem , and svg bad size */}
            <img  style={{width:'3rem'}}src={briefimg} alt="logo"/>

            <p className="homepage-name"></p>
            {/* ihide when icon 2 is active */}
            {/*
             <div
              className={`homepage-search-wrapper ${iconActiveId === 2 ? "hidden" : ""
                }`}
            >
              {/* search functionallity #todo_4 */}
              {/* <input className="search-input" type="text" placeholder="Search" />

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
            </div> */} 
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

        <div className="homepage-sidebar">
          <Link
            key="1"
            to="/home"
            className={`homepage-sidebar-link ${iconActiveId === 1 ? "active" : ""
              }`}
            onClick={() => {
              setIconActiveId(1);
            }}
          >
            <svg
              className="homepage_home_homeSVG"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>
          <Link
            key="2"
            to="/home/addFeed"
            className={`add-feed-link ${iconActiveId === 2 ? "active" : ""}`}
            onClick={() => {
              setIconActiveId(2);
            }}
          >
            <svg
              className="homepage_home_addSVG"
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
          <Link
            key="3"
            to="/home/subscriptions"
            className={`add-feed-link ${iconActiveId === 3 ? "active" : ""}`}
            onClick={() => {
              setIconActiveId(3);
            }}
          >
            {/* #todo_5 generic class to make any icon background change not for every icon */}
            <SubscriptionsSvg className="homepage_home_subscriptionsSVG" />
          </Link>{" "}
          <Link
            key="4"
            to="/home/discover"
            className={`add-feed-link ${iconActiveId === 4 ? "active" : ""}`}
            onClick={() => {
              setIconActiveId(4);
            }}
          >
            <DiscoverThin className="homepage_home_discoverSVG" />
          </Link> 
          <Link
            key="5"
            to="/home/publicAPI"
            className={`add-feed-link ${iconActiveId === 5 ? "active" : ""}`}
            onClick={() => {
              setIconActiveId(5);
            }}
          >
            <FontAwesomeIcon icon={faAnchor}/>
          </Link>
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default HomePage;
