import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "../actions";

const Expense = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);

  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  return (
    <div>
      <h1>Expense</h1>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: {expense.amount}
          </li>
        ))}
      </ul>
      <h2>Total Expense: ${totalExpense}</h2>
    </div>
  );
};

export default Expense;
