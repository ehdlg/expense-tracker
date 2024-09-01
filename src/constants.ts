import path from 'node:path';

export const DB_DIR_PATH = path.resolve(__dirname, '../db');
export const DB_FILE_PATH = path.resolve(DB_DIR_PATH, 'data.json');
