import { formatDate, getData, getId, saveData } from './utils';
import { getBorderCharacters, table } from 'table';
import type { Options, Expense } from './types';
import { emptyData, expenseNotFound } from './errors';

export const addExpense = async (options: Options) => {
  const data = await getData();
  const newExpense: Expense = {
    ...options,
    id: getId(data),
    date: new Date(formatDate(new Date())),
  };

  data.push(newExpense);

  await saveData(data);

  console.log(`Expense added suffesfully (ID: ${newExpense.id})`);
};

export const deleteExpense = async (options: Pick<Expense, 'id'>) => {
  const { id } = options;
  const data = await getData();

  if (data.length === 0) return emptyData();

  for (const [index, expense] of Object.entries(data)) {
    if (+expense.id === id) {
      const newData = [...data.slice(0, +index), ...data.slice(+index + 1)];

      await saveData(newData);

      console.log('Expense deleted successfully');

      process.exit(0);
    }
  }

  return expenseNotFound(id);
};

export const listExpenses = async () => {
  const data = await getData();

  if (data.length === 0) return emptyData();

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
