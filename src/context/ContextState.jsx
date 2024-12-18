import React , { createContext , useReducer}from 'react'
import AppReducer from './AppReducer';

//Intial State
const initialState = {
    transaction:[]
}

// Create Context 
export const GlobalContext = createContext(initialState);

//Creating Provider so other Component Could Access it 
export const GlobalProvider = ({children}) =>{
    const [state , dispatch] = useReducer(AppReducer , initialState)

    // Action
    function deletTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    // Input Section
    function InputTransaction(transaction){
            dispatch({
                type:'ADD_TRANSACTION',
                payload:transaction
            })
    }

    return(
        <GlobalContext.Provider value={{
            transaction: state.transaction,
            deletTransaction,
            InputTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}