import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";
import { dateToString } from "../../util/date";

const ExpenseForm = ({
  confirmHandler,
  editedExpenseId,
  cancelHandler,
  isEditing,
  selectedExpense,
}) => {
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  useEffect(() => {
    if (selectedExpense) {
      setAmountInput(selectedExpense.amount.toString());
      setDateInput(dateToString(selectedExpense.date));
      setDescriptionInput(selectedExpense.description);
    }
  }, [selectedExpense]);

  const amountChangeHandler = (enteredAmount) => {
    setAmountInput(enteredAmount);
  };

  const descriptionChangeHandler = (enteredAmount) => {
    setDescriptionInput(enteredAmount);
  };

  const dateChangeHandler = (enteredAmount) => {
    setDateInput(enteredAmount);
  };
  const handleConfirmClick = () => {
    data = {
      amount: Number(amountInput),
      date: new Date(dateInput),
      description: descriptionInput,
      id: editedExpenseId,
    };

    const isAmountValid = !isNaN(data.amount) && data.amount > 0;
    const isDateValid = data.date.toString() !== "Invalid Date";
    const isDescriptionValid = data.description.trim().length > 0;

    if (!isAmountValid || !isDateValid || !isDescriptionValid) {
      Alert.alert("Invalid input!", "Please check input values.");
      return;
    }

    confirmHandler(data);
  };

  return (
    <View style={styles.formContainer}>
      <View>
        <Text style={styles.titleText}>Your Expense</Text>
        <View style={styles.inputRow}>
          <Input
            label="Amount"
            style={styles.rowInput}
            textInputConfig={{
              value: amountInput,
              keyboardType: "decimal-pad",
              onChangeText: amountChangeHandler,
            }}
          />
          <Input
            label="Date"
            style={styles.rowInput}
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              value: dateInput,
              onChangeText: setDateInput,
            }}
          />
        </View>
        <Input
          label="Description"
          textInputConfig={{
            value: descriptionInput,
            multiline: true,
            onChangeText: descriptionChangeHandler,
          }}
        />
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleConfirmClick}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 65,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 50,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttons: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
});
