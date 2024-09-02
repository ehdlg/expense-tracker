import { getData, saveData } from './utils';
import { getBorderCharacters, table } from 'table';
import type { Options, Expense } from './types';

export const addExpense = async (options: Options) => {
  const data = await getData();
  const newExpense: Expense = {
    ...options,
    id: data.length + 1,
    date: new Date(),
  };

  data.push(newExpense);

  await saveData(data);

  console.log(`Expense added suffesfully (ID: ${newExpense.id})`);
};

export const listExpenses = async () => {
  const data = await getData();

  if (data.length == 0) {
    console.log('There are no expenses yet. Use add [options] to add a new expense.');

    process.exit(0);
  }

  const expenses = [
    ['ID', 'Description', 'Amount', 'Date'],
    ...data.map((expense) => {
      return [expense.id, expense.description, expense.amount, expense.date];
    }),
  ];

  console.log(
    table(expenses, {
      header: { content: 'Expense List' },
      border: getBorderCharacters('norc'),
    })
  );
};
