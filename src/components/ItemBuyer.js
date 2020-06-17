import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function ItemBuyer() {

    const {items} = useContext(GlobalContext);
    const amount = items.map(item => item.amount);

    const cash = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1).toFixed(2);

    return (
        <div>
            <div>
                <h4>CASH</h4>
                <p>+Rs. {cash}</p>
            </div>
            <div>
                <h4>EXPENSE</h4>
                <p>-Rs. {expense}</p>
            </div>
        </div>
    )
}

export default ItemBuyer;