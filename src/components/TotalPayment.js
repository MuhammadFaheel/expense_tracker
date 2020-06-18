import React, {useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";
import '../App.css';

function TotalPayment() {

    const {items} = useContext(GlobalContext)

    const amount = items.map(item => item.amount);
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div>
            <h4>YOUR TOTAL:</h4>
            <h1>Rs. {total}</h1>
        </div>
    )
}

export default TotalPayment