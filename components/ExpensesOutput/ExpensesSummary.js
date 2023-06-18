import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";
import { useEffect, useState } from "react";

const ExpensesSummary = ({ periodName, expenses }) => {
  const [sumOfExpenses, setSumOfExpenses] = useState(0);

  function customToFixed(number, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  useEffect(() => {
    setSumOfExpenses(
      customToFixed(
        expenses.reduce((sum, current) => sum + current.amount, 0),
        2
      )
    );
  }, [expenses]);

  return (
    <View style={styles.container}>
      <Text style={styles.sum}>{sumOfExpenses}</Text>
      <Text style={styles.period}>{periodName}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 14,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
