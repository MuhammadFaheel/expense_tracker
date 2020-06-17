import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    items: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteItem = (id) => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
        })
    }

    const addItem = (item) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        })
    }

    return (
        <GlobalContext.Provider value= {{
            items: state.items,
            deleteItem, addItem
        }}>
            {children}
        </GlobalContext.Provider>
    )
}