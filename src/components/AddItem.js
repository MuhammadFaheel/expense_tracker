import React from 'react'

function AddItem() {
    return (
        <div>
            <h3>Add New Item</h3>
            <form>
                <div>
                    <label>Text</label>
                    <input type="text" placeholder="Enter Text..." />
                </div>
                <div>
                    <label>
                        Amount
                        <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder="Enter Amount..." />
                </div>
                <button>Add Item</button>
            </form>
        </div>
    )
}

export default AddItem