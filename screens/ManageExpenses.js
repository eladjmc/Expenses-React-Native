import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";
import Button from "../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { addExpenses, editExpenses, removeExpenses } from "../store/expenses";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpenses = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const allExpenses = useSelector((state) => state.expensesReducer.expenses);
  const selectedExpense = allExpenses.find((exp) => exp.id === editedExpenseId);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    dispatch(removeExpenses(editedExpenseId));
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (data) => {
    if (isEditing) {
      dispatch(editExpenses(data));
    } else {
      dispatch(addExpenses(data));
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        confirmHandler={confirmHandler}
        cancelHandler={cancelHandler}
        editedExpenseId={editedExpenseId}
        isEditing={isEditing}
        selectedExpense={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
