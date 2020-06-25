import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import '../App.css';

function Transaction({transaction}) {

    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} <span className="text">{sign}RS.{Math.abs(transaction.amount)}</span><button className='delete' onClick={() => deleteTransaction(transaction.id)}>x</button>
            </li>
        </div>
    )
}

export default Transaction