import fs from 'node:fs/promises';
import path from 'node:path';

const DB_DIR_PATH = path.resolve(__dirname, 'db');
const DB_FILE_PATH = path.resolve(DB_DIR_PATH, 'data.json');

export const checkDBExists = async () => {
  await fs.mkdir(DB_DIR_PATH, { recursive: true });
  try {
    await fs.access(DB_FILE_PATH);
  } catch (error) {
    await fs.writeFile(DB_FILE_PATH, JSON.stringify([]), { flag: 'a+' });
  }
};
