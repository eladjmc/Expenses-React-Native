import { createSlice } from "@reduxjs/toolkit";



const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [
      {
        id: "e1",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2022-12-19"),
      },
      {
        id: "e2",
        description: "A pair of trousers",
        amount: 49.99,
        date: new Date("2022-01-05"),
      },
      {
        id: "e3",
        description: "Some bananas",
        amount: 89.99,
        date: new Date("2022-12-01"),
      },
      {
        id: "e4",
        description: "A book",
        amount: 14.99,
        date: new Date("2022-02-19"),
      },
      {
        id: "e5",
        description: "Another book",
        amount: 18.59,
        date: new Date("2022-02-18"),
      },
      {
        id: "e6",
        description: "Another book1",
        amount: 18.59,
        date: new Date("2023-06-13"),
      },
      {
        id: "e7",
        description: "Another book2",
        amount: 18.59,
        date: new Date("2023-06-12"),
      },
      {
        id: "e8",
        description: "Another book3",
        amount: 18.59,
        date: new Date("2023-06-11"),
      },
    ],
  },
  reducers: {
    removeExpenses: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    addExpenses: (state, action) => {
      state.expenses.push(action.payload);
    },
    editExpenses: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
      state.expenses.push(action.payload);
    },
  },

});

export const removeExpenses = expensesSlice.actions.removeExpenses;
export const addExpenses = expensesSlice.actions.addExpenses;
export const editExpenses = expensesSlice.actions.editExpenses;

export default expensesSlice.reducer;
