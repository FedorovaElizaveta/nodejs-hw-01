import { promises as fs } from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
};
