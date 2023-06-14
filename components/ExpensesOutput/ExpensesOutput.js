import React from "react";
import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";
import { useSelector } from "react-redux";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  const expensesList = useSelector((state)=>state.expensesReducer.expenses);
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expensesList} periodName={expensesPeriod} />
      <ExpensesList expenses={expensesList} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
