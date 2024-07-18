import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import IncomeExpenseForm from "./pages/IncomeExpenseForm";
import Expense from "./pages/Expense";
import Income from "./pages/Income";
import Saving from "./pages/Saving";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/income">Income</Link>
              </li>
              <li>
                <Link to="/expense">Expense</Link>
              </li>
              <li>
                <Link to="/savings">Savings</Link>
              </li>
              <li>
                <Link to="/">New Entries</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<IncomeExpenseForm />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/savings" element={<Saving />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
