import React, { useEffect, useLayoutEffect, useState } from "react";
import '../styles/Gallary.css'
import "../styles/homepage.css";
import Profile from "../components/Profile";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
function FeedView() {
  const navigate = useNavigate();
  const user = {
    name: "Mohamed Zaki",
    image:
      "http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g",
    account: "mo.Zaki@gmail.com",
  };
  const [userArticles, setUserArticles] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setUserArticles(data.products));
  });
  return (
    <div className="gallary_items">
      {userArticles.map((item) => (
        <div className="gallary_item">
          <img src={item.images[0]} alt={item.title} />
          <div className="gallary_item_details">
            <h1 className="gallary_item_headding">{item.title}</h1>
              <p className="gallary_item_description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedView;

