import React from 'react';
import TopNav from './components/TopNav';
import MainNav from './components/MainNav';
import BottomNav from './components/BottomNav';
import './App.css';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <div className="App">
      <TopNav />
      <MainNav />
      <BottomNav />

    
    <Banner />
  <CategoryList />
      
    </div>
  );
}

export default App;
