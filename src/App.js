import React from 'react';
import Header from './components/Header';
import './App.css';
import TotalPayment from './components/TotalPayment';
import ItemBuyer from './components/ItemBuyer';

function App() {
  return (
    <div className="App">
      <Header />
      <TotalPayment />
      <ItemBuyer />
    </div>
  );
}

export default App;
