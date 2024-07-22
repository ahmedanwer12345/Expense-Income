import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/Context";

const Transaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { transactions } = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);
  const { addTransaction } = useContext(GlobalContext);

  console.log(transactions);
  const addTransactionToState = (e) => {
    e.preventDefault();
    if (text.length > 0 && amount.length > 0 && parseInt(amount)) {
      addTransaction({
        id: Math.floor(Math.random() * 10000000),
        text: text,
        amount: parseInt(amount),
      });
    }
  };
  return (
    <>
      <ul className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            <span>{transaction.amount}</span>
            <span>{transaction.text}</span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="del"
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={addTransactionToState}>
        <h3>Add new transaction</h3>
        <hr></hr>
        <label className="label">Text</label>
        <input
          className="input"
          type="text"
          value={text}
          placeholder="Enter Text...."
          onChange={(e) => setText(e.target.value)}
        ></input>
        <label className="label">
          Amount : (nagative-expenseve , positive-income)
        </label>
        <input
          className="input"
          value={amount}
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default Transaction;
