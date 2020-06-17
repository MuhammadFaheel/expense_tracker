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
    <div className="App">
      <GlobalProvider>
        <Header />
        <TotalPayment />
        <ItemBuyer />
        <ItemList />
        <AddItem />
      </GlobalProvider>
    </div>
  );
}

export default App;
