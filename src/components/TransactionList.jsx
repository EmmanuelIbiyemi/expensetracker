import React, { useContext } from 'react'
import { GlobalContext} from '../context/ContextState';
import { Transaction } from './Transaction';
export const TransactionList = () => {
  const {transaction} = useContext(GlobalContext);
  // console.log(context);
  return (
    <>
    <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map((item) => 
          (
           
            <Transaction key={item.id} transaction={item} />
          )
        )}
        {/* <li className="minus">
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li>  */}
      </ul>
    </>
  )
}
