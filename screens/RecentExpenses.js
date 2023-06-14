import { useSelector } from "react-redux";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const expensesList = useSelector(
    (state) => state.expensesReducer.expenses
  ).filter((expense) => {
    const today = new Date();
    const dateWeekAgo = getDateMinusDays(today, 7);
    return expense.date > dateWeekAgo;
  });
  return (
    <ExpensesOutput expenses={expensesList} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpenses;
