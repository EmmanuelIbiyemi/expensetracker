import React, { useContext } from 'react'
import { GlobalContext } from '../context/ContextState';
export const Transaction = ( {transaction}) => {
    const sign = transaction.amount < 0 ? '-':'+';

    const {deletTransaction} = useContext(GlobalContext)
  return (
    <>
        <li className={transaction.amount < 0 ? 'minus' : 'plus' }>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={()=> deletTransaction(transaction.id)}>x</button>
        </li> 
    </>
  )
}
