import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterYear={filterYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expense;
