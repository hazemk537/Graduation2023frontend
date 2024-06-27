// Error404.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/error404.css'; // Assuming you have the necessary styles in this file

const Error404 = ({ errorType }) => {
    let errorMessage = "An error occurred";

    if (errorType === "404") {
        errorMessage = "404 Page Not Found";
    } else {
        errorMessage = "An error occurred";
    }

    return (
        <div className="wrapper">
            <div className="container" >
                <div className="title glitch" >
                {errorMessage}
                </div>
                <Link to="/">
                    <button className="back-to-home-button">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error404;
