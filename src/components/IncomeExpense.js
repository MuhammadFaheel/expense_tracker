import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import '../App.css';

function IncomeExpense() {

    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);

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

export default IncomeExpense;