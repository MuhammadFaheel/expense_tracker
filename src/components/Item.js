import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

function Item({item}) {

    const {deleteItem} = useContext(GlobalContext);
    const sign = item.amount < 0 ? '-' : '+';

    return (
        <div>
            <li>
                {item.text} <span>{sign}RS.{Math.abs(item.amount)}</span><button onClick={() => deleteItem(item.id)}>x</button>
            </li>
        </div>
    )
}

export default Item