import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // State to track the current mouse position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Event handler for mouse movement
  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,  // x position of the mouse
      y: event.clientY   // y position of the mouse
    });
  };

  // useEffect hook to add and clean up the mousemove event listener
  useEffect(() => {
    // Add mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <h1>Move the Circle with Mouse</h1>
      <div
        className="circle"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`, // Update element position dynamically
        }}
      ></div>
    </div>
  );
};

export default App;
