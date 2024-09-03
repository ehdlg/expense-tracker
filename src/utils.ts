import fs from 'node:fs/promises';
import { DB_DIR_PATH, DB_FILE_PATH } from './constants';
import { Expense } from './types';

export const checkDBExists = async () => {
  await fs.mkdir(DB_DIR_PATH, { recursive: true });
  try {
    await fs.access(DB_FILE_PATH);
  } catch (_error) {
    await fs.writeFile(DB_FILE_PATH, JSON.stringify([]), { flag: 'a+' });
  }
};

export const getData = async (): Promise<Expense[]> => {
  await checkDBExists();
  const rawData = await fs.readFile(DB_FILE_PATH, 'utf-8');
  const data = JSON.parse(rawData);

  return data;
};

export const saveData = async (newData: Expense[]) => {
  try {
    await fs.writeFile(DB_FILE_PATH, JSON.stringify(newData), 'utf-8');
  } catch (error) {
    console.error('There was an error trying to save the new data', error);
  }
};

export const getId = (data: Expense[]) => {
  if (data.length === 0) return 1;

  return data[data.length - 1].id + 1;
};

export const formatDate = (date: string) => {
  const [formatedDate] = date.split('T');

  return formatedDate;
};
