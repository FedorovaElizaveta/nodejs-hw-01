import { promises as fs } from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (err) {
    console.error('Error writing file:', err);
  }
};
