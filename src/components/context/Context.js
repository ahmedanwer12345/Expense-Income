import React, { createContext, useReducer } from 'react'
import Appreducer from './Appreducer';

const intialState  ={
    transactions:  [
      
     ]
 }

export const GlobalContext = createContext(intialState);
export const GlobalProvider =  ({children}) => {
const [state, dispatch] = useReducer(Appreducer, intialState) ;
 // Actions
 function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }
return (<GlobalContext.Provider value={{
    transactions: state.transactions ,
    addTransaction,
    deleteTransaction
}}>
    {children}
</GlobalContext.Provider>);


}
 



 



// import React, { createContext, useReducer } from 'react';
// import Appreducer from './Appreducer';

// // Initial state
// const initialState = {
//   transactions: []
// }

// // Create context
// export const GlobalContext = createContext(initialState);

// // Provider component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(Appreducer, initialState);

//   // Actions
//   function deleteTransaction(id) {
//     dispatch({
//       type: 'DELETE_TRANSACTION',
//       payload: id
//     });
//   }

//   function addTransaction(transaction) {
//     dispatch({
//       type: 'ADD_TRANSACTION',
//       payload: transaction
//     });
//   }

//   return (<GlobalContext.Provider value={{
//     transactions: state.transactions,
//     deleteTransaction,
//     addTransaction
//   }}>
//     
//   </GlobalContext.Provider>);
// }