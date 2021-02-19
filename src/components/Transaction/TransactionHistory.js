import React from 'react';
import s from './TransactionHistory.module.scss';

const TransactionHistoryItem = ({ id, type, amount, currency }) => {
    return (
        <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr> 
    )
}

const TransactionHistoryItemList = ({ items }) => {

  return <tbody className={s.table}>{items.map(TransactionHistoryItem)}</tbody>
  
}
const TransactionHistory = ({ items }) => {
    return (
      <table key={items.id} className={s.transactionHistory}>
          <thead className={s.headerList}>
            <tr>
              <th className={s.header}>Type</th>
              <th className={s.header}>Amount</th>
              <th className={s.header}>Currency</th>
            </tr>
          </thead>

        <TransactionHistoryItemList items={items}/>
        </table>
    )
}

export default TransactionHistory;