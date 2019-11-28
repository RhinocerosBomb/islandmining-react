import React, { useState, useEffect } from 'react';

const EditTransactionForm = props => {
  const [transaction, setTransaction] = useState(props.currentTransaction);

  useEffect(
    () => {
      setTransaction(props.currentTransaction);
    },
    [props]
  )

  const handleInputChange = event => {
    const {name, value} = event.target;

    setTransaction({...transaction, [name]: value})
  }

  return (
    <form onSubmit={event => {
        event.preventDefault();

        props.updateTransaction(transaction.id, transaction)
      }}
    >
      <label>Sent by</label>
      <input type="text" name="sentBy" value={transaction.sentBy} onChange={handleInputChange} />
      <label>Transaction amount</label>
      <input type="text" name="amountSentUSD" value={transaction.amountSentUSD} onChange={handleInputChange} />
      <button>Update transaction</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditTransactionForm;