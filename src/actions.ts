import { getData, saveData } from './utils';
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
