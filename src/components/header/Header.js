import React, { useContext }  from 'react'
import { GlobalContext } from '../context/Context'

function Header() {
  const {transactions} = useContext(GlobalContext);
  const amount = transactions.map(trans => trans.amount);
  const total =amount.reduce((acc,item) => acc += item ,0);
  const income = amount.filter(e => e > 0).reduce((acc,item) => acc += item , 0);
  const expense = amount.filter(e => e < 0).reduce((acc,item) => acc += item , 0);


  return (
    <div>
      <h2>To Do List</h2>
      <h3>Expense Tracker</h3>
      <div className="content">
        <div className="con">
          <h4>INCOME</h4>
          <p className="income">{income}</p>
        </div>
        <div className="con">
          <h4>YOUR BLANCE</h4>
          <p className="blance">{total}</p>
        </div>
        <div className="con">
          <h4>EXPENSE</h4>
          <p className="expence">{Math.abs(expense)}</p>
        </div>
      </div>
    </div>
  );
}

export default Header