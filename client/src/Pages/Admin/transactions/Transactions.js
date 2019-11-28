import React, {useState} from "react";
import TransactionTable from './tables/TransactionTable'
import AddTransactionForm from './forms/AddTransactionForm'
import EditTransactionForm from './forms/EditTransactionForm'

const Transactions = () => {
  const transactionData = [
    { id: 1, sentBy: "test@testuser.com", amountSentUSD: 5 },
    { id: 2, sentBy: "test@testuser.com", amountSentUSD: 10 },
    { id: 3, sentBy: "test@testuser.com", amountSentUSD: 15 }
  ];
  const [transactions, setTransactions] = useState(transactionData);

  // State for editing
  const [editing, setEditing] = useState(false);

  // State for current transaction
  const initialFormState = { id: null, sentBy: '', amountSentUSD: '' }
  const [currentTransaction, setCurrentTransaction] = useState(initialFormState)

  const addTransaction = transaction => {
    // Increment id
    transaction.id = transactions.length + 1;
    setTransactions([...transactions, transaction])
  }

  const deleteTransaction = id => {
    setTransactions(transactions.filter(transaction => transaction.id !== id ))
  }

  const editRow = transaction => {
    setEditing(true);
    setCurrentTransaction({id: transaction.id, sentBy: transaction.sentBy, amountSentUSD: transaction.amountSentUSD})
  }

  const updateTransaction = (id, updatedTransaction) => {
    setEditing(false)
    setTransactions(transactions.map(transaction => transaction.id === id ? updatedTransaction : transaction))
  }

  return (
    <div className="flex-row">
      <div className="flex-large">
        {editing ? (
          <div>
            <h2>Edit Transaction</h2>
            <EditTransactionForm 
              currentTransaction={currentTransaction}
              updateTransaction={updateTransaction}
              setEditing={setEditing}
            />
          </div>
        ) : (
          <div>
            <h2>Add Transaction</h2>
            <AddTransactionForm addTransaction={addTransaction} />             
          </div>
        )}
      </div>
      <div className="flex-large">
        <h2>View transactions</h2>
        <TransactionTable transactions={transactions} deleteTransaction={deleteTransaction} editRow={editRow} />
      </div>
    </div>
  );
};

export default Transactions;
