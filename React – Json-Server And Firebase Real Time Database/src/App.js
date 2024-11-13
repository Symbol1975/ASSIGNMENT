import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Users = lazy(() => import('./pages/Admin/Users'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Users />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
