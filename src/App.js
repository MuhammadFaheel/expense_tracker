import React from 'react';
import Header from './components/Header';
import './App.css';
import TotalPayment from './components/TotalPayment';
import ItemBuyer from './components/ItemBuyer';
import ItemList from './components/ItemsList';
import AddItem from './components/AddItem';
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <TotalPayment />
        <ItemBuyer />
        <ItemList />
        <AddItem />
      </div>
    </GlobalProvider>
  );
}

export default App;
