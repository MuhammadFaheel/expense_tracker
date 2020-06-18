import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import '../App.css';

function ItemBuyer() {

    const {items} = useContext(GlobalContext);
    const amount = items.map(item => item.amount);

    const cash = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1).toFixed(2);

    return (
        <div>
            <div>
                <h4>INCOME:</h4>
                <p className="income">+Rs. {cash}</p>
            </div>
            <div>
                <h4>EXPENSE:</h4>
                <p className="expense">-Rs. {expense}</p>
            </div>
        </div>
    )
}

export default ItemBuyer;