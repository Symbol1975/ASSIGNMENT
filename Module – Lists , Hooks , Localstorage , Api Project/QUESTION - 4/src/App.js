import React from 'react';
import './App.css';

// Define a ListView component
const ListView = () => {
  // Sample array of items to display
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' }
  ];

  // Return the list of items
  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map(item => (
          // Each list item must have a unique 'key' prop
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Main App component
function App() {
  return (
    <div className="App">
      <h1>React List View Example</h1>
      {/* Rendering the ListView component */}
      <ListView />
    </div>
  );
}

export default App;
