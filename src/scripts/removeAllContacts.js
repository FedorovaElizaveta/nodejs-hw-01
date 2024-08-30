import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All the contacts were successfully removed!');
  } catch (err) {
    console.error('Error removing all the contacts:', err);
  }
};

removeAllContacts();
