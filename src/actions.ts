import { formatDate, getData, getId, saveData } from './utils';
import { getBorderCharacters, table } from 'table';
import type { NewExpense, Expense, DeleteExpense, UpdateExpense } from './types';
import { emptyData, expenseNotFound } from './errors';

export const addExpense = async (options: NewExpense) => {
  const data = await getData();
  const newExpense: Expense = {
    ...options,
    id: getId(data),
    date: formatDate(new Date().toISOString()),
  };

  data.push(newExpense);

  await saveData(data);

  console.log(`Expense added suffesfully (ID: ${newExpense.id})`);

  process.exit(0);
};

export const deleteExpense = async (options: DeleteExpense) => {
  const { id } = options;
  const data = await getData();

  if (data.length === 0) return emptyData();

  const index = data.findIndex((expense) => +expense.id === id);

  if (index === -1) return expenseNotFound(id);

  const newData = [...data.slice(0, +index), ...data.slice(+index + 1)];

  await saveData(newData);

  console.log('Expense deleted successfully');

  process.exit(0);
};

export const updateExpense = async (options: UpdateExpense) => {
  const { id, amount, description, date } = options;
  const data = await getData();

  if (data.length === 0) return emptyData();

  const index = data.findIndex((expense) => +expense.id === id);

  if (index === -1) return expenseNotFound(id);

  data[index] = {
    ...data[index],
    amount: amount ?? data[index].amount,
    date: date ?? data[index].date,
    description: description ?? data[index].description,
  };

  await saveData(data);

  console.log(`Expense ${id} updated successfully`);

  process.exit(0);
};

export const listExpenses = async () => {
  const data = await getData();

  if (data.length === 0) return emptyData();

  const expenses = [
    ['ID', 'Description', 'Amount', 'Date'],
    ...data.map((expense) => {
      return [expense.id, expense.description, expense.amount, formatDate(expense.date)];
    }),
  ];

  console.log(
    table(expenses, {
      header: { content: 'Expense List' },
      border: getBorderCharacters('norc'),
    })
  );

  process.exit(0);
};

export const summarizeExpenses = async () => {
  const data = await getData();
  const initialValue = 0;

  if (data.length === 0) return initialValue;

  const total = data.reduce((acc, expense) => acc + expense.amount, initialValue);

  console.log(`Total expenses: ${total}`);
};
