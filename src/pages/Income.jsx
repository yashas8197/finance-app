import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncome } from "../actions";

const Income = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);

  const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);

  useEffect(() => {
    dispatch(fetchIncome());
  }, []);
  return (
    <div>
      <h1>Income</h1>
      <ul>
        {income.map((salary, index) => (
          <li key={index}>
            {salary.description}: ${salary.amount}
          </li>
        ))}
      </ul>
      <h2>Total Income: ${totalIncome}</h2>
    </div>
  );
};

export default Income;
