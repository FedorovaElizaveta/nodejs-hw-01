import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      console.log('Contacts data should be an array');
      return;
    }

    const countContacts = contacts.length;
    return countContacts;
  } catch (err) {
    console.error('Error counting contacts:', err);
  }
};

console.log(await countContacts());
