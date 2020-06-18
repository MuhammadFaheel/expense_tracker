import React, {useContext} from  'react';
import { GlobalContext } from '../context/GlobalState';
import Item from './Item';
import '../App.css';

function ItemsList() {

    const { items } = useContext(GlobalContext);

    return (
        <div>
            <h4>History:</h4>
            <ul>
                {items.map(item => (<Item key={item.id} item={item} />))}
            </ul>
        </div>
    )
}

export default ItemsList
