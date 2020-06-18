import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import '../App.css';

function AddItem() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addItem} = useContext(GlobalContext);

    const newItem = e => {
        e.preventDefault();

        const addNewItem = {
            id: Math.floor(Math.random() * 10000000000), text, amount: +amount
        }
        addItem(addNewItem);
    }

    return (
        <div>
            <h4>Add New Item:</h4>
            <form onSubmit={newItem}>
                <div>
                    <label>Text:</label>
                    <br />
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter Text..." />
                </div>
                <div>
                    <label>
                        Amount:
                        <br/>
                        (negative - expense, positive - income)
                        <br />
                    </label>
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter Amount..." />
                </div>
                <button className="additem">Add Item</button>
            </form>
        </div>
    )
}

export default AddItem