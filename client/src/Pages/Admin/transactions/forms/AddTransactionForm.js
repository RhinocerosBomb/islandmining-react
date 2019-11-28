import React, { useState } from "react";

const AddTransactionForm = props => {
  const initialFormState = { id: null, sentBy: "", amountSentUSD: "" };
  const [transaction, setTransaction] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setTransaction({ ...transaction, [name]: value});
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!transaction.sentBy || !transaction.amountSentUSD) return;

        props.addTransaction(transaction);
        setTransaction(initialFormState);

        // Make call to api and submit data
      }}
    >
      <label>Sent By</label>
      <input
        type="text"
        name="sentBy"
        value={transaction.sentBy}
        onChange={handleInputChange}
      />
      <label>Amount Sent</label>
      <input
        type="text"
        name="amountSentUSD"
        value={transaction.amountSentUSD}
        onChange={handleInputChange}
      />
      <button>Add new transaction</button>
    </form>
  );
};

export default AddTransactionForm;
