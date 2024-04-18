import React, { useEffect, useLayoutEffect } from "react";

import "../styles/homepage.css";
import Profile from "../components/Profile";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
function FeedView() {
  const navigate = useNavigate();
  const user = {
    name: 'Mohamed Zaki',
    image: 'http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g',
    account: 'mo.Zaki@gmail.com',
  };

 
  return (
    <div>

       
    </div>
  );
}

export default FeedView;
