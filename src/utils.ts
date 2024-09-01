import fs from 'node:fs/promises';
import { DB_DIR_PATH, DB_FILE_PATH } from './constants';

export const checkDBExists = async () => {
  await fs.mkdir(DB_DIR_PATH, { recursive: true });
  try {
    await fs.access(DB_FILE_PATH);
  } catch (error) {
    await fs.writeFile(DB_FILE_PATH, JSON.stringify([]), { flag: 'a+' });
  }
};
