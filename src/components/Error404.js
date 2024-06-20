import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/error404.css'; // Assuming you have the necessary styles in this file

const Error404 = () => {
  return (
    <div className="wrapper">
      {/* MAIN */}
      <div className="container" data-text="404">
        <div className="title glitch" data-text="404">
          404
        </div>
        <div className="description glitch" data-text="PAGE NOT FOUND">
          PAGE NOT FOUND
        </div>
        <Link to="/">
          <button className="back-to-home-button">Back to Home</button>
        </Link>
      </div>
      {/* END MAIN */}
    </div>
  );
};

export default Error404;
