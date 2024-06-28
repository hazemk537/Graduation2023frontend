import React, { useEffect, useState } from "react";
import "../styles/homepage.css";
import Profile from "../components/Profile";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { SubscriptionsSvg } from "../svgIcons/SubscriptionsSvg";
import { DiscoverThin } from "../svgIcons/DiscoverSvg";
import Alert from "../components/Alert";
import { useSelector } from "react-redux";

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
      default:
        setIconActiveId(2);
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
    {notifySliceState.message && <Alert type={notifySliceState.type}  alertText={notifySliceState.message.payload} />}
    <div className="homepage-container">
        <div className="homepage-header">
          <div className="homepage-header-left">
            <svg
              className="svg2-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
            >
              <circle cx="32" cy="32" r="30" fill="#fff" />
              <path
                d="m36.929 34.225c-.688-.315-1.654-.479-2.899-.492h-7.143v7.736h7.045c1.258 0 2.238-.171 2.938-.512 1.271-.631 1.907-1.838 1.907-3.623 0-1.509-.616-2.545-1.848-3.109"
                fill="#e53935"
              />
              <pat
                d="m37.008 28.211c.785-.479 1.179-1.329 1.179-2.55 0-1.352-.52-2.244-1.558-2.677-.896-.303-2.04-.453-3.43-.453h-6.313v6.397h7.053c1.26.001 2.284-.239 3.069-.717"
                fill="#e53935"
              />
              <path
                d="m32 2c-16.568 0-30 13.432-30 30s13.432 30 30 30 30-13.432 30-30-13.432-30-30-30m11.607 40.374c-.549.905-1.232 1.667-2.055 2.283-.927.709-2.02 1.194-3.279 1.457-1.259.263-2.625.394-4.1.394h-13.073v-29.016h14.023c3.537.052 6.044 1.082 7.52 3.09.888 1.234 1.332 2.71 1.332 4.43 0 1.771-.449 3.195-1.344 4.271-.502.604-1.238 1.154-2.214 1.653 1.481.538 2.599 1.392 3.353 2.56.753 1.168 1.13 2.585 1.13 4.252-.001 1.719-.431 3.261-1.293 4.626"
                fill="#e53935"
              />
            </svg>

            <p className="homepage-name"></p>
            {/* ihide when icon 2 is active */}
            <div
              className={`homepage-search-wrapper ${iconActiveId === 2 ? "hidden" : ""
                }`}
            >
              {/* search functionallity #todo_4 */}
              <input className="search-input" type="text" placeholder="Search" />

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
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default HomePage;
