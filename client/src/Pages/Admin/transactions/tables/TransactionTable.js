import React from "react";

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Sent by</th>
        <th>USD sent</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.transactions.length > 0 ? (
        props.transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.sentBy}</td>
            <td>{transaction.amountSentUSD}</td>
            <td>
              <button onClick={()=>props.editRow(transaction)} className="button muted-button">
                Edit
              </button>
              <button onClick={()=>props.deleteTransaction(transaction.id)} className="button muted-button">
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No transactions</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
