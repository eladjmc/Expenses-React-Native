import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";

const ExpensesSummary = ({ periodName, expenses }) => {
  const sumExpenses = expenses.reduce(
    (sum, current) => sum + current.amount,
    0
  );
  return (
    <View style={styles.container}>
      <Text style={styles.sum}>${sumExpenses.toFixed(2)}</Text>
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
