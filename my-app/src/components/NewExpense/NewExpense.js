import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [expensesStatus, setExpensesStatus] = useState(false);

  const listenNewExpense = () => {
    setExpensesStatus(true);
  };

  const cancelExpense = () => {
    setExpensesStatus(false);
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setExpensesStatus(false);
  };

    return (
      <div className="new-expense">
        {!expensesStatus && <button onClick={listenNewExpense}>Add new expense</button>}
        {expensesStatus && <ExpenseForm onCancel={cancelExpense} onSaveExpenseData={onSaveExpenseDataHandler}/>}
      </div>
    );
};

export default NewExpense;
