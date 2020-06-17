import React from 'react';
import Header from './components/Header';
import './App.css';
import TotalPayment from './components/TotalPayment';
import ItemBuyer from './components/ItemBuyer';
import ItemList from './components/ItemsList';
import AddItem from './components/AddItem';

function App() {
  return (
    <div>
      <Header />
      <TotalPayment />
      <ItemBuyer />
      <ItemList />
      <AddItem />
    </div>
  );
}

export default App;
