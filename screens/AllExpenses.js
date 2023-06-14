import { useSelector } from 'react-redux';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const AllExpenses = () => {
  const expensesList = useSelector((state)=>state.expensesReducer.expenses);
  return (
    <ExpensesOutput expenses={expensesList} expensesPeriod="Total" fallbackText="No register expenses found!"/>

  )
}

export default AllExpenses