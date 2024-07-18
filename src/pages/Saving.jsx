import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses, fetchIncome } from "../actions";

const Saving = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expenses);

  const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = expense.reduce((acc, curr) => acc + curr.amount, 0);

  const totalSavings = totalIncome - totalExpense;

  useEffect(() => {
    dispatch(fetchIncome());
  }, []);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  return (
    <div>
      <h1>Saving</h1>
      <h2>Savings Total: ${totalSavings}</h2>
    </div>
  );
};

export default Saving;
