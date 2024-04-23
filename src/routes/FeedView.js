import React, { useEffect, useLayoutEffect, useState } from "react";
import '../styles/Gallary.css'
//import "../styles/homepage.css";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
function FeedView() {
  const navigate = useNavigate();

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
          <div className="gallary_item_wrapper">
          <img src={item.images[0]} alt={item.title} />
          </div>
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

