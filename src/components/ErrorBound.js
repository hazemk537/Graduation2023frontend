// ErrorBoundary.jsx
import React, { useState, useEffect } from 'react';
import Error404 from './Error404'; // Assuming you have a custom error component

const ErrorBoundary = ({ children }) => {
    const [error, setError] = useState(null);
    const [errorInfo, setErrorInfo] = useState(null);

    useEffect(() => {
        const handleError = (error, errorInfo) => {
            console.error("Error Boundary caught an error", error, errorInfo);
            setError(error);
            setErrorInfo(errorInfo);
        };

        // Reset error state on component mount
        setError(null);
        setErrorInfo(null);

        // Cleanup function to reset error state
        return () => {
            setError(null);
            setErrorInfo(null);
        };
    }, []);

    if (error) {
        // Determine error type based on error status or other criteria
        const errorType = error.status === 404 ? "404" : "other";

        return <Error404 errorType={errorType} error={error} />;
    }

    return children;
};

export default ErrorBoundary;
