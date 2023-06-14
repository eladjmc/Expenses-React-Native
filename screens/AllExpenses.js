import { Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { useSelector } from 'react-redux'

const AllExpenses = () => {

  return (
    <ExpensesOutput expensesPeriod="Total"/>

  )
}

export default AllExpenses