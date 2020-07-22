import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';
import axios  from 'axios';

// Initial State
const initialState = {
    candidates: [],
    error : null,
    loading: true
}


// Create Context
export const GlobalContext = createContext(initialState);


// Provider Componenet
export const StateManager = ({ children }) => {
    const [state, dispatch ] = useReducer(AppReducer, initialState);

    // Actions
    async function getCandidates() {
        try {
          const res = await axios.get('http://18.188.185.178:3002/get/candidate');
    
          dispatch({
            type: 'GET_CANDIDATES',
            payload: res.data.data
          });
        } catch (err) {
          dispatch({
            type: 'CANDIDATES_ERROR',
            payload: err.response.data.error
          });
        }
      }

      async function updateCandidate(data) {

        console.log(data)
        try {
          const putdata = await axios.put('http://18.188.185.178:3002/put/candidate', data, {
            headers: {
            'Content-Type': 'application/json'
            }
          }
        );

        console.log('coming from api put',putdata)
    
          dispatch({
            type: 'UPDATE_CANDIDATE',
            payload: putdata.data.data
          });
        } catch (err) {
          dispatch({
            type: 'CANDIDATES_ERROR',
            payload: err.response.data.error
          });
        }
      }

    return(
        <GlobalContext.Provider value={{ 
            candidates : state.candidates,
            error: state.error,
            loading: state.loading,
            getCandidates,
            updateCandidate
        }}>
            { children }
        </GlobalContext.Provider>
    )
}