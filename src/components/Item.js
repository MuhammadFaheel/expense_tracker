import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import '../App.css';

function Item({item}) {

    const {deleteItem} = useContext(GlobalContext);
    const sign = item.amount < 0 ? '-' : '+';

    return (
        <div>
            <li className={item.amount < 0 ? 'minus' : 'plus'}>
                {item.text} <span className="text">{sign}RS.{Math.abs(item.amount)}</span><button className='delete' onClick={() => deleteItem(item.id)}>x</button>
            </li>
        </div>
    )
}

export default Item