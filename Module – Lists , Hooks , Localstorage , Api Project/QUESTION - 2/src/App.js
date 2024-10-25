// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login state
  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <Navigation isLoggedIn={isLoggedIn} handleLoginLogout={handleLoginLogout} />
      <Main isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  );
}

// Navigation Component
function Navigation({ isLoggedIn, handleLoginLogout }) {
  return (
    <div className="navigation">
      <h2>Navigation</h2>
      <button onClick={handleLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

// Main Component
function Main({ isLoggedIn }) {
  return (
    <div className="main-content">
      {isLoggedIn ? <h3>Private Views</h3> : <h3>Public Views</h3>}
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <div className="footer">
      <h4>Footer</h4>
    </div>
  );
}

export default App;
