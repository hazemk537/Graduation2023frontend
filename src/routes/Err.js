
import React, { useState, useEffect } from 'react';
import "../styles/err.css"

const ConsoleErrorViewer = ({ prop }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const handleConsoleError = (event) => {
      setErrorMessage(event.error.message);
    };

    window.addEventListener('error', handleConsoleError);

    return () => {
      window.removeEventListener('error', handleConsoleError);
    };
  }, []);

  return errorMessage ? (
    <div style={styles.container}>
      <h1 style={styles.title}>Error Occurred!</h1>
      <p style={styles.errorMessage}>{errorMessage}</p>
    </div>
  ) : (
    prop
  );
};
const styles = {
  container: {
    backgroundColor: '#ffebee',
    padding: '20px',
    borderRadius: '5px',
    margin: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#f44336',
    marginBottom: '10px',
  },
  errorMessage: {
    color: '#f44336',
    fontWeight: 'bold',
  },
};

export default ConsoleErrorViewer;
