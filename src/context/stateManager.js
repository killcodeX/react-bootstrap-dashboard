import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

// Initial State
const initialState = {
    codes : [
    ]
}  

// Create Context
export const GlobalContext = createContext(initialState);


// Provider Componenet
export const StateManager = ({ children }) => {
    const [state, dispatch ] = useReducer(AppReducer, initialState);

    // Actions 
    function deleteCode(id){
        dispatch({
            type: 'DELETE_CODE',
            payload: id
        });
    }

    return(
        <GlobalContext.Provider value={{ 
            codes : state.codes,
            deleteCode,
        }}>
            { children }
        </GlobalContext.Provider>
    )
}